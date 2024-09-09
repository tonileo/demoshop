using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class PaymentService : IPaymentService
{
    private readonly ICartService cartService;
    private readonly IUnitOfWork unitOfWork;

    public PaymentService(IConfiguration config, ICartService cartService,
    IUnitOfWork unitOfWork)
    {
        this.cartService = cartService;
        this.unitOfWork = unitOfWork;
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
    }
    public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId)
    {
        var cart = await cartService.GetCartAsync(cartId)
            ?? throw new Exception("Cart unavailable");

        var shippingPrice = await GetShippingPriceAsync(cart) ?? 0;

        await ValidateCartItemsAsync(cart);

        var subtotal = CalculateSubtotal(cart);

        if (cart.Coupon != null)
        {
            subtotal = await ApplyDiscountAsync(cart.Coupon, subtotal);
        }

        var total = subtotal + shippingPrice;

        await CreateOrUpdatePaymentIntentAsync(cart, total);

        await cartService.SetCartAsync(cart);

        return cart;
    }

    public async Task<string> RefundPayment(string paymentIntentId)
    {
        var refundOptions = new RefundCreateOptions
        {
            PaymentIntent = paymentIntentId
        };

        var refundService = new RefundService();
        var result = await refundService.CreateAsync(refundOptions);

        return result.Status;
    }

    private async Task CreateOrUpdatePaymentIntentAsync(ShoppingCart cart, long total)
    {
        var service = new PaymentIntentService();

        if (string.IsNullOrEmpty(cart.PaymentIntentId))
        {
            var options = new PaymentIntentCreateOptions
            {
                Amount = total,
                Currency = "eur",
                PaymentMethodTypes = ["card"]
            };
            var intent = await service.CreateAsync(options);
            cart.PaymentIntentId = intent.Id;
            cart.ClientSecret = intent.ClientSecret;
        }
        else
        {
            var options = new PaymentIntentUpdateOptions
            {
                Amount = total
            };
            await service.UpdateAsync(cart.PaymentIntentId, options);
        }
    }

    private async Task<long> ApplyDiscountAsync(Core.Entities.Coupon coupon, long subtotal)
    {
        var couponService = new Stripe.CouponService();

        var couponApp = await couponService.GetAsync(coupon.CouponId);

        if (couponApp.AmountOff.HasValue)
        {
            subtotal -= (long)couponApp.AmountOff * 100;
        }

        if (couponApp.PercentOff.HasValue)
        {
            var discounted = subtotal * (couponApp.PercentOff / 100);
            subtotal -= (long)discounted;
        }

        return subtotal;
    }

    private long CalculateSubtotal(ShoppingCart cart)
    {
        return (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100));
    }

    private async Task ValidateCartItemsAsync(ShoppingCart cart)
    {
        foreach (var item in cart.Items)
        {
            var productItem = await unitOfWork.Repository<Core.Entities.Product>().GetByIdAsync(item.ProductId) 
                ?? throw new Exception("Missing products");

            if (item.Price != productItem.Price)
            {
                item.Price = productItem.Price;
            }
        }
    }

    private async Task<long?> GetShippingPriceAsync(ShoppingCart cart)
    {
        if (cart.DeliveryMethodId.HasValue)
        {
            var deliveryMethod = await unitOfWork.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId);

            if (deliveryMethod == null) return null;

            return (long)deliveryMethod.Price * 100;
        }
        
        return null;
    }
}

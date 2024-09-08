using System;
using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services;

public class CouponService : ICouponService
{
    public CouponService(IConfiguration config)
    {
        StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
    }

    public async Task<Core.Entities.Coupon?> GetCouponFromPromoCode(string code)
    {
        var stripePromotionCode = new PromotionCodeService();

        var options = new PromotionCodeListOptions
        {
            Code = code
        };

        var promotioncode = await stripePromotionCode.ListAsync(options);

        var coupon = promotioncode.FirstOrDefault();

        if (coupon != null && coupon.Coupon != null)
        {
            return new Core.Entities.Coupon
            {
                Name = coupon.Coupon.Name,
                CouponId = coupon.Coupon.Id,
                PromotionCode = coupon.Code,
                AmountOff = coupon.Coupon.AmountOff,
                PercentOff = coupon.Coupon.PercentOff
            };
        }

        return null;
    }
}

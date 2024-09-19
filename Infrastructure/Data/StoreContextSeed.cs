using System.Reflection;
using System.Text.Json;
using Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Data;

public class StoreContextSeed
{
    public static async Task SeedAsync(StoreContext context, UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any(x => x.UserName == "admin@test.com"))
        {
            var admin = new AppUser
            {
                UserName = "admin@test.com",
                Email = "admin@test.com"
            };

            var customer = new AppUser
            {
                UserName = "customer@test.com",
                Email = "customer@test.com"
            };

            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRoleAsync(admin, "Admin");

            await userManager.CreateAsync(customer, "Pa$$w0rd");
            await userManager.AddToRoleAsync(customer, "Customer");
        }

        var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

        if (!context.Products.Any())
        {
            var productsData = await File
                .ReadAllTextAsync(path + @"/Data/SeedData/products.json");

            var products = JsonSerializer.Deserialize<List<Product>>(productsData);

            if (products == null) return;

            context.Products.AddRange(products);

            await context.SaveChangesAsync();
        }

        if (!context.DeliveryMethods.Any())
        {
            var deliveryData = await File
                .ReadAllTextAsync(path + @"/Data/SeedData/delivery.json");

            var delivery = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);

            if (delivery == null) return;

            context.DeliveryMethods.AddRange(delivery);

            await context.SaveChangesAsync();
        }
    }
}

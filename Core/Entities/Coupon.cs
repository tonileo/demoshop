using System;

namespace Core.Entities;

public class Coupon
{
    public required string Name { get; set; }
    public required string CouponId { get; set; }
    public required string PromotionCode {get; set;}
    public decimal? AmountOff { get; set; }
    public decimal? PercentOff { get; set; }
}

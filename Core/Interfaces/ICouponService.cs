using System;
using Core.Entities;

namespace Core.Interfaces;

public interface ICouponService
{
    public Task<Core.Entities.Coupon?> GetCouponFromPromoCode(string code);
}

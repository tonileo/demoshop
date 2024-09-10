namespace Core.Interfaces;

public interface IResponseCacheService
{
    Task CacheReponseAsync(string cacheKey, object reponse, TimeSpan timeToLive);
    Task<string?> GetCachedResponseAsync(string cacheKey);
    Task RemoveCacheByPattern(string pattern);
}

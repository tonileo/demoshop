using System.Text.Json;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Services;

public class ReponseCacheService(IConnectionMultiplexer redis) : IResponseCacheService
{
    private readonly IDatabase _database = redis.GetDatabase(1);
    
    public async Task CacheReponseAsync(string cacheKey, object reponse, TimeSpan timeToLive)
    {
        var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

        var serializedReponse = JsonSerializer.Serialize(reponse, options);

        await _database.StringSetAsync(cacheKey, serializedReponse, timeToLive);
    }

    public async Task<string?> GetCachedResponseAsync(string cacheKey)
    {
        var cachedReponse = await _database.StringGetAsync(cacheKey);

        if (cachedReponse.IsNullOrEmpty) return null;

        return cachedReponse;
    }

    public async Task RemoveCacheByPattern(string pattern)
    {
        var server = redis.GetServer(redis.GetEndPoints().First());
        var keys = server.Keys(database: 1, pattern: $"*{pattern}*").ToArray();

        if (keys.Length != 0)
        {
            await _database.KeyDeleteAsync(keys);
        }
    }
}

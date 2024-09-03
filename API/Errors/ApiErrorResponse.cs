namespace API.Errors;

public class ApiErrorResponse(int statusCode, string mesage, string? details)
{
    public int StatusCode { get; set; } = statusCode;
    public string Message { get; set; } = mesage;
    public string? Details { get; set; } = details;
}

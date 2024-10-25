# Demoshop

**Demoshop** is a e-commerce store focused on selling ski products.

[Access the live app here](https://demoshop2024.azurewebsites.net) (Please wait ~20 seconds for the initial load).

## Technologies

- **Back-end**: ASP.NET Core Web API (.NET 8)
- **Front-end**: Angular 18
- **Database**: Microsoft SQL Server
- **Authentication**: ASP.NET Identity
- **CI/CD Pipeline**: GitHub Actions

## Setup and Installation

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- Dcoker
- NodeJS (at least v20.11.1)

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/tonileo/demoshop.git
   
2. **Navigate to the project directory**:
   ```bash
   cd demoshop

3. **Restore the required packages**:
   ```bash
   dotnet restore

4. **Install Angular dependencies**:
    ~~~ bash
   cd client
   ~~~
   ~~~ bash
   npm install
   ~~~

5. **Set up Stripe payment**:
   - To enable payment functionality, create a Stripe account and generate API keys. In the API folder, create an appsettings.json file with the following structure:
   ```bash
   {
    "Logging": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    },
    "StripeSettings": {
      "PublishableKey": "xyz",
      "SecretKey": "xyz",
      "WhSecret": "xyz"
    },
    "AllowedHosts": "*"
    }


6. **Configure Stripe CLI for webhook**:
   - Install and authenticate the Stripe CLI to use local webhooks. Generate a whsec key by navigating to Stripe Dashboard > Developers > Webhooks > Add local listener. Use the following commands to enable Stripe events in      development:

   ~~~ bash
   stripe login
   ~~~
   ~~~ bash
   stripe listen --forward-to https://localhost:5001/api/payments/webhook -e payment_intent.succeeded
   ~~~

4. **Set up the databases (SQL Server and Redis)**:
   - Run the following command from the project root (demoshop):

   ~~~ bash
   docker compose up -d 
   ~~~

5. **Run the app**:

   ~~~ bash
   cd API
   ~~~
   ~~~ bash
   dotnet run
   ~~~ 

6. **Access the app**:
   - Open your browser and navigate to https://localhost:5001.
   
7. **Run Angular in development mode (if you want)**:
   - Install a self-signed SSL certificate using mkcert for local development:
     
   ~~~ bash
   cd client/ssl
   ~~~
   ~~~ bash
   mkcert localhost
   ~~~
   
8. **Run backend in development**:
  - In the new console:
   ~~~ bash
   cd client
   ~~~
   ~~~ bash
   ng serve
   ~~~ 

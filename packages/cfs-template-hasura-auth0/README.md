This project was bootstrapped with [Create Full Stack](https://github.com/tiagob/create-full-stack).

## Setup

_Assumes MacOS_

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Install Docker

```bash
brew cask install docker
```

Alternatively, you can install via the GUI at https://docs.docker.com/get-docker/

<!-- @remove-mobile-begin -->

### Install and configure Expo CLI

```bash
yarn global add expo-cli
```

If you're new to Expo, register. Expo is free.

```bash
expo register
```

Or login if you have an account

```bash
expo login
```

References

- https://docs.expo.io/workflow/expo-cli/

<!-- @remove-mobile-end -->
<!-- @remove-pulumi-aws-begin -->

### Install and configure Pulumi CLI

```bash
brew install pulumi
```

If you're new to Pulumi, register at https://app.pulumi.com/signup. Pulumi is free. Then login.

```bash
pulumi login
```

References

- https://www.pulumi.com/docs/get-started/install/

### Install AWS CLI

```bash
brew install awscli
```

If you're new AWS, register at https://portal.aws.amazon.com/billing/signup#/start. Then, if you don't have an access key, create a new one. From https://console.aws.amazon.com/iam/home#/security_credentials goto Access Keys > Create New Access Key

Configure by adding your access key ID and secret access key (Default region name and output format are not required).

```bash
aws configure
```

References

- https://www.pulumi.com/docs/intro/cloud-providers/aws/setup/#using-the-cli

### Register domain on AWS Route53

<!-- @remove-web-begin -->

Pulumi web configuration requires a custom domain for CloudFront and that it's registered on Route53.

<!-- @remove-web-end -->

The backend uses the custom domain with a subdomain.

If you don't have a domain, register one on https://console.aws.amazon.com/route53/home#DomainRegistration:

If you already have a domain on a different registrar, transfer to Route53 on https://console.aws.amazon.com/route53/home#DomainTransfer:

References

- https://awscli.amazonaws.com/v2/documentation/api/latest/reference/route53domains/register-domain.html

### Configure Auth0

It's recommended you use separate [Auth0 tenants](https://auth0.com/docs/getting-started/the-basics#account-and-tenants) for development and production.

#### Development

In your development Auth0 tenant create a Machine to Machine Application

- Applications > CREATE APPLICATION > Machine to Machine Applications
- Give it a name (ex. "pulumi")
- Select the "Auth0 Management API" under "Select an API..." dropdown
- Select "All" scopes

Use the created Machine to Machine Application to set the pulumi configuration

```bash
cd packages/pulumi-aws
pulumi stack init development
pulumi config set auth0:domain [YOUR AUTH0 TENANT DOMAIN]
pulumi config set --secret auth0:clientId [YOUR AUTH0 MACHINE TO MACHINE CLIENT ID]
pulumi config set --secret auth0:clientSecret [YOUR AUTH0 MACHINE TO MACHINE CLIENT SECRET]
```

References

- https://www.pulumi.com/docs/intro/cloud-providers/auth0/setup/#configuring-credentials

#### Production

In your production Auth0 tenant create a Machine to Machine Application

- Applications > CREATE APPLICATION > Machine to Machine Applications
- Give it a name (ex. "pulumi")
- Select the "Auth0 Management API" under "Select an API..." dropdown
- Select "All" scopes

Use the created Machine to Machine Application to set the pulumi configuration

```bash
cd packages/pulumi-aws
pulumi stack init production
pulumi config set auth0:domain [YOUR AUTH0 TENANT DOMAIN]
pulumi config set --secret auth0:clientId [YOUR AUTH0 MACHINE TO MACHINE CLIENT ID]
pulumi config set --secret auth0:clientSecret [YOUR AUTH0 MACHINE TO MACHINE CLIENT SECRET]
```

References

- https://www.pulumi.com/docs/intro/cloud-providers/auth0/setup/#configuring-credentials

### Configure and deploy development stack

```bash
cd packages/pulumi-aws
pulumi stack select development
pulumi config set expo:username [YOUR EXPO USERNAME]
pulumi up
```

Local development is now configured. Launch by running `yarn start` in your terminal.

### Configure Pulumi production stack

The domain must be registered in your AWS Route53. Other values can be arbitrarily chosen with some [AWS restrictions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints).

```bash
cd packages/pulumi-aws
pulumi stack select production
pulumi config set domain [YOUR ROUTE53 DOMAIN]
pulumi config set dbName [YOUR POSTGRES DB NAME]
pulumi config set dbUsername [YOUR POSTGRES DB USERNAME]
pulumi config set dbPassword --secret [YOUR POSTGRES DB PASSWORD]
pulumi config set hasuraGraphqlAdminSecret --secret [YOUR HASURA GRAPHQL ADMIN SECRET]
<!-- @remove-mobile-begin -->
pulumi config set expo:username [YOUR EXPO USERNAME]
pulumi config set expo:password --secret [YOUR EXPO PASSWORD]
<!-- @remove-mobile-end -->
```

<!-- @remove-pulumi-aws-end -->
<!-- @remove-manual-config-begin -->

### Configure Auth0

#### Server

From the Auth0 console https://manage.auth0.com/dashboard/

- Create an Auth0 API for the Hasura server
  - APIs > CREATE API
  - Record the identifier/audience (ex. "server").

In `hasura/.env.development` fill in the field

```
HASURA_GRAPHQL_JWT_SECRET={"jwk_url":"https://[YOUR AUTH0 DOMAIN]/.well-known/jwks.json","audience":"[YOUR AUTH0 API AUDIENCE]"}
```

#### Auth0 Rule

From the Auth0 console https://manage.auth0.com/dashboard/

- Create an Auth0 Rule to add the custom JWT claims
  - Rules > CREATE RULE > Empty rule
  - Name the rule (ex. "Hasura access token")
  - Paste the code snippet below into the "Script" section

```js
function hasuraAccessToken(user, context, callback) {
  const namespace = "https://hasura.io/jwt/claims";
  // eslint-disable-next-line no-param-reassign
  context.accessToken[namespace] = {
    "x-hasura-default-role": "user",
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-user-id": user.user_id,
  };
  callback(undefined, user, context);
}
```

<!-- @remove-web-begin -->

#### Web

From the Auth0 console https://manage.auth0.com/dashboard/

- Create a Single Page Application for the React website
  - Applications > CREATE APPLICATION > Single Page Web Applications
  - Set "Allowed Callback URLs", "Allowed Logout URLs", and "Allowed Web Origins" to "http://localhost:3000"

In `packages/web/.env.development` fill in the fields

```
REACT_APP_AUTH0_CLIENT_ID=[YOUR AUTH0 SINGLE PAGE APPLICATION CLIENT ID]
REACT_APP_AUTH0_AUDIENCE=[YOUR AUTH0 API AUDIENCE]
REACT_APP_AUTH0_DOMAIN=[YOUR AUTH0 DOMAIN]
```

<!-- @remove-web-end -->
<!-- @remove-mobile-begin -->

#### Mobile

From the Auth0 console https://manage.auth0.com/dashboard/

- Create a Native Application for the React Native mobile app
  - Applications > CREATE APPLICATION > Native
  - Set "Allowed Callback URLs" to "https://auth.expo.io/@[YOUR EXPO USERNAME]/[YOUR EXPO APP SLUG]"
  - Get YOUR EXPO USERNAME by running `expo whoami`
  - Get YOUR EXPO SLUG from `packages/mobile/app.json` `"slug"`

In `packages/mobile/.env.development` fill in the fields

```
AUTH0_CLIENT_ID=[YOUR AUTH0 NATIVE APPLICATION CLIENT ID]
AUTH0_AUDIENCE=[YOUR AUTH0 API AUDIENCE]
AUTH0_DOMAIN=[YOUR AUTH0 DOMAIN]
```

<!-- @remove-mobile-end -->
<!-- @remove-manual-config-end -->
<!-- @remove-github-actions-begin -->

### CI/CD

After your code is pushed to a GitHub repo, add the following secrets for the Actions under Settings > Secrets.

- `PULUMI_ACCESS_TOKEN`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Get `PULUMI_ACCESS_TOKEN` by creating a new token on the Pulumi [Access Tokens Page](https://app.pulumi.com/account/tokens). Get `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` by creating a new token on https://console.aws.amazon.com/iam/home#/security_credentials under Access Keys > Create New Access Key.

References

- https://www.pulumi.com/docs/guides/continuous-delivery/github-actions/#configuring-your-secrets
- https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets

<!-- @remove-github-actions-end -->

## Run

```bash
yarn start
```

Spins up postgres in Docker, the Hasura server and all clients.

<!-- @remove-pulumi-aws-begin -->

## Deploy

### Development

```bash
cd packages/pulumi-aws
pulumi stack select development
pulumi up
```

This sets up Auth0 which is required for authentication locally.

### Production

```bash
cd packages/pulumi-aws
pulumi stack select production
pulumi up
```

<!-- @remove-pulumi-aws-end -->
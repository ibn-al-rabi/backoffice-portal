const LOGIN_PROVIDERS = Object.freeze({
  GOOGLE: 'google',
});

type LoginProvider = typeof LOGIN_PROVIDERS[keyof typeof LOGIN_PROVIDERS];

interface LoginWithProviderRequest {
  name: string;
  email: string;
  provider: LoginProvider;
}

interface LoginWithProviderSuccessResponse {
  token: string;
  expiresIn: number;
}

interface LoginWithProviderErrorResponse {
  error: string;
  message: string;
}

type LoginWithProviderResponse = LoginWithProviderSuccessResponse | LoginWithProviderErrorResponse;

export {
  type LoginProvider,
  type LoginWithProviderRequest,
  type LoginWithProviderResponse,
  LOGIN_PROVIDERS,
};

import { backofficeApiClient } from "../../remote";
import ENDPOINTS from "./endpoints.ts";
import { LoginWithProviderRequest, LoginWithProviderResponse } from "./types.ts";

const api = {
  loginWithProvider: async (data: LoginWithProviderRequest): Promise<LoginWithProviderResponse> => {
    return await backofficeApiClient.post(ENDPOINTS.loginWithProvider, data);
  },
};

export default api;

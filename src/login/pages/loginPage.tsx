import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

import { GoogleAuthTokenData } from "../types.ts";
import { api, LOGIN_PROVIDERS } from "../remote";

const LoginPage = () => {
  const [output, setOutput] = useState<{ name: string; email: string } | null>(
    null
  );

  const onSuccess = (response: CredentialResponse) => {
    const decoded: GoogleAuthTokenData = jwtDecode(response.credential || "");
    console.log(decoded);
    setOutput({
      name: decoded.name,
      email: decoded.email,
    });

    api.loginWithProvider({
      provider: LOGIN_PROVIDERS.GOOGLE,
      name: decoded.name,
      email: decoded.email,
    }).then(() => {}, () => {});

  };

  const onError = () => {
    console.log("login failed!");
  };

  return (
    <>
      <h1>Login</h1>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
      <div>{output && JSON.stringify(output)}</div>
    </>
  );
};

export default LoginPage;

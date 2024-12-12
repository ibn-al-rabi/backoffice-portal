import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider } from "react-router";

import Router from "./router.tsx";

createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID}>
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  </GoogleOAuthProvider>
);

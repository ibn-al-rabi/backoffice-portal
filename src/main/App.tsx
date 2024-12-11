import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginWithGoogle = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decodedToken = jwtDecode(credentialResponse.credential || "");
        console.log(`Login Success: ${JSON.stringify(decodedToken)}`);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

const LogoutFromGoogle = () => {
  return (
    <p
      onClick={() => {
        console.log("Logout");
        googleLogout();
      }}
    >
      Logout
    </p>
  );
};

function App() {
  return (
    <>
      <div>
        <p>ibn el-rabi</p>
        <LoginWithGoogle />
        <LogoutFromGoogle />
      </div>
    </>
  );
}

export default App;

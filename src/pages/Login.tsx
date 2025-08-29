import AuthLeft from "../components/AuthLeft";
import AuthRight from "../components/AuthRight";

export default function Login() {
  return (
    <main className="auth-wrapper">
      <div className="auth-box d-flex">
        {/* Left side with overlay */}
        <AuthLeft />
        {/* Right side login form */}
        <AuthRight />

      </div>
    </main>
  );
}

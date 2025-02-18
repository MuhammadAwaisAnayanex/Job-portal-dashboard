import { Link } from "react-router-dom";

const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-8 w-96 auth-page">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" for="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" for="password">Password</label>
              <input type="password" id="password" className="w-full p-2 border rounded" placeholder="Enter your password" />
            </div>
            <div className="mb-3">
                <span>Don't have an account yet? <Link to={"/signUp"} className="underline text-blue-600">Register here!</Link></span>
            </div>
            <button type="submit" className="w-full p-2 rounded hover:cursor-pointer">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  export default Login;
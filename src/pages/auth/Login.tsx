import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/services/auth/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setAdmin } from "../../redux/services/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { handleSubmit, register } = useForm({});
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const logingInfo = await login(data).unwrap();
      toast.success(logingInfo.message);
      dispatch(setAdmin(logingInfo.token));
      navigate("/");
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="text"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-300 text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

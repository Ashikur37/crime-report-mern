import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "../../utils/validations/auth";
import { login } from "../../services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";



const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
        setLoading(true);
        const result = await login(data)
        setLoading(false);
        if (result.success) {
            dispatch(setUser(result.data));
            toast.success("Login successfull");
            navigate('/');
        }
        else {
            toast.error(result.message);
        }
    };
    return (
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Phone
                </label>
                <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.phone && "border-red-500"
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    type="text"
                    placeholder="Phone"
                    {...register("phone")}
                />
                {errors.phone && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.phone?.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Password
                </label>
                <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.password && "border-red-500"
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.password?.message}
                    </p>
                )}
            </div>


            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
                <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#test"
                >
                    Forgot Password?
                </a>
            </div>
            <div className="text-center">
                <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/register"
                >
                    Don't have an account? Register!
                </Link>
            </div>
        </form>
    )
}

export default LoginForm
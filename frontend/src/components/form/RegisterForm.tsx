import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerSchema } from "../../utils/validations/auth";
import { signup } from "../../services/authService";
import { FC, useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const RegisterForm: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (data) => {
        setLoading(true);
        const result = await signup(data)
        setLoading(false);
        if (result.success) {
            toast.success("Regration successfull");
            navigate('/login');
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
                    htmlFor="lastName"
                >
                    Full Name
                </label>
                <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.fullname && "border-red-500"
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    id="fullname"
                    type="text"
                    placeholder="Last Name"
                    {...register("fullname")}
                />
                {errors.fullname && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.fullname?.message}
                    </p>
                )}

            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.email && "border-red-500"
                            } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-xs italic text-red-500 mt-2">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
                <div className="md:ml-2 w-full">
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

            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.password && "border-red-500"
                            } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="password"
                        type="password"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-xs italic text-red-500 mt-2">
                            {errors.password?.message}
                        </p>
                    )}
                </div>
                <div className="md:ml-2 w-full">
                    <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="c_password"
                    >
                        Confirm Password
                    </label>
                    <input
                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.confirmPassword && "border-red-500"
                            } rounded appearance-none focus:outline-none focus:shadow-outline`}
                        id="c_password"
                        type="password"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <p className="text-xs italic text-red-500 mt-2">
                            {errors.confirmPassword?.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <input type="checkbox" id="terms" {...register("terms")} />
                <label
                    htmlFor="terms"
                    className={`ml-2 mb-2 text-sm font-bold ${errors.terms ? "text-red-500" : "text-gray-700"
                        }`}
                >
                    Accept Terms & Conditions
                </label>
                {errors.terms && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.terms?.message}
                    </p>
                )}
            </div>
            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                >
                    Register Account
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
                <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                >
                    Already have an account? Login!
                </a>
            </div>
        </form>
    )
}

export default RegisterForm
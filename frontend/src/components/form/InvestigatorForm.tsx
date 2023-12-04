import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { investigaotrSchema } from "../../utils/validations/auth";
import { FC, useState } from "react";
import toast from 'react-hot-toast';
import {  useNavigate } from "react-router-dom";
import { createInvestigator } from "../../services/adminService";
import { districts, divisions, upazilas } from "../../utils/validations/area";

const InvestigatorForm: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof investigaotrSchema>>({
        resolver: zodResolver(investigaotrSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof investigaotrSchema>> = async (data) => {
        setLoading(true);
        const result = await createInvestigator(data)
        setLoading(false);
        if (result.success) {
            toast.success("Investigator added successfully");
            navigate('/investigators');
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
                    placeholder="Full Name"
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
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Division
                </label>
                <select {...register("division")} className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.division && "border-red-500"
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}>
                    <option value="">Select division</option>
                    {divisions.map((division, index) => <option key={index} value={division.name}>{division.name}</option>)}
                </select>
                {errors.division && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.division?.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    District
                </label>
                <select {...register("district")} className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.district && "border-red-500"
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}>
                    <option value="">Select district</option>
                    {districts.map((district, index) => <option key={index} value={district.name}>{district.name}</option>)}
                </select>
                {errors.district && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.district?.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Upazila
                </label>
                <select {...register("upazila")} className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.upazila && "border-red-500"
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}>
                    <option value="">Select upazila</option>
                    {upazilas.map((upazila, index) => <option key={index} value={upazila.name}>{upazila.name}</option>)}
                </select>
                {errors.upazila && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.upazila?.message}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Address
                </label>
                <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.address && "border-red-500"
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    type="text"
                    placeholder="Address"
                    {...register("address")}
                />
                {errors.address && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.address?.message}
                    </p>
                )}
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
           
            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                >
                    Add
                </button>
            </div>
            
        </form>
    )
}

export default InvestigatorForm
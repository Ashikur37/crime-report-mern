import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "../../services/authService";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";
import { crimeSchema, guestCrimeSchema } from "../../utils/validations/crime";
import { districts, divisions, upazilas } from "../../utils/validations/area";
import { reportCrime, reportGuestCrime } from "../../services/crimeService";



const ReportGuestCrimeForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedDistricts,setSelectedDistricts]=useState([]);
    const [selectedUpazilas,setSelectedUpazilas]=useState([]);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof guestCrimeSchema>>({
        resolver: zodResolver(guestCrimeSchema),
    });

    const onSubmit: SubmitHandler<z.infer<typeof guestCrimeSchema>> = async (data) => {
        setLoading(true);
        const result = await reportGuestCrime(data)
        setLoading(false);
        toast.success("Report submitted successfull");
        navigate('/');


    };
    return (
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

            {/* <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Crime Type
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
            </div> */}
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
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Crime Type
                </label>
                <select {...register("type")} className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.type && "border-red-500"
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}>
                    <option value="">Select crime type</option>
                    <option value="Fraud">Fraud</option>
                    <option value="Cybercrime">Cybercrime</option>
                    <option value="Robbery">Robbery</option>
                    <option value="Kidnapping">Kidnapping</option>
                    <option value="Sexual Assault">Sexual Assault</option>
                    <option value="Drug Possession">Drug Possession</option>
                </select>
                {errors.type && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.type?.message}
                    </p>
                )}
            </div>

            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Division
                </label>
                <select {...register("division")} className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.division && "border-red-500"
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    onChange={e=>{
                        const division_id=divisions.filter(div=>div.name==e.target.value)[0].id;
                        setSelectedDistricts(districts.filter(dis=>dis.division_id==division_id));
                    }}
                    >
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
                    } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    onChange={e=>{
                        let district_id=districts.filter(div=>div.name==e.target.value)[0].id;
                        setSelectedUpazilas(upazilas.filter(dis=>dis.district_id==district_id));
                    }}
                    >
                    <option value="">Select district</option>
                    {selectedDistricts.map((district, index) => <option key={index} value={district.name}>{district.name}</option>)}
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
                    {selectedUpazilas.map((upazila, index) => <option key={index} value={upazila.name}>{upazila.name}</option>)}
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
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Description
                </label>
                <input
                    className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border ${errors.description && "border-red-500"
                        } rounded appearance-none focus:outline-none focus:shadow-outline`}
                    type="text"
                    placeholder="Description"
                    {...register("description")}
                />
                {errors.description && (
                    <p className="text-xs italic text-red-500 mt-2">
                        {errors.description?.message}
                    </p>
                )}
            </div>

            <div className="mb-6 text-center">
                <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={loading}
                >
                    Submit
                </button>
            </div>

        </form>
    )
}

export default ReportGuestCrimeForm
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assignInvestigator, getCrime, getInvestigators } from "../../services/adminService";
import toast from "react-hot-toast";

const ViewReport = () => {
    const { reportId } = useParams();
    const [report, setReport] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [investigators, setInvestigators] = useState([]);
    const [investigator,setInvestigator]=useState<string|null>(null)
    useEffect(() => {
        const fetchReport = async () => {
            const data = await getCrime(reportId!);
            setReport(data.data);
            const invest = await getInvestigators();
            setInvestigators(invest.data);
            setLoading(false);
        }
        fetchReport();
    }, [reportId])
    const assignInvest=async()=>{
        if(!investigator){
            return;
        }
        await assignInvestigator({
            investigator,
            crime_id:reportId!
        })
        toast.success("Investigator assigned successfully");

    }
    return loading ? <></> : <div className="flex justify-between mt-4">
        <div className="w-1/2">
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Type</div>
                <div className="w-1/2">{report.type}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Description</div>
                <div className="w-1/2">{report.description}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Address</div>
                <div className="w-1/2">{report.address}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Upazilla</div>
                <div className="w-1/2">{report.upazila}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">District</div>
                <div className="w-1/2">{report.district}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Division</div>
                <div className="w-1/2">{report.division}</div>
            </div>

        </div>
        <div className="w-1/2 ml-3">
            <div className="mb-4">
                <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                >
                    Assign Investigator
                </label>
                <select onChange={(e)=>{
                    setInvestigator(e.target.value)
                }} className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline">
                    <option value="">Select Investigator</option>
                    {investigators.map((investigator,index)=><option key={index} value={investigator._id}>{investigator.fullname}</option>)}
                </select>
                <button
                    className="mt-2 w-full px-4 py-2 font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    onClick={assignInvest}
                    disabled={loading}
                >
                    Submit
                </button>
            </div>

        </div>
    </div>
}

export default ViewReport
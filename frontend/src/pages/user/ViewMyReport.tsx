import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assignInvestigator, getInvestigators } from "../../services/adminService";
import toast from "react-hot-toast";
import { getMyCrime } from "../../services/crimeService";

const ViewMyReport = () => {
    const { reportId } = useParams();
    const [report, setReport] = useState<any>({});
    const [user, setUser] = useState<any>({});
    const [investigator, setInvestigator] = useState<any>({});

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchReport = async () => {
            const data = await getMyCrime(reportId!);
            setReport(data.data);
            setUser(data.user);
            setInvestigator(data.investigator);

     
            setLoading(false);
        }
        fetchReport();
    }, [reportId])
   
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
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Status</div>
                <div className="w-1/2">{report.status}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Investigator</div>
                <div className="w-1/2">{investigator?investigator.fullname:'TBA'}</div>
            </div>
            {investigator&&<div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Investigator Phone</div>
                <div className="w-1/2">{investigator.phone}</div>
            </div>}
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Reporter</div>
                <div className="w-1/2">{user?user.fullname:report.info.fullname}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Phone</div>
                <div className="w-1/2">{user?user.phone:report.info.phone}</div>
            </div>
            <div className="flex justify-between  bg-teal-700 text-white m-1 p-2">
                <div className="w-1/2">Created At</div>
                <div className="w-1/2"> {new Date(report.createdAt).toLocaleTimeString()} {new Date(report.createdAt).toLocaleDateString() }</div>
            </div>
            </div>

        </div>
    </div>
}

export default ViewMyReport
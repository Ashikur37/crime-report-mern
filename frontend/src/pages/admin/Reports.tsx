import { useEffect, useState } from "react"
import { getAllCrime } from "../../services/adminService";
import { Link } from "react-router-dom";


const Reports = () => {
    const [loading, setLoading] = useState(true);
    const [allReports,setAllReports]=useState([])
    const [reports, setReports] = useState([]);
    const [type,setType]=useState("all");
    useEffect(() => {
        const fetchReport = async () => {
            const data = await getAllCrime();
            setAllReports(data.data)
            setReports(data.data);
            setLoading(false);
        }
        fetchReport();
    }, [])
    useEffect(()=>{
        if(type=='all'){
            setReports(allReports)
        }
        else if(type=='guest'){
            setReports(allReports.filter((report:any)=>report.UserId==null))
        }
        else{
            setReports(allReports.filter((report:any)=>report.UserId!=null))
        }
    },[type])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="me-2">
                    <a onClick={()=>setType("all")} href="#" aria-current="page" className={`inline-block p-4 ${type=='all'?'text-blue-600':''} bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>All</a>
                </li>
                <li className="me-2">
                    <a onClick={()=>setType("registered")} href="#" className={`inline-block p-4 ${type=='registered'?'text-blue-600':''} bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Registered User</a>
                </li>
                <li className="me-2">
                    <a onClick={()=>setType("guest")} href="#" className={`inline-block p-4 ${type=='guest'?'text-blue-600':''} bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}>Guest</a>
                </li>

            </ul>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Crime Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Division
                        </th>
                        <th scope="col" className="px-6 py-3">
                            District
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Upazila
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        reports.map((report: any, index) => <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {report.type}
                            </th>
                            <td className="px-6 py-4">
                                {report.division}
                            </td>
                            <td className="px-6 py-4">
                                {report.district}
                            </td>
                            <td className="px-6 py-4">
                                {report.upazila}
                            </td>
                            <td className="px-6 py-4">
                                {report.address}
                            </td>
                            <td className="px-6 py-4">
                                <Link to={`/report/${report._id}`}>
                                    View
                                </Link>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Reports
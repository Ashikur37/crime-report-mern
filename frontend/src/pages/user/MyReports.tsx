import { useEffect, useState } from "react"
import { getList } from "../../services/crimeService"
import { Link } from "react-router-dom";


const MyReports = () => {
    const [loading, setLoading] = useState(true);
    const [reports, setReports] = useState([]);
    useEffect(() => {
        const fetchReport = async () => {
            const data = await getList();
            setReports(data.data);
            setLoading(false);
        }
        fetchReport();
    }, [])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        View
                    </th>
                </tr>
            </thead>
            <tbody>
               
                {
                    reports.map((report:any,index)=> <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                    <span className={`${report.status=='Running'&&'bg-blue-500'} ${report.status=='Pending'&&'bg-yellow-500'} text-white px-2 py-1 rounded`}>{report.status}</span>
                    
                    </td>
                    <td>
                    <td className="px-6 py-4">
                                <Link to={`/my-reports/${report._id}`}>
                                    View
                                </Link>
                            </td>
                    </td>
                </tr>)
                }
               
            </tbody>
        </table>
    </div>
    )
}

export default MyReports
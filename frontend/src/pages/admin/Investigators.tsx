import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getInvestigators } from "../../services/adminService";

const Investigators = () => {
  const [loading, setLoading] = useState(true);
  const [investigators, setInvestigators] = useState([]);
  useEffect(() => {
    const fetchReport = async () => {
      const data = await getInvestigators();
      setInvestigators(data.data);
      setLoading(false);
    }
    fetchReport();
  }, [])
  return (
    <>
      <div className="flex justify-end my-4">
        <Link to='/create-investigators' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add new investigator
        </Link>

      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th><th scope="col" className="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>

            {
              investigators.map((investigator: any, index) => <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {investigator.fullname}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {investigator.email}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {investigator.phone}
                </th>

              </tr>)
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Investigators
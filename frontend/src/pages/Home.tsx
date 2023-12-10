import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Link } from "react-router-dom"

const Home = () => {
  
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="py-2 text-2xl text-gray-500">
        Welcome to crime report management
      </h1>
      {
        user?<h1>Welcome {user.fullname}</h1>: <>
        <h1 className="py-1 text-2xl text-gray-500">
        Login to continue
      </h1>
        <Link to='/report-guest' className=" text-2xl text-gray-500">
          Report without login
        </Link>
        </>
      }
     
    </div>
  )
}

export default Home
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Home = () => {
  
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="py-2 text-2xl text-gray-500">
        Welcome to crime report management
      </h1>
      {
        user?<h1>Welcome {user.fullname}</h1>: <h1 className="py-1 text-2xl text-gray-500">
        Login to continue
      </h1>
      }
     
    </div>
  )
}

export default Home
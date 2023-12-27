import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Home = () => {
  
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className="flex justify-center flex-col items-center">
       <h1 className="py-2 text-2xl text-gray-500">
        Welcome to crime report management
      </h1>
      {
      //   user?<h1>Welcome {user.fullname}</h1>: <>
      //   <h1 className="py-1 text-2xl text-gray-500">
      //   Login to continue
      // </h1>
      //   <Link to='/report-guest' className=" text-2xl text-gray-500">
      //     Report without login
      //   </Link>
      //   </>
      }
     {/* <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={()=>{}}
    >
      <SwiperSlide>
        <img src="Crime-Reporting.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide><img src="Crime-Reporting.webp" alt="" /></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
    <img src="Crime-Reporting-System-project-in-PHP.jpg" alt="" style={{
      width:"80%"
    }}/>
    </div>
  )
}

export default Home
import { getRequest,  } from "./httpService";


const getAllCrime=async()=>{
  const result=await getRequest({
    url:"admin/crime/list",
  })
  return result;

}

export { getAllCrime };
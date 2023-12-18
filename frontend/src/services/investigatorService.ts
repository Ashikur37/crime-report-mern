import { getRequest, postRequest } from "./httpService";

const getAssignedCrime=async()=>{
    const result=await getRequest({
      url:"investigator/crime/list",
    })
    return result;
  
  }
  const getCrime=async(id:string)=>{
    const result=await getRequest({
      url:"investigator/crime/"+id,
    })
    return result;
  
  }

  const updateStatus = async (data:{
    crime_id:string,
    status:string
  }) => {
    const result = await postRequest({
      url: "investigator/crime/update",
      body: data,
    });
    return result;
  };

export {getAssignedCrime,getCrime,updateStatus}
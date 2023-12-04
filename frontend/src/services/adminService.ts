import { z } from "zod";
import { investigaotrSchema } from "../utils/validations/auth";
import { getRequest, postRequest,  } from "./httpService";


const getAllCrime=async()=>{
  const result=await getRequest({
    url:"admin/crime/list",
  })
  return result;

}
const getCrime=async(id:string)=>{
  const result=await getRequest({
    url:"admin/crime/"+id,
  })
  return result;

}
const getInvestigators=async()=>{
  const result=await getRequest({
    url:"admin/investigator/list",
  })
  return result;
}
const createInvestigator = async (user: z.infer<typeof investigaotrSchema>) => {
  const result = await postRequest({
    url: "admin/investigator/create",
    body: user,
  });
  return result;
};
const assignInvestigator = async (data:{
  crime_id:string,
  investigator:string
}) => {
  const result = await postRequest({
    url: "admin/investigator/assign",
    body: data,
  });
  return result;
};

export { getAllCrime,getInvestigators,createInvestigator,getCrime,assignInvestigator };

// router.get('/investigator/list',adminMiddleware,allCrimeList);
// router.post('/investigator/create',adminMiddleware,createInvestigator);
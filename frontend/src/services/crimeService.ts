import { z } from "zod";
import { getRequest, postRequest } from "./httpService";
import { crimeSchema } from "../utils/validations/crime";


const reportCrime = async (data: z.infer<typeof crimeSchema>) => {
  const result = await postRequest({
    url: "crime/create",
    body: data,
  });
  return result;
};
const getList=async()=>{
  const result=await getRequest({
    url:"crime/list",
  })
  return result;

}
export { reportCrime,getList };
import axios  from "axios";

const baseURL = 'https://localhost:44397/api/';

const apiServices = axios.create({
    baseURL,
})
export  const GetDashboard =async (data) =>{
    try{
        const response =  await apiServices.get(`Home/Dashboard?Labid=${data}`);
        return response.data;
    }
    catch(error){
        throw(error);
    }
   
} 
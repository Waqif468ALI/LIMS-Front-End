import axios  from "axios";

const baseURL = 'https://localhost:44397/api';

const apiServices = axios.create({
    baseURL,
})

export  const AddLogoImage = async (formdata) =>{
    try{
        const response = await apiServices.post('/Home/UploadLogoImage', formdata);
        return response.data;
    }
    catch(error){
        console.log("Add Test error",error)
        throw error
       }
}
export  const GetLogoImage = async (LabID) =>{
    try{
        const response = await apiServices.get(`/Home/GetLogoImage?LabID=${LabID}`);
        return response.data;
    }
    catch(error){
        console.log("Add Test error",error)
        throw error
       }
}
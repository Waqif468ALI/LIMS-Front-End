import axios from 'axios';

const baseURL = "https://localhost:44397/api/";

const apiService = axios.create({
  baseURL,
});

export const AddUsers = async(Data) =>{
    try{
        const response = await apiService.post('Auth/register',
        {
        FirstName: Data.FirstName,
        LastName: Data.LastName,
        Email:Data.Email,
        PhoneNumber:Data.PhoneNumber,
        Password:Data.Password
        }
        )
        return response;
    }
   catch(error){
    console.log("Add user error",error)
    throw error
   }
   
}
export const GetLogin = async(Data) =>{
  try{
      const response = await apiService.post('Auth/Login',
      {
          Email:Data.Email,
          Password:Data.Password
      } )
      return response.data;
  }
 catch(error){
  console.log("Add user error",error)
  throw error
 }
}
export const LabandUserRegistration = async (Data) =>{
    try{
        const res = await apiService.post('Auth/Registration',{
            UserModel: {
            FirstName: Data.FirstName,
            LastName: Data.LastName, 
            Email:Data.Email,
            PhoneNumber:Data.PhoneNumber,
            Password:Data.Password,
            user_Role:Data.Admin,
          },
          LabDetails: {
            LaboratoryName:Data.LaboratoryName,
            LaboratoryContactNumber:Data.LaboratoryContactNumber,
            LaboratoryEmail:Data.LaboratoryEmail,
            LaboratoryAddress: Data.LaboratoryAddress,
          }})
        return res;
    }
    catch(error){
        console.log("Lab and user registration error",error)
        throw error     
    }
}

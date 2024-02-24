import axios  from "axios";

const baseURL = 'https://localhost:44397/api/';

const apiServices = axios.create({
    baseURL,
})

export  const Addpatient = async (data) =>{

    try{
        const response  = await apiServices.post('Home/Addpatient',
          {
            PatientName:data.PatientName,
            ReferredBy: data.ReferredBy,
            ContactNumber:data.ContactNumber,
            Sex:data.gender,
            Age:data.Age,
            Comments :data.Comments,
            // DOB:data.DOB,
            Address:data.Address,
            LaboratoryID:data.LaboratoryID
          } 
        )
        return response;
    }
    catch(error){
        console.log("Add Test error",error)
        throw error
       }
}
export  const RetrivePatientsData = async (LabID) =>{
        try{
            const response  = await apiServices.get(`/Home/GetPatient?LabID=${LabID}`)
            return response.data;
        }
        catch(error){
            console.log("Add Test error",error)
            throw error
           }
    }
    export  const GetSinglepatient = async (id,LabID) =>{
        
        try{
            const response  = await apiServices.get(`/Home/GetSinglePatient?id=${id}&LabID=${LabID}`)
            
            return response.data;
        }
        catch(error){
            console.log("Add Test error",error)
            throw error
           }
    }

    export  const GloabalSearchPatient = async (id,name) =>{
        
        try{
            const response  = await apiServices.get(`/Home/PatientGloablSearch?labid=${id}&Name=${name}`)
            return response.data;
        }
        catch(error){
            console.log("Add Test error",error)
            throw error
           }
    }
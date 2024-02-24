import axios  from "axios";

const baseURL = 'https://localhost:44397/api';

const apiServices = axios.create({
    baseURL,
})

export  const AddTest = async (data) =>{
    try{
        const response  = await apiServices.post('/Home/AddTest',
          {
            TestName: data.test_name,
            TestCategoryName: data.TestCategoryName, 
            TestPrice: data.TestPrice,
            Unit : data.Unit,
            NormalRange: data.Reference_value,
            Comments:data.Comments,
            LaboratoryID:sessionStorage.getItem('LabID')
          } 
        )
        return response;
    }
    catch(error){
        console.log("Add Test error",error)
        throw error
       }
}
export  const RetriveTest = async (LabID) =>{
        try{
            const response  = await apiServices.get(`/Home/GetTests?LabID=${LabID}`)
            return response.data;
        }
        catch(error){
            console.log("Add Test error",error)
            throw error
           }
    }

    export  const GetDataBySearch = async (data,LabID) =>{
                  
            try{
                const response  = await apiServices.get(`/Home/GetTestforSearch?Queryparams=${data}&LabID=${LabID}` )
                console.log("response",response)
                return response.data;
            }
            catch(error){
                console.log("Add Test error",error)
                throw error
               }
        }

        export  const AddPrescription = async (data) =>{
            try{
                const response  = await apiServices.post('/Home/GeneratePresciption',data )
                return response;
            }
            catch(error){
                console.log("Add Test error",error)
                throw error
            }
        }

        export  const GetPrescription = async (patientID,LabID) =>{
            try{
                const response  = await apiServices.get(`/Home/GetPresciptionsData?PatientID=${patientID}&LabID=${LabID}` )
                return response.data;
            }
            catch(error){
                console.log("Add Test error",error)
                throw error
               }
        }

        export  const Reports = async (patientID,LabID) =>{
            try{
                const response  = await apiServices.get(`/Home/Reports?PatientID=${patientID}&LabID=${LabID}` )
                return response.data;
            }
            catch(error){
                console.log("Add Test error",error)
                throw error
               }
        }
       
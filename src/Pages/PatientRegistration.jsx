import React from 'react'
import { useApi } from '../ContextApi/ContextApi'; 
import { useNavigate } from 'react-router-dom';
import  {useEffect, useState} from 'react'
import { Addpatient,RetrivePatientsData } from '../Services/PatientServicces';
import {  TextField, Button, MenuItem, Card ,Box, Divider  } from '@mui/material';
//   import SendIcon from '@mui/icons-material/Send';
import "../UI/Addpatientmodal.css"
import SpinnerModal from '../Spinner/SpinnerModal';
import AddTestPrescription from './AddTestPrescription';

const PatientRegistration = () =>{
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 
  const {isSubmitted, setSubmissionStatus } = useApi();

    const[formData,setformData] = useState({
        PatientName:'',
        ReferredBy:'',
        ContactNumber:'',
        gender:'',
        Age:'',
        Comments :'',
        DOB:'',
        Address:'',
        LaboratoryID: sessionStorage.getItem('LabID')

    });
    
    const onchange = (e) =>{
        const {name,value} = e.target;
        setformData({
            ...formData,
            [name]:value,
        }) 
    }

    // const NavigateTo = () =>{
    //   navigate("/Home/PatientList")
    // }
    const SubmitForm = async(e) =>{
        e.preventDefault();
        setIsLoading(true)
        try{
          const response = await  Addpatient(formData)
          if(response){
            setSubmissionStatus(true)
            console.log("isSubmitted",isSubmitted)
          }
        }
        catch(error){
          console.log("something wrong",error)
        }
        finally{
          setIsLoading(false)
        }
     
    }
   
    const Gender = [
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'Female',
        },
       
      ];
    return (
    <>  
  {isLoading && <SpinnerModal isLoading={true} />}
   <div className='container-fluid pt-1'>
      <Card sx={{padding:'10px',width: '100%', overflow: 'hidden' }}>
        <form onSubmit={SubmitForm}>
            <div className='row'>
                <div  className='col-md-3 mt-2'>
                    <TextField
                        inputProps={{ className: 'AddPatient_input' }}
                        InputLabelProps={{className:'AddPatient_Label' }}
                        label='Patient Name'
                        className=''
                        id='PatientName'
                        name='PatientName'
                        size='small'
                        required
                        onChange={onchange}
                    ></TextField>
                </div>
                <div className='col-md-3 mt-2'>
                    <TextField
                        inputProps={{ className: 'AddPatient_input' }}
                        InputLabelProps={{className:'AddPatient_Label' }}
                        label='Referred By'
                        className=''
                        id='ReferredBy'
                        size='small'
                        name='ReferredBy'
                        required
                        onChange={onchange} />
                </div>
              <div  className='col-md-3 mt-2'>
                      <TextField
                          inputProps={{ className: 'AddPatient_input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='Phone number'
                          className=''
                          id='ContactNumber'
                          name='ContactNumber'
                          size='small'
                          
                         onChange={onchange} />
                  </div> 
                
                <div  className='col-md-3 mt-2'>
                <TextField
                   inputProps={{ className: 'AddPatient_input_DropDown' }}
                   InputLabelProps={{className:'AddPatient_Label' }}
                   label='Gender'
                   id='gender'
                   name='gender'
                   select
                   size='small'
                   required
                    onChange={onchange}
                 >
            {Gender.map((option) => (
                 <MenuItem key={option.value} value={option.value}>
                   {option.label}
                 </MenuItem>
                ))}
               </TextField>
                   
                </div>
                <div  className='col-md-3 mt-2'>
                      <TextField
                          inputProps={{ className: 'AddPatient_input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='Age'
                          className=''
                          id='Age'
                          name='Age'
                          size='small'
                          required
                         onChange={onchange} />
                  </div>
                
                  <div  className='col-md-3 mt-2'>
                      <TextField
                          inputProps={{ className: 'AddPatient_input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='Comments'
                          className=''
                          id='Comments'
                          name='Comments'
                          size='small'
                          
                         onChange={onchange} />
                  </div>
                 
                 <div  className='col-md-3 mt-2'>
                      <TextField
                          inputProps={{ className: 'AddPatient_input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='DOB'
                          className=''
                          id='DOB'
                          name='DOB'
                          size='small'
                          
                         onChange={onchange} />
                  </div>
                  <div  className='col-md-3 mt-2'>
                      <TextField
                          inputProps={{ className: 'AddPatient_input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='Address'
                          className=''
                          id='Address'
                          name='Address'
                          size='small'
                          
                         onChange={onchange} />
                  </div>
                 </div>
                 
                <div className='row pt-4'>
                  <div  className='col-md-3'>
                    <Button type='save' style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8', }}  >save</Button>
                  </div>
                </div>
                <Divider sx={{color:'black'}}></Divider>
                <Box>
                   <AddTestPrescription />
                </Box>
        </form>
        </Card>  
    </div>
    </>
        
    )
}
export default PatientRegistration;
import react, { useState } from 'react'
import {Card,Box,TextField,Button} from '@mui/material'
import '../UI/Registration.css'
import { LabandUserRegistration } from '../Services/Authservices'
import SpinnerModal from '../Spinner/SpinnerModal'


const AccountRegistration = () =>{
    const [isLoading, setIsLoading] = useState(false); 
    const[IsError,setIserror] = useState(false);
   const[formData,setFormData] = useState({
    LaboratoryName:'',
    LaboratoryContactNumber:'',
    LaboratoryEmail:'',
    LaboratoryAddress:'',
    FirstName:'',
    LastName:'',
    Email:'',
    PhoneNumber:'',
    Password:'',
    user_Role:'Admin',
   })

   const handleChange = (e) =>{
    const {name ,value} = e.target; 
    setFormData({
        ...formData,
        [name]:value
    })
   }
   const submit =async (e)  =>{
    e.preventDefault();
    setIsLoading(true)
    try{
       const response  = await LabandUserRegistration(formData)
       if(response){
         console.log(response)
       }
    }
    catch(error){
        console.log("Getting error while register the Lab")
       
    }
    finally{
        setIsLoading(false)
    }
   }

    return(
        <>
         {isLoading && <SpinnerModal isLoading={true} />}
         <div className='container' style={{padding:'2rem'}}>
            <Card sx={{padding:'1rem',height:'80%'}}>
                <h5>Registration Form</h5>
                <form onSubmit={submit}>
                <Box>
                <div className='row'>
                        <h6>Lab Information</h6>
                    <div className='col-md-4 mt-2'>
                    <TextField
                          inputProps={{ className: 'Registeration_Input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='Lab Name'
                          className=''
                          id='LaboratoryName'
                          name='LaboratoryName'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Contact number'
                          className=''
                          id='LaboratoryContactNumber'
                          name='LaboratoryContactNumber'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Email'
                          className=''
                          id='LaboratoryEmail'
                          name='LaboratoryEmail'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Address'
                          className=''
                          id='LaboratoryAddress'
                          name='LaboratoryAddress'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    </div>
                </Box>
                <Box>
                    <div className='row'>
                        <h6>User Information</h6>
                    <div className='col-md-4 mt-2'>
                    <TextField
                          inputProps={{ className: 'Registeration_Input' }}
                          InputLabelProps={{className:'AddPatient_Label' }}
                          label='First Name'
                          className=''
                          id='FirstName'
                          name='FirstName'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Last Name'
                          className=''
                          id='Lastname'
                          name='LastName'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Email'
                          className=''
                          id='Email'
                          name='Email'
                          size='small'
                          onChange={handleChange}
                       />
                    </div>
                    <div className='col-md-4 mt-2'>
                      <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Phone Number'
                          className=''
                          id='PhoneNumber'
                          name='PhoneNumber'
                          size='small'
                          onChange={handleChange}
                       />
                    
                    </div>
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                          label='Password'
                          className=''
                          id='Password'
                          name='Password'
                          size='small'
                          type='Password'
                          onChange={handleChange}
                       />
                    </div>
                   
                    <div className='col-md-4 mt-2'>
                    <TextField
                         inputProps={{ className: 'Registeration_Input' }}
                         InputLabelProps={{className:'AddPatient_Label' }}
                         InputProps={{className:'Disabled'}}
                          label='User Role'
                          className=''
                          id='user_Role'
                          name='user_Role'
                          size='small'
                          value={'Admin'}
                          aria-readonly

                       />
                    </div>
                    </div>
                </Box>

                   <div className='row pt-4'>
                    <div  className='col-md-3'>
                     <Button type='submit' style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8', }}  >save</Button>
                     </div>
                   </div>
                </form>  
            </Card>    
         </div>
        </>
    )
}

export default  AccountRegistration
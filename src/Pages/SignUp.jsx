import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddUsers } from "../Services/Authservices";
import '../UI/SignUp.css';
import {TextField, Button } from '@mui/material';
import SpinnerModal from "../Spinner/SpinnerModal";

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const[formData,setformData] = useState({
        FirstName:'',
        LastName:'',
        Email :'',
        PhoneNumber:'',
        Password:'',
    });
    const onchange = (e) =>{
        const {name,value} = e.target;
        setformData({
            ...formData,
            [name]:value,
        }) 
    }
   const onsubmit = async(e) =>{
    e.preventDefault();
    setIsLoading(true)
    try{
        const response = await   AddUsers(formData)
        if(response){
          alert("Data saved successfully")
        }
    }
    catch(error){
        console.log(error)
    }
    finally{
        setIsLoading(false)
    }
   } 
  return (
    // <div className="d-flex  justify-content-center">

  
    //   <div className="col-4 signupForm">
    //         <form onSubmit={onsubmit}>
    //             <div className="row">
    //               <div className="col-6">
    //                  <label htmlFor="FirstName" className="text-left">First Name</label>
    //                   <input
    //                     type="text"
    //                     className="SignUp_input"
    //                     id="FirstName"
    //                     name="FirstName"
    //                     required
    //                     onChange={onchange}
    //                 />
    //              </div>
    //              <div className="col-6">
    //                 <label htmlFor="LirstName" className="text-left">Last name</label>
    //                 <input
    //                     type="text"
    //                     className="SignUp_input"
    //                     id="LirstName"
    //                     name="LastName"
    //                     required
    //                     onChange={onchange}
    //                 />
    //              </div>
    //             </div>
    //              <div className="mb-3 ">
    //                 <label htmlFor="email" className="text-left">Email</label>
    //                 <input
    //                     type="email"
    //                     className="SignUp_input"
    //                     id="email"
    //                     name="Email"
    //                     required
    //                     onChange={onchange}

    //                 />
    //              </div>
    //              <div className="mb-3 ">
    //                 <label htmlFor="Phone" className="text-left">Phone Number</label>
    //                 <input
    //                     type="text"
    //                     className="SignUp_input"
    //                     id="Phone"
    //                     name="PhoneNumber"
    //                     required
    //                     onChange={onchange}

    //                 />
    //              </div>
    //              <div className="mb-3 ">
    //                 <label htmlFor="password" className="text-left">Password</label>
    //                 <input
    //                     type="password"
    //                     className="SignUp_input"
    //                     id="password"
    //                     name="Password"
    //                     required
    //                     onChange={onchange}

    //                 />
    //              </div>
    //              <button type="submit" className="Submit_Button">SignUp</button>
    //         </form>
    // </div>
    // </div> 
    <>
    {isLoading && <SpinnerModal isLoading={true} />}
   <div className='container-fluid pt-1'>
       <form onSubmit={onsubmit}>
           <div className='row pt-1'>
                <div  className='col-md-6'>
                   <TextField
                       inputProps={{ className: 'TestEntry_input' }}
                       InputLabelProps={{className:'TestEntry_Label' }}
                       label='First Name'
                       className=''
                       id='FirstName'
                       name='FirstName'
                       size='small'
                       required
                       onChange={onchange}
                   ></TextField>
                </div>
                <div  className='col-md-6'>
                   <TextField
                       inputProps={{ className: 'TestEntry_input' }}
                       InputLabelProps={{className:'TestEntry_Label' }}
                       label='Las tName'
                       className=''
                       id='LastName'
                       name='LastName'
                       size='small'
                       required
                       onChange={onchange}
                   ></TextField>
                </div>
            </div>
            <div className='row pt-3'>
                <div  className='col-md-6'>
                   <TextField
                       inputProps={{ className: 'TestEntry_input' }}
                       InputLabelProps={{className:'TestEntry_Label' }}
                       label='Email'
                       className=''
                       id='Email'
                       name='Email'
                       size='small'
                       required
                       onChange={onchange}
                   ></TextField>
                </div>
                <div  className='col-md-6'>
                   <TextField
                       inputProps={{ className: 'TestEntry_input' }}
                       InputLabelProps={{className:'TestEntry_Label' }}
                       label='PhoneNumber'
                       className=''
                       id='PhoneNumber'
                       name='PhoneNumber'
                       size='small'
                       required
                       onChange={onchange}
                   ></TextField>
                </div>
            </div>
            <div className='row pt-3'>
                <div  className='col-md-6'>
                   <TextField
                       inputProps={{ className: 'TestEntry_input' }}
                       InputLabelProps={{className:'TestEntry_Label' }}
                       label='Password'
                       className=''
                       id='Password'
                       name='Password'
                       size='small'
                       required
                       onChange={onchange}
                   ></TextField>
                </div>
               
            </div>

               <div className='row pt-4'>
                 <div  className='col-md-3'>
                     <Button style={{ backgroundColor: 'rgb(47, 187, 247)',  color: '#FFFFFF'}}
                        type='submit' variant='contained'>
                         Save
                     </Button>
                 </div>
               </div>
       </form>
   </div>
   </>
  );
};

export default  SignUp

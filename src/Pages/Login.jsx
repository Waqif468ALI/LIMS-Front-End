import React, { useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Login.css';
import { Link, useNavigate } from "react-router-dom";
import { GetLogin } from "../Services/Authservices";
import SpinnerModal from "../Spinner/SpinnerModal"; 
import {  TextField, Button, MenuItem   } from '@mui/material';
import image from'../assets/loginpics.png'
import { jwtDecode } from "jwt-decode";
const Login = () => {
        const [formData,setformData] =useState({Email:"",Password:""})
        const [isLoading, setIsLoading] = useState(false); 
               const navigate = useNavigate();

        const onchange = (e) =>{
            const {name,value} = e.target;
             setformData({
              ...formData,
              [name]:value,
             })
        }


   const  FormSubmut = async (e) =>{
    e.preventDefault();
    setIsLoading(true)
    try {
      const { token } = await GetLogin(formData);
      sessionStorage.setItem("token", token);

      if (token) {
        const decodedToken = jwtDecode(token);
        const LabID = decodedToken?.nameid; 
        console.log("decodedToken",decodedToken)
        sessionStorage.setItem("LabID", LabID);
        navigate('/Home');
      } else {
        alert("Email and password are not correct");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false); // Hide spinner after the login attempt
    }
   }
             
  return (
    <>
    
   
  {isLoading &&  <SpinnerModal isLoading={true} /> } 
        
        <div className="d-flex  justify-content-center">

         
        <div className=" col-4 loginForm">
          <div className="PicsDiv">
            <img className="LoginPics" src={image}></img>
          </div>
         <form onSubmit={FormSubmut}>
           <div className="mb-3 ">
                
                 <TextField
                        inputProps={{ className: 'AddPatient_input' }}
                        InputLabelProps={{className:'AddPatient_Label' }}
                        label='Email'
                        className=''
                        id='email'
                        name='Email'
                        size='small'
                        required
                        onChange={onchange}
                    ></TextField>
             </div>
             <div className="mb-3 ">
                
                 <TextField
                        inputProps={{ className: 'AddPatient_input' }}
                        InputLabelProps={{className:'AddPatient_Label' }}
                        label='Password'
                        className=''
                        type="password"
                        id='password'
                        name='Password'
                        size='small'
                        required
                        onChange={onchange}
                    ></TextField>
             </div>
             <button type="submit" className="Submit_Button">Login</button>
            
        </form>
</div>
        </div>
   
        </>
  );
};

export default Login;

import React from 'react'

import  {useEffect, useState} from 'react'
import '../UI/TestEntrymodal.css'
import { AddTest,RetriveTest } from '../Services/TestServices';
import {TextField, Button } from '@mui/material';
import SpinnerModal from '../Spinner/SpinnerModal';
import { useApi } from '../ContextApi/ContextApi';

const TestEntrymodal = () =>{
    const { setSubmissionStatus } = useApi();
    const [isLoading, setIsLoading] = useState(false);  
    const[formData,setformData] = useState({
        test_name:'',
        TestCategoryName:'',
        TestPrice :'',
        Unit:'',
        Reference_value:'',
        Comments:'',

    });
    const onchange = (e) =>{
        const {name,value} = e.target;
        setformData({
            ...formData,
            [name]:value,
        }) 
    }
    const SubmitForm = async(e) =>{
        e.preventDefault();
        setIsLoading(true)
        try{
            const response = await  AddTest(formData);
            if(response){
                setSubmissionStatus(true)
            }
           console.log(response)
        }
        catch(eror){
            console.log(eror)

        }
        finally{
            setIsLoading(false)
        }
     
    }
    //  const RetriveTestData = async ()=>{
    //     const Response = await RetriveTest();
    //     setTestData(Response)
    //     console.log("getting Data",Response)
    //  }
    // useEffect(() => {
    //     RetriveTestData();
    // },[])

    return (
        <>
     {isLoading && <SpinnerModal isLoading={isLoading} />}
        <div className='container-fluid pt-1'>
            <form onSubmit={SubmitForm}>
                <div className='row pt-1'>
                    <div  className='col-md-3 mt-2'>
                        <TextField
                            inputProps={{ className: 'TestEntry_input' }}
                            InputLabelProps={{className:'TestEntry_Label' }}
                            label='Test Name'
                            className=''
                            id='test_name'
                            name='test_name'
                            size='small'
                            required
                            onChange={onchange}
                        ></TextField>
                    </div>
                    <div className='col-md-3 mt-2'>
                        <TextField
                            label='TestCategoryName'
                            inputProps={{ className: 'TestEntry_input' }}
                            InputLabelProps={{className:'TestEntry_Label' }}
                            id='TestCategoryName'
                            size='small'
                            name='TestCategoryName'
                            required
                            onChange={onchange} />
                    </div>
                    
                    <div  className='col-md-3 mt-2'>
                        <TextField
                            label='TestPrice'
                            inputProps={{ className: 'TestEntry_input' }}
                            InputLabelProps={{className:'TestEntry_Label' }}
                            id='TestPrice'
                            name='TestPrice'
                            size='small'
                            required
                            onChange={onchange} />
                    </div>
                    <div  className='col-md-3 mt-2'>
                        <TextField
                            label='Reference Value'
                            inputProps={{ className: 'TestEntry_input' }}
                            InputLabelProps={{className:'TestEntry_Label' }}
                            id='Reference_value'
                            name='Reference_value'
                            size='small'
                            required
                            onChange={onchange} />
                    </div>
                      <div  className='col-md-3 mt-2'>
                          <TextField
                              label='Unit'
                              inputProps={{ className: 'TestEntry_input' }}
                              InputLabelProps={{className:'TestEntry_Label' }}
                              InputProps={{
                                classes: {
                                  focused: 'BorderColor' 
                                }
                              }}
                              id='Unit'
                              name='Unit'
                              size='small'
                               required
                               onChange={onchange} />
                        </div>
                        <div  className='col-md-3 mt-2'>
                          <TextField
                              label='Comments'
                              inputProps={{ className: 'TestEntry_input' }}
                              InputLabelProps={{className:'TestEntry_Label' }}
                              InputProps={{
                                classes: {
                                  focused: 'BorderColor' 
                                }
                              }}
                              id='Comments'
                              name='Comments'
                              size='small'
                               required
                               onChange={onchange} />
                        </div>
                    
                        <div  className='col-md-3 mt-2'>
                           <Button type='save' style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8', }}  >save</Button>
                         </div>
                    </div>
            </form>
        </div>
        </>
    
    )
}

export default TestEntrymodal
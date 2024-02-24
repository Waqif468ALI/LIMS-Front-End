import React, { useEffect, useState } from 'react';
import '../UI/TestEntrymodal.css';
import { GetDataBySearch } from '../Services/TestServices';
import { TextField,Button } from '@mui/material';
import SpinnerModal from '../Spinner/SpinnerModal';
import '../UI/TestPrescription_modal.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AddPrescription } from '../Services/TestServices';
import { useApi } from '../ContextApi/ContextApi';

const AddTestPrescription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ SearchTest: '', });
  const [searchData, setSearchData] = useState([]);
  const [selectedTests, setSelectedTests] = useState([]);
  const {isSubmitted, setSubmissionStatus } = useApi();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (formData.SearchTest) {
      getSearchTests();
    }
  };

  const onChange2 = (e,testID) => {
    const { value } = e.target;
    const index = selectedTests.findIndex((test) => test.testID === testID)
    if(index !== -1){
        const updatedTest ={ ...selectedTests[index], testResult:value}
        const updatedTestsList = [...selectedTests];
        updatedTestsList[index] = updatedTest;
        setSelectedTests(updatedTestsList);
    }
  };


  const getSearchTests = async () => {
    setIsLoading(true);
    try {
        const LabID = sessionStorage.getItem('LabID')
      const response = await GetDataBySearch(formData.SearchTest,LabID);
      setSearchData(response);
    } catch (error) {
      console.log("Error while searching test", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToSelectedTests = (testItem) => {
    setSelectedTests([...selectedTests, testItem]);
  };
const Remove = (id) =>{
  const updatedList = selectedTests.filter((x) => x.testID !== id)
   setSelectedTests(updatedList)
}
console.log("==========",selectedTests)

const Submit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formattedTests = selectedTests.map((testItem) => ({
        PatientID: 1,
        TestID: testItem.testID,
        LaboratoryID:sessionStorage.getItem('LabID'),
        testResult: testItem.testResult, // Assuming testResult exists in the testItem
        Created_at:new Date()
      }));
  
      const response = await AddPrescription(formattedTests);
      console.log(response);
      if(response){
        setSubmissionStatus(true)
        console("isSubmitted",isSubmitted)
      }
    } catch (error) {
      console.log("getting error while submitting prescription", error);
    } finally {
      setIsLoading(false);
    }
  };
  
   
  return (
    <>
      {isLoading && <SpinnerModal isLoading={true} />}
      <div className='container-fluid pt-1'>
        <form>
          <div className='row pt-1'>
            <div className='col-md-12'>
              <TextField
                inputProps={{ className: 'TestSearch_Input' }}
                InputLabelProps={{ className: 'TestEntry_Label' }}
                label='Search Test'
                className=''
                id='SearchTest'
                name='SearchTest'
                size='small'
                required
                onChange={onChange}
              ></TextField>

              {searchData && searchData.length > 0 && (
                <ul className='col-md-12 search_List'>
                  {searchData.map((testItem) => (
                    <li key={testItem.id} onClick={() => addToSelectedTests(testItem)}>
                      {testItem.testName}
                    </li>
                  ))}
                </ul>
              )}
              {selectedTests && selectedTests.length > 0 &&  ( <div className='col-md-12 Test_table'>
              <table className='w-100 Table'>
                <thead>
                  <tr>
                    <td className='THead'>SR No</td>
                    <td className='THead'>Test Name</td>
                    <td className='THead'>Price</td>
                    <td className='THead'>Remove</td>
                  </tr>
                </thead>
                <tbody >
                  {selectedTests.map((testItem,index) => (
                  <tr key={testItem.testID}>
                   <td>{index+1}</td>
                   <td>{testItem.testName}</td>
                   <td><input className='ResultInput' name='testResult' onChange={(e) =>onChange2(e,testItem.testID)} /></td>
                   <td onClick={()=> Remove(testItem.testID)}>
                    <CloseRoundedIcon  className='Cross'/>
                   </td>
                </tr>
                ))
               }
                </tbody>
              </table>
            </div>
               )}
            </div>
        
          </div>
          <div className='row pt-4'>
                      <div  className='col-md-3'>
                      <Button type='save'onClick={Submit} style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8', }}  >save</Button>
                      </div>
                    </div>
        </form>
      </div>
    </>
  );
};

export default AddTestPrescription;

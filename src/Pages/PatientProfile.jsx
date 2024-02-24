import React, { useEffect, useState,useRef } from 'react'
import { useParams } from 'react-router-dom';
import { GetSinglepatient } from '../Services/PatientServicces';
import { GetPrescription } from '../Services/TestServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/PatientProfile.css'
import Female from '../assets/female-Pofile.jpg'
import Male from '../assets/Male.jpg'
import {   Divider,  Card, List, ListItem, ListItemText, } from '@mui/material';
import PrintSharpIcon from '@mui/icons-material/PrintSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
// import TestPrescription_modal from './AddTestPrescription';
import DynamicModal from '../modals/DynamicModal';
import SpinnerModal from '../Spinner/SpinnerModal';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {
  Table,
  TableBody,
  TableCell,
  Tab,
  Tabs ,
  Box,
  Paper,
  Typography
} from '@mui/material';
import PrintReports from './PrintReports';
import { useReactToPrint } from 'react-to-print';
import { useApi } from '../ContextApi/ContextApi';
import AddTestPrescription from './AddTestPrescription';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}








const PatientProfile = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [ProfileData,setprofileData] = useState({});
    const [PrescriptionData,setPrescriptionData] = useState([]);
    const { isSubmitted ,setSubmissionStatus} = useApi();
   
    const componentRef = useRef();
    
const {id} = useParams();
sessionStorage.setItem('PatientID',id)
        useEffect(() => {
          const GetprofileData = async () =>{
             setIsLoading(true)
             try{
              const LabID = sessionStorage.getItem('LabID')
              const data = await GetSinglepatient(id,LabID)
              setprofileData(data)
              setSubmissionStatus(false)
              }
              catch(error){
               console.log(error)
              }
              finally{
               setIsLoading(false)
              }
             }
            GetprofileData();
             GetPresciptionData();
         }, [id,isSubmitted])



    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const GetPresciptionData =async () =>{
        const LabID = sessionStorage.getItem('LabID')
        const response  = await GetPrescription(id,LabID)
        console.log(response)
        setPrescriptionData(response)
        console.log("prep",PrescriptionData)
    }
    //modal open and close 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   
    return (
      <>
      
        {isLoading && <SpinnerModal  isLoading={isLoading} />}
        <div  style={{ display: 'none' }}>
            <PrintReports ref={componentRef} />
        </div>
        
        <div className='container-fluid Container2'>
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
            <div className='row Main'>
              <div className='col-md-3 profileHeader'>
                       <div className='d-flex header justify-content-start'>
                         <div>
                           {ProfileData?.[0]?.sex ==="male"?   (<img className='img' src={Male}></img> ):(<img className='img' src={Female}></img>) } 
                         </div>
                        <div>
                          <h5>{ProfileData?.[0]?.patientName}</h5>
                          <span style={{fontSize:'small'}}>{ProfileData?.[0]?.age} year|{ProfileData?.[0]?.sex} </span>
                        </div>
                       </div>
                    <div>
                    <hr />
                    <Box sx={{background:'#D3D3D3',padding:'5px',borderRadius:'5px',border:'1px solid gray',alignContent:'center'}}>
                      <div className='d-flex justify-content-between'>
                           <span>MR No:</span><br></br> 
                           <span className='Details_value'>0000-0-0</span>
                       </div><div className='d-flex justify-content-between'>
                           <span>LabID:</span><br></br> 
                           <span className='Details_value'>{ProfileData?.[0]?.patientID}</span>
                       </div>
                       <div className='d-flex justify-content-between'>
                           <span>Referred by:</span><br></br> 
                           <span className='Details_value'>{ProfileData?.[0]?.referredBy}</span>
                       </div>
                       <div className='d-flex justify-content-between'>
                             <span>Mobile:</span><br></br> 
                             <span className='Details_value'>{ProfileData?.[0]?.contactNumber}</span>
                       </div>
                       <div className='d-flex justify-content-between'>
                             <span>Registration Date:</span><br></br> 
                             <span className='Details_value'>02/01/2024</span>
                       </div>
                    </Box>
                      <Box sx={{background:'#FFFFED',padding:'5px',borderRadius:'5px',border:'1px solid #ffe000',marginTop:'4px',color:'#ffe000',minHeight:'120px'}}>
                         <div>
                           <span>Address:</span><br></br> 
                           <span className='Details_value'>{ProfileData?.[0]?.address}</span>
                          </div>
                      </Box>
                   </div>
              </div>
  <div className='col-md-9 ProfileBody'>
   <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lab" {...a11yProps(0)} />
          <Tab label="Medication" {...a11yProps(1)}  disabled/>
          <Tab label="History" {...a11yProps(2)} disabled/>
        </Tabs>
      </Box>
      <CustomTabPanel style={{background:'aliceblue',minHeight:'80vh',}} value={value} index={0}>
         <Box className='d-flex justify-content-end' sx={{background:'#fff',padding:'.5rem',alignItems:'center'}}>
           <Box sx={{gap:5}}>
             <AddBoxSharpIcon sx={{color:'#2fb8f8'}} className='PlusIcon' onClick={openModal} />
             <PrintSharpIcon sx={{color:'#2fb8f8'}} className='PlusIcon' onClick={handlePrint} />
           </Box>
         </Box>
         <Box sx={{ maxHeight: '60vh', overflowY: 'auto' }}>
           <List >
           {PrescriptionData.map((testItem) => (
             <ListItem  key={testItem.id}>
               <ListItemText sx={{}}>
               <LabelImportantIcon sx={{color:'#2fb8f8',gap:'5px'}}/>
                 {testItem.testName}
                  {/* {testItem.testResult} */}
              </ListItemText>
            </ListItem>
                ))}
          </List>
         </Box>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
 </div>
            </div>
            <DynamicModal
                   show={modalIsOpen}
                    onHide={closeModal}
                    title='Patient Prescription'
                 >
                 <AddTestPrescription  />
            </DynamicModal>
           </Paper>
        </div>
      </>
    );
}
export  default  PatientProfile
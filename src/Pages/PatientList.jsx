import React from 'react'
import  {useEffect, useState} from 'react'
import { RetrivePatientsData } from '../Services/PatientServicces';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Button,
    Card,
    TablePagination,
    Divider,
    InputAdornment,
    Container,
  } from '@mui/material';
  import { VisibilityRounded } from '@mui/icons-material';
  import '../UI/PatientList.css'
import { useNavigate } from 'react-router-dom';
import SpinnerModal from '../Spinner/SpinnerModal';
import { useApi } from '../ContextApi/ContextApi';


const PatientList = () =>{
    const { isSubmitted ,setSubmissionStatus} = useApi();
    const [PatientData,setPatientData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    const GettignData = async ()=>{
         setIsLoading(true)
     try{
         const LabID = sessionStorage.getItem('LabID')
         const Response = await RetrivePatientsData(LabID);
         setPatientData(Response)
         setSubmissionStatus(false)
        }
        catch(eror){
            console.log(eror)
        }finally{
            setIsLoading(false)
        }
     }


    useEffect(() => {
        GettignData();
    },[isSubmitted])
     

//-------------------Pagination

const [currentPage, setCurrentPage] = useState(0); // Start from page 1
const itemsPerPage = 10;
const indexOfLastItem = (currentPage + 1) * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const limitedData = PatientData.slice(indexOfFirstItem, indexOfLastItem);
const handlePageChange = (event, newPage) => {
setCurrentPage(newPage);
};

const Navigate = (id) =>{
    navigate(`/Home/PatientProfile/${id}`)
}

    return (
        <>
{isLoading && <SpinnerModal isLoading={true} />}
    <div className='container-fluid Container2'>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Divider></Divider>
            <TableContainer className='PatientListTable' sx={{ maxHeight: 400,minHeight:'75vh' }}>
                <Table  stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            <TableCell className='PTC1'>Patient Name</TableCell>
                            <TableCell className='PTC1'> Referred by</TableCell>
                            <TableCell className='PTC1'> Gender</TableCell>
                            <TableCell className='PTC1'> Phone</TableCell>
                            <TableCell className='PTC1'> Age</TableCell>
                            <TableCell className='PTC1'>Comments</TableCell>
                            <TableCell className='PTC1'>DOB</TableCell>
                            <TableCell className='PTC1'>Address</TableCell>
                            <TableCell className='PTC1'>View</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>  
                           {limitedData.map((data, index) => (
                            <TableRow  key={index}>
                             <TableCell className='PTC'>{data.patientName}</TableCell>
                             <TableCell className='PTC'>{data.referredBy}</TableCell>
                             <TableCell className='PTC'>{data.sex}</TableCell>
                             <TableCell className='PTC'>{data.contactNumber}</TableCell>
                             <TableCell className='PTC'>{data.age}</TableCell>
                             <TableCell className='PTC'>{data.comments}</TableCell>
                             <TableCell className='PTC'>{data.DOB}</TableCell>
                             <TableCell className='PTC'>{data.address}</TableCell> 
                             <TableCell className='PTC'>
                                <VisibilityRounded onClick={() => Navigate(data.patientID) } className='View_Icon'/>
                              
                             </TableCell> 
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                   component="div"
                    count={PatientData.length}
                     page={currentPage}
                     onPageChange={handlePageChange}
                      rowsPerPage={itemsPerPage}
                   rowsPerPageOptions={[itemsPerPage]}
                   />
            </TableContainer>
            </Paper>
        </div></>
        
    )
}
export default PatientList;
import  {useEffect, useState} from 'react'
import '../UI/TestEntry.css'
import { RetriveTest } from '../Services/TestServices';
import TestEntrymodal from '../Pages/TestEntrymodal';
import DynamicModal from '../modals/DynamicModal'
import MoreIcon from '@mui/icons-material/MoreVert';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';


import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button,
    Card,
    TablePagination,
    Divider,
    TextField,
    Box
  } from '@mui/material';
  import { PostAddRounded ,SearchOutlined} from '@mui/icons-material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import IconButton from '@mui/material/IconButton';
  import SpinnerModal from '../Spinner/SpinnerModal';
  import { useApi } from '../ContextApi/ContextApi';
  
const TestEntry = () =>{
    const { isSubmitted,setSubmissionStatus } = useApi();
    const [isLoading, setIsLoading] = useState(false);
    const [TesData,setTestData] = useState([])
     const RetriveTestData = async ()=>{
        setIsLoading(true);
        try{
            const LabID = sessionStorage.getItem('LabID')
            const Response = await RetriveTest(LabID);
            setTestData(Response)
            setSubmissionStatus(false)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsLoading(false)
        }
       
     }
    useEffect(() => {
        RetriveTestData();
    },[isSubmitted])
    

//-------------------Pagination

const [currentPage, setCurrentPage] = useState(0); // Start from page 1
const itemsPerPage = 8;

const indexOfLastItem = (currentPage + 1) * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const limitedData = TesData.slice(indexOfFirstItem, indexOfLastItem);
const handlePageChange = (event, newPage) => {
setCurrentPage(newPage);
};
    return (
        <>
        {isLoading && <SpinnerModal  isLoading={isLoading}/>}
        <div className='container-fluid Container2'>
         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Box>
                <TestEntrymodal />
            </Box>
            <Divider className='mt-3'></Divider>
                <TableContainer   sx={{ maxHeight: 400 ,minHeight:'60vh'}}>
                    <Table  stickyHeader aria-label="sticky table" >
                        <TableHead>
                            <TableRow>
                            </TableRow>
                            <TableRow>
                                <TableCell className='TC1'>Sr.no</TableCell>
                                <TableCell className='TC1'> Name</TableCell>
                                <TableCell className='TC1'> Catagory</TableCell>
                                <TableCell className='TC1'> Reference Value</TableCell>
                                <TableCell className='TC1'> Price</TableCell>
                                <TableCell className='TC1'> Unit</TableCell>
                                <TableCell className='TC1'>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {limitedData.map((data, index) => (
                                <TableRow  key={index}>
                                    <TableCell className='TC'>{index +1}</TableCell>
                                    <TableCell className='TC'>{data.testName}</TableCell>
                                    <TableCell className='TC'>{data.testCategoryName}</TableCell>
                                    <TableCell className='TC'>{data.normalRange}</TableCell>
                                    <TableCell className='TC'>{data.testPrice}-/pkr</TableCell>
                                    <TableCell className='TC'>{data.unit}</TableCell>
                                    <TableCell className='TC'>
                                             <MoreIcon /> 
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                       component="div"
                        count={TesData.length}
                         page={currentPage}
                         onPageChange={handlePageChange}
                          rowsPerPage={itemsPerPage}
                       rowsPerPageOptions={[itemsPerPage]}
                       />
                </TableContainer>
                </Paper>
                <div>
    </div>
            </div></>
    
    )
}

export default TestEntry
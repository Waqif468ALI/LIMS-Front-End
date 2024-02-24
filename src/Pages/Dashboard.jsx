import react, { useState } from 'react'
import { useEffect   } from 'react';
import {Box, Card,CardMedia,Divider} from '@mui/material'
// import { LineChart } from '@mui/x-charts/LineChart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ScienceSharpIcon from '@mui/icons-material/ScienceSharp';
import { GetDashboard } from '../Services/Dashboard';

const Dashboard = () =>{
    const [DashboardData,SetDashboardData]= useState([])
            
 useEffect(()=>{
    GetDashboardData()

},[])
 const GetDashboardData = async() =>{
    const LabID = sessionStorage.getItem('LabID')
    const response  = await GetDashboard(LabID);
    SetDashboardData(response)
    
 }

    return(
        <>
         <div className='container-fluid Container2'>
            <div className='d-flex' style={{    gap:' 2rem' }}>
            <Card sx={{
                 width: 500,
                 height: 100 ,
                 textAlign:"Center",
                 }}>
                    {/* <CardMedia
                     component="img"
                     height="80"
                      image={patientImage}
                      alt="Paella dish"
                      sx={{
                        alignItems:'center'
                      }}
                    /> */}
                    <AccountBoxIcon sx={{width:'3rem',height:'3rem'}} style={{color:'#2fb8f8'}} className='cardICON' />
                   <Divider></Divider>
                   <Box>
                     <h4>Total Patient : {DashboardData.totalPatients}</h4> 
                   </Box>
              
            </Card>
            <Card sx={{
                 width: 500,
                 height: 100,
                 textAlign:'Center'
                 }}>
                {/* <CardMedia
                     component="img"
                     height="80"
                    image={HealthImage}
                    alt="Paella dish"
                    /> */}
                    <ScienceSharpIcon sx={{width:'3rem',height:'3rem'}} style={{color:'#2fb8f8'}} className='cardICON' />
                   <Divider></Divider>
                   <Box>
                     <h4>Total Active Test : {DashboardData.totalTests}</h4> 
                   </Box>
            </Card>
            {/* <Card sx={{
                 width: 300,
                 height: 200 ,
                 boxShadow:'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px' 
                 }}>
                <h1>Total tests </h1>
            </Card> */}
            </div>
            <div className='d-flex mt-4' style={{textAlign:'center',gap:' 2rem' }}>
            <Card sx={{ width: 500, height: 350 ,borderRadius:'2px'}}>
                                  {/* <LineChart
                                  xAxis={[{ data: [1,2,3,4,5,6,7,8,9,10,11,12] }]}
                                  yAxis={[{ data: [20, 40, 60, 80, 100, 120, 140, 160, 180, 200] }]}
                                  series={[
                                  { data: [50, 70, 90, 120, 150, 130, 10, 190, 180, 160,120,200],
                                    showMark: ({ index }) => index % 1 === 0,
                                    },
                                  ]}
                                  width={500}
                                  height={300}
                                  title='Monthly Record'
                                  /> */}
               <Box sx={{ flexGrow: 1 }}>
                  <SparkLineChart data={[4, 6,1,8,1,9,0,]}  width={500} height={300} />
               </Box>
             <span style={{textAlign:'center'}}>Year 2023</span>
            </Card>
            <Card sx={{ width: 500, height: 350  }}>
            <PieChart
              series={[
            {
                data: [
                 { id: 0, value: 130, label: '2021' },
                 { id: 1, value: 440, label: '2022' },
                 { id: 2, value: 1030, label: '2023' },
                

               ],
             },
             ]}
              width={500}
              height={300}
             />
             <span style={{textAlign:'center'}}>last 3 Year Record</span>
            </Card>
            </div>
           
     </div>
     </>
    )
}
export default Dashboard
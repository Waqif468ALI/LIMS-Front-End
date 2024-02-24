import React, { useEffect, useState, forwardRef } from 'react';
import { Reports } from '../Services/TestServices';
import SpinnerModal from '../Spinner/SpinnerModal';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, 
  Grid,
} from '@mui/material';

import '../UI/PrintReport.css';

const Template2 = ({reportData}) => {

  return (
    <>
      <div className='container-fluid ' >
        <div style={{padding:'1rem',marginTop:'3rem'}}>
          <Grid container spacing={6}>
              <div className='d-flex justify-content-center ' style={{fontFamily: "-apple-system ,BlinkMacSystemFont ,Segoe UI ,Roboto ,Oxygen ,Ubuntu ,Fira Sans ,Droid Sans ,Helvetica Neue ,sans-serif" }}>
                 <img className="logo" src={"data:image/png;base64," +  reportData?.[0]?.data} alt="Lab Logo" style={{ width: '50%',height:'100px',marginLeft:'5px' }} /> 
                <div className='w-50'>
                <h4>{reportData?.[0]?.laboratoryName}</h4>
                <span style={{fontSize:'15px'}}>
                   {reportData?.[0]?.laboratoryEmail}
                   {reportData?.[0]?.laboratoryContactNumber}
                   {reportData?.[0]?.laboratoryAddress}
                </span>
               </div>
              </div>
            
          </Grid>
          <hr></hr>
          <Grid item xs={8}>
              <div>
                {/* Patient details */}
                <table style={{fontSize:'15px',  fontFamily: "-apple-system ,BlinkMacSystemFont ,Segoe UI ,Roboto ,Oxygen ,Ubuntu ,Fira Sans ,Droid Sans ,Helvetica Neue ,sans-serif" }}>
                  <thead>
                    <tr>
                      <th>LabID:</th>
                      <td>000000</td>
                      <th>Patient:</th>
                      <td>{reportData?.[0]?.patientName}</td>
                      <th>Age|Gender:</th>
                      <td>
                        {reportData?.[0]?.age}|{reportData?.[0]?.sex}
                      </td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{reportData?.[0]?.contactNumber}</td>
                      <th>Referred by:</th>
                      <td>{reportData?.[0]?.referredBy}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </Grid>
          {/* <Divider className='Print_Lines'></Divider> */}
          <hr></hr>
          {/* Table Section */}
          <TableContainer>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell className='PRTable'>Name</TableCell>
                  <TableCell className='PRTable'>Unit</TableCell>
                  <TableCell className='PRTable'>Normal Range</TableCell>
                  <TableCell className='PRTable'>Result</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className='PRTable1'>{data.testName}</TableCell>
                    <TableCell className='PRTable1'>{data.unit}</TableCell>
                    <TableCell className='PRTable1'>{data.normalRange}</TableCell>
                    <TableCell className='PRTable1'>{data.testResult}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Template2;

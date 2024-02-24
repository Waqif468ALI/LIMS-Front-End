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

const Template3 = ({reportData}) => {
  console.log("reportData",reportData)

  return (
    <>
      <div className='container-fluid ' >
        <div style={{padding:'1rem' , fontFamily: "-apple-system ,BlinkMacSystemFont ,Segoe UI ,Roboto ,Oxygen ,Ubuntu ,Fira Sans ,Droid Sans ,Helvetica Neue ,sans-serif" ,fontSize:'10px'}}>
          <Grid container spacing={8}>
            <Grid item xs={6}>
              <div>
                <h4 style={{fontStyle:'bold'}}>{reportData?.[0]?.laboratoryName}</h4>
                <span style={{fontSize:'15px'}}>
                   {reportData?.[0]?.laboratoryEmail}
                   {reportData?.[0]?.laboratoryContactNumber}
                   {reportData?.[0]?.laboratoryAddress}
                </span>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ float: 'right', textAlign: '' }}>
                {/* Patient details */}
                <table style={{fontSize:'20px'}}>
                  <thead>
                    <tr>
                      <th>Patient:</th>
                      <td>{reportData?.[0]?.patientName}</td>
                    </tr>
                    <tr>
                      <th>Age|Gender:</th>
                      <td>
                        {reportData?.[0]?.age}|{reportData?.[0]?.sex}
                      </td>
                    </tr>
                    <tr>
                      <th>Phone:</th>
                      <td>{reportData?.[0]?.contactNumber}</td>
                    </tr>
                    <tr>
                      <th>Referred by:</th>
                      <td>{reportData?.[0]?.referredBy}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </Grid>
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

export default Template3;

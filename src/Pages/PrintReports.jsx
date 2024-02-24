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
import { useApi } from '../ContextApi/ContextApi';
import Template1 from '../Templates/Template1';
import Template2 from '../Templates/Template2';
import Template3 from '../Templates/Template3';

const PrintReports = forwardRef((props, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reportData, setReportData] = useState([]);
  const {isSubmitted} = useApi();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const patientID = sessionStorage.getItem('PatientID');
        const LabID = sessionStorage.getItem('LabID')
        const data = await Reports(patientID, LabID);
        setReportData(data);
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [isSubmitted]);

  return (
    <>
      {isLoading && <SpinnerModal isLoading={isLoading} />}
      {reportData?.[0]?.selectedTemplate === '1' ? (
      <div ref={ref}>
       <Template1 reportData={reportData} />
     </div>
     ) : reportData?.[0]?.selectedTemplate === '2' ? (
    <div ref={ref}>
      <Template2 reportData={reportData} />
    </div>
    ) : (
      <div ref={ref}>
      <Template3 reportData={reportData} />
     </div>
   )}
    </>
  );
});

export default PrintReports;

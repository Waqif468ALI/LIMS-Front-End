import React from '@babel/core'
import ControlPointOutlined from '@mui/icons-material/ControlPointOutlined'
import AddtemplateData from './AddTemplateData';
import { Box, Button, Card } from '@mui/material';
import DynamicModal from '../modals/DynamicModal'
import { useState } from 'react';
import TEMP2 from '../assets/TEMP2.png'
import T1 from '../assets/TEMP1.png'


const SelectTemplate = () =>{
 //modal open
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const openModal = () => {
   setModalIsOpen(true);
 };
 const closeModal = () => {
   setModalIsOpen(false);
 };

    return (
        <>
         <div className='container-fluid Container2'>
         <Card sx={{boxShadow:'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'}} className='TestHeader d-flex justify-content-end'>     
           <Button style={{padding:'5px',}} sx={{ border:'1px solid #2fb8f8',color:'#2fb8f8', }} onClick={openModal} >Select Template</Button>
         </Card>
         <div style={{gap:10,marginTop:10}} className='d-flex justify-content-center'>
           <Card  sx={{ backgroundColor:'#fff',width:'40%',height:'80%'}} >
             <img style={{width:'100%',height:'80%'}} src={T1} />
          </Card>
           <Card sx={{ backgroundColor:'#fff',width:'40%'}} >
              <img style={{width:'100%',height:'80%'}} src={TEMP2} />
           </Card>
           <Card sx={{ backgroundColor:'#fff',width:'40%'}} >
            <h1>template 1</h1>
           </Card>
         </div>
             <DynamicModal
                 show={modalIsOpen}
                  onHide={closeModal}
                  title='Add template '
               >
               <AddtemplateData />
             </DynamicModal>
         </div>
         
        </>
    )
}
export default SelectTemplate

// components/ImageUpload.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AddLogoImage,GetLogoImage } from '../Services/Template';
import SpinnerModal from '../Spinner/SpinnerModal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {  Button   } from '@mui/material';


const ImageUpload = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [image,seImage] = useState(null);
  const [TEMPValue, setTEMPValue] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };


    const handleChange = (event) => {
      setTEMPValue(event.target.value);
    };

    const handleUpload = async (e) => {
      e.preventDefault();
      setIsLoading(true)
        try {
          debugger
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('LabID', sessionStorage.getItem('LabID'));
            formData.append('TEMP',TEMPValue)
            const response = await AddLogoImage(formData);
            console.log(response.data);
            if(response){
              console.log(response)
            }
           } catch (error) {
            console.error('Error uploading image:', error);
            
           }
           finally{
           setIsLoading(false)
           }
       };


    const getimage = async() =>{
      debugger
      const LabID = sessionStorage.getItem('LabID')
      const result  = await GetLogoImage(LabID)
      console.log("result,",result)
      seImage(result)
      setTEMPValue(result?.[0]?.selectedTemplate) 
    }

    useEffect(() =>{
       getimage();
    },[])

    return (
      <>
     {isLoading && <SpinnerModal isLoading={true} />}
      <form onSubmit={handleUpload}>
        <FormControl sx={{ display: 'flex', flexDirection: 'row' }}>
           <FormLabel id="demo-radio-buttons-group-label">Templates</FormLabel>
           <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              sx={{ display: 'flex', flexDirection: 'row',marginTop:'1rem' }}
              aria-required
              onChange={handleChange}
              value={TEMPValue}
            >
             <FormControlLabel value='1' control={<Radio />} label="Horizental Logo" />
             <FormControlLabel value='2' control={<Radio />} label="Vertical Logo" />
             <FormControlLabel value='3' control={<Radio />} label="Template3" />
            </RadioGroup>
         </FormControl>
        <div>
            <h6>New Image</h6>
             {previewImage && (
               <img 
                 src={previewImage}
                 alt='Selected'
                 style={{ maxWidth: '100px', maxHeight: '100px', height: '100px',border:'1px solid black'}}
               />
              )}
            <h6>Uploaded Image</h6>
           {<img src={"data:image/png;base64," + image?.[0]?.data} alt='Selected' style={{ maxWidth: '100%', maxHeight: '100px', height: '100px' }} />}

         </div>
        <div>
          
            <input required type="file" onChange={handleFileChange} />
            <Button type='submit' style={{padding:'5px',}} sx={{  border:'1px solid #2fb8f8', color:'#2fb8f8', }}  >Update</Button>
         
        </div> 

        </form>  
      </>
       
    );
};

export default ImageUpload;

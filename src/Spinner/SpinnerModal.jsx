import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Spinner.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


const SpinnerModal = ({isLoading}) => {
 
    return (
     isLoading && (
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
      >
      <CircularProgress color="inherit" />
    </Backdrop>
     )
    );
}

export default SpinnerModal;
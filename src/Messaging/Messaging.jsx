import { Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';

const StyledInputElement = styled('input')`
  width: 100%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;
  height: 200px;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});


function Messaging(props) {
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{marginTop: `10vh`}}>
                <Box sx={{ bgcolor: '#fff', height: '100vh', display: 'flex', textAlign: 'center', flexDirection: 'column'}} >
                    <img src="/static/digital-direct-mail-og.png" alt=""/>
                    <TextField  fullWidth id="filled-basic" label="Subject" variant="filled" />
                    <CustomInput aria-label="Message" />
                    <Button variant="contained">Submit</Button>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Messaging;
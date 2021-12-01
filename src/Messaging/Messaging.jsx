import { Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

function Messaging(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', textAlign: 'center' }} >
                    <img src="/static/"/>
                <TextField  fullWidth id="filled-basic" label="Subject" variant="filled" />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Messaging;
import { Container } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

function Messaging(props) {
    return (
        <Container sm='md' style={{marginTop: `10vh`}}>
            <TextField  id="outlined-basic" label="Subject" variant="outlined"/>
           <textarea />
        </Container>
    );
}

export default Messaging;
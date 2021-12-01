import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';

function Login(props) {
    const card = (
        <React.Fragment>
          <CardContent style={{ textAlign: 'center' }}>
            <CardMedia
                    component="img"
                    height="194"
                    image="/static/national_association_of_realtors_logo.png"
                />      
            <TextField fullWidth id="filled-basic" label="Username" variant="filled" />
            <TextField fullWidth id="filled-basic" label="Password" variant="filled" type="password" />
          </CardContent>
          <CardActions>
            <Button size="large">Login</Button>
          </CardActions>
        </React.Fragment>
      );

    return (
        <div style={{ marginTop: `10vh`}}>
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: 'white', height: '50vh' }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </Container>
        </div>
    );
}

export default Login;
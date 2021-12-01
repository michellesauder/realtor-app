import './Listings.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';

function Listings() {
  return (
      <Container maxWidth="sm" style={{marginTop:'10vh'}}>
        <Box
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: 500,
        height: 128,
        },
        }}
        >
            <Paper>
                <Card sx={{ minWidth: 250 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Hanson Manor
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price: $500,000
                    </Typography>
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/House_Tour_Liverman_3D6A3138_tour.0.jpg"
                    />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Vancouver
                    </Typography>
                    <Typography variant="body2">
                        B.C
                        <br />
                        {'This property is currently active'}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 250 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Gastown Place
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price: $320,000
                    </Typography>
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/House_Tour_Liverman_3D6A3138_tour.0.jpg"
                    />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Vancouver
                    </Typography>
                    <Typography variant="body2">
                        B.C
                        <br />
                        {'This property is currently active'}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Paper>
            </Box>
        </Container>
    // <AddListings />
  );
}

export default Listings;

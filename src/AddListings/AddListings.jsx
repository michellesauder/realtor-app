import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

export default function AddListings() {
    const [currency, setCurrency] = React.useState('EUR');
    const [steps, setSteps] = React.useState(['Property Info', 'Realtor Info', 'Lending Info', 'Lawyer Info']);


    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const handleNext = (event) => {
        setSteps({ step: steps+1 });
      };

    const propertyInfo = () => {
        return (<>        
        <div>
            <TextField
            required
            id="outlined-required"
            label="Property"
            defaultValue="Property Name"
            />
            <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Sellers"
            />
            <TextField
            required
            id="outlined-required"
            label="Potential Buyer"
            defaultValue="Buyer"
            />
            <TextField
            id="outlined-number"
            label="Number of Bedrooms"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
            id="outlined-number"
            label="Number of Bathrooms"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
            <TextField
                id="outlined-number"
                label="SQFT"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
        <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select Currency"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <TextField
                id="outlined-number"
                label="Property Value"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
       </> )
    }

    const realtorInfo = () => {
        return (<>        
        <div>
            <TextField
            required
            id="outlined-required"
            label="Realtor Name"
            defaultValue="Realtor Name"
            />
            <TextField
            required
            id="outlined-required"
            label="Required"
            label="Realtor Company"
            defaultValue="Company"
            />
            <TextField
            id="outlined-number"
            label="Realtor ID"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </div>
        <div>
            <TextField
                id="outlined-number"
                label="Commision"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
       </> )
    }

    const lawyerInfo = () => {
        return (<>        
        <div>
            <TextField
            required
            id="outlined-required"
            label="Realtor Name"
            defaultValue="Realtor Name"
            />
            <TextField
            required
            id="outlined-required"
            label="Required"
            label="Realtor Company"
            defaultValue="Company"
            />
            <TextField
            id="outlined-number"
            label="Realtor ID"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </div>
        <div>
            <TextField
                id="outlined-number"
                label="Commision"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
       </> )
    }
    const notes = () => {
        return ( <textarea/>
        )
    }

    const tabs = () => {
        return (<Tabs value={''} onChange={handleNext} aria-label="nav tabs" style={{ marginTop: '4vh', display: 'flex', justifyContent: 'center' }}>
            <Tab label="Property"  />
            <Tab label="Realtor"  />
            <Tab label="Lending"  />
            <Tab label="Lawyer"  />
            <Tab label="Notes"  />
            <Tab label="Submit"  />
        </Tabs>)
        }
  return (
      <Container maxWidth="sm" style={{marginTop: `10vh`, textAlign: 'center' }}>
          {tabs()}
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
        >
        <img style={{maxWidth: 500}} src="/static/how-to-add-property-in-ga-1-625x300.png" alt=""/>
        {propertyInfo()}
        {realtorInfo()}
        {lawyerInfo()}
        {notes()}

        </Box>
      </Container>
  );
}

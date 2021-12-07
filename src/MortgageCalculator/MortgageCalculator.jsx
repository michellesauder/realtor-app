/* eslint-disable no-lone-blocks */
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

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
      value: 'CAD',
      label: '$',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const provinces = [
    {
      value: 'British Columbia',
      label: 'British Columbia',
    },
    {
      value: 'Alberta',
      label: 'Alberta',
    },
    {
      value: 'Ontario',
      label: 'Ontario',
    },
    {
      value: 'Quebec',
      label: 'Quebec',
    },
  ];

function MortgageCalculator() {

    const basics = () => {
        return <div>Is this your first property?</div>
        }
    const debt = () => {
        return <div>
        <TextField
            id="outlined-number"
            label="Annual Gross Income"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
        id="outlined-number"
        label="Projected Down payment"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select Province"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {provinces.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            id="outlined-number"
            label="Remaining Loans"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="outlined-number"
            label="Credit Card and LOC Outstanding"
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
        }

        const potentialProperty = () => {
        return <div>Third Component</div>
        }

        const tDSR = () => {
        return <div>Final Component</div>
        }

        const mortgageAmount = () => {
            return <div>THIS IS YOUR MORTGAGE AMT</div>
            }

    const [currency, setCurrency] = React.useState('USD');

    //mortgage calculator

    const [steps, setSteps] = React.useState([
        { key: 'firstStep', label: 'Basics', isDone: true, component: basics },
        { key: 'secondStep', label: 'Debt', isDone: false, component: debt },
        { key: 'thirdStep', label: 'Potential Property', isDone: false, component: potentialProperty },
        { key: 'finalStep', label: 'TDSR', isDone: false, component: tDSR },
        { key: 'finalStep', label: 'Mortgage Amount', isDone: true, component: mortgageAmount },
      ]);   

    const [activeStep, setActiveStep] = React.useState(steps[0]);

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            alert('You have completed all steps.');
            return;
          }
         
          const index = steps.findIndex(x => x.key === activeStep.key);
          setSteps(prevStep => prevStep.map(x => {
            if (x.key === activeStep.key) x.isDone = true;
            return x;
          }))
          setActiveStep(steps[index + 1]);
    }
   
    const handleBack = () => {
        const index = steps.findIndex(x => x.key === activeStep.key);
        if (index === 0) return;
       
        setSteps(prevStep => prevStep.map(x => {
          if (x.key === activeStep.key) x.isDone = false;
          return x;
        }))
        setActiveStep(steps[index - 1]);
    }
    
  return (
      <Container maxWidth="sm" style={{marginTop: `10vh`, textAlign: 'ce    nter' }}>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
        >
        <Tabs aria-label="nav tabs" style={{ marginTop: '4vh', display: 'flex', justifyContent: 'center' }}>
            {steps.map((step, i) => {
                return (<>
                    <Tab key={i} label={step.label} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`} />
                    </>)
            })}
        </Tabs>
        <img style={{maxWidth: 500}} src="/static/how-to-add-property-in-ga-1-625x300.png" alt=""/>
        <div className="step-component">
          {activeStep.component()}
        </div>
        <div style={{width:"100%", marginBottom: `10vh`}}>
            <Button  endIcon={<SettingsBackupRestoreIcon/>} value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key}>
                Back
            </Button>
            <Button variant="contained" endIcon={<NextPlanIcon/>} value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext}>
                Next
            </Button>
            </div>
        </Box>
      </Container>
  );
}
export default MortgageCalculator;

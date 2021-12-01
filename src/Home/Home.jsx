

import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  LineSeries,
  Legend,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';
import Card from '@mui/material/Card';
import { Animation } from '@devexpress/dx-react-chart';
// import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Home() {
  const [bar, setBar] = React.useState({
    data:[{ month: 'Jan', sale: 500, total: 987 },
    { month: 'Feb', sale: 100, total: 30000 },
    { month: 'March', sale: 300, total: 11000 },
    { month: 'April', sale: 107, total: 71000 },
    { month: 'May', sale: 950, total: 43000 },
    { month: 'June', sale: 150, total: 75000 }]
  });

  const [pie, setPie] = React.useState({
    data: [
      { communities: 'Kitsilano', area: 12 },
      { communities: 'West End', area: 7 },
      { communities: 'Burnaby', area: 7 },
      { communities: 'Richmond', area: 7 },
      { communities: 'North Vancouver', area: 6 },
      { communities: 'West Vancouver', area: 5 },
      { communities: 'East Vancouver', area: 2 },
      { communities: 'New Westminiter', area: 55 },
    ]
  });

const [chartName, setChartName] = React.useState('');

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const charts = [
  'Bar',
  'Pie',
];

const handleChange = (event) => {
  setChartName({ name: event.target.value });
};

const chooseChart = (chart) => {
  return ( <FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel id="demo-multiple-name-label">Chart</InputLabel>
    <Select
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      value={chartName.name}
      onChange={handleChange}
      input={<OutlinedInput label="Name" />}
      MenuProps={MenuProps}
    >
      {charts.map((chart) => (
        <MenuItem
          key={chart}
          value={chart}
          // style={getStyles(chart, chartName, theme)}
        >
          {chart}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  )

}

  const housingPieChart = () => {
    return (
        <Chart
              data={pie.data}
              >
              <PieSeries
                valueField="area"
                argumentField="communities"
              />
              <Title
                text="Area of Vancouver Houses"
              />
              <Animation />
            </Chart>
            )
  }

  const houseSalesChart = () => {
        return (
          <Card>
            <Chart
              data={bar.data}
            >
            <ValueScale name="sale" />
            <ValueScale name="total" />

            <ArgumentAxis />
            <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
            <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

            <BarSeries
              name="Houses Sold"
              valueField="sale"
              argumentField="month"
              scaleName="sale"
            />
            <LineSeries
              name="Total Transactions"
              valueField="total"
              argumentField="month"
              scaleName="total"
            />
            <Legend />
          </Chart>
        </Card>
            )
    }
      return (
          <Container maxWidth="xl" style={{ 
              // marginTop: `10vh`, 
              justifyContent: 'center', 
              textAlign: 'center'  }}>
              {/* wip will add charts to this */}
              <Tabs value={''} onChange={handleChange} aria-label="nav tabs" style={{ marginTop: '4vh' }}>
                <Tab label="Profile" href="/profile" />
                <Tab label="Account" href="/account" />
                <Tab label="Stats" href="/" />
                {chooseChart()}
              </Tabs>
              {chartName.name === "Pie" ?  housingPieChart() : houseSalesChart()}
              <Paper >
          </Paper>
        </Container>
  );
}

export default Home;

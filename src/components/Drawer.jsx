
import React from 'react';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link, 
  // useHistory 
} from "react-router-dom";
// import Listings from '../Listings/Listings';


function LeftDrawer(props) {

  // let history = useHistory();

  // const handleHistory = (path) => {
  //   switch(path) {
  //     case 'Listings':
  //       return history.push("/listings");
  //     case 'Messaging':
  //       return history.push("/messaging");
  //     case 'Starred Listings':
  //       return history.push("/starred-listings");
  //     case 'Add Listings':
  //       return history.push("/add-listings");
  //     default:
  //       return history.push("/");
  //   }
  // }

  const link = (path) => {
    switch(path) {
      case 'Listings':
        return '/listings'
      case 'Messaging':
        return '/messages'
      case 'Starred Listings':
        return '/starred-listings'
      case 'Add Listings':
        return '/add-listings';
      default:
        return '/';
    }
  }

  const list = () => (
    <Box role="presentation" sx={{ width: 250 }}>
      <List>
        {['Listings', 'Messaging', 'Starred Listings', 'Add Listings'].map((text, index) => (
          <ListItem button key={text} onClick={props.toggleDrawer('', false)}
            // onClick={ handleHistory() }
            >
            <ListItemIcon>
              {index % 2 === 0 ? <HomeIcon /> : <NoteAltIcon />}
            </ListItemIcon>
            <ListItemText primary = { 
            <Link to={link(text)} style={{ textDecoration: 'none', color: '#000000' }}> {text} </Link> 
            } />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Account', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AdminPanelSettingsIcon /> : <SettingsIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment>
          <Drawer open={props.anchor} onClose={props.toggleDrawer('', false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}

export default LeftDrawer
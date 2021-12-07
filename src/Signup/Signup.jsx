// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import CardMedia from '@mui/material/CardMedia';

import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}


// function Signup(props) {

//     const card = (
//         <React.Fragment>
//           <CardContent style={{ textAlign: 'center' }}>
//             <CardMedia
//                     component="img"
//                     height="194"
//                     image="/static/national_association_of_realtors_logo.png"
//                 />      
//             <TextField fullWidth id="filled-basic" label="Username" variant="filled" />
//             <TextField fullWidth id="filled-basic" label="Password" variant="filled" type="password" />
//             <TextField fullWidth id="filled-basic" label="Confirm Password" variant="filled" type="password" />
//           </CardContent>
//           <CardActions>
//             <Button size="large">Signup</Button>
//           </CardActions>
//         </React.Fragment>
//       );

//     return (
//         <div style={{ marginTop: `10vh`}}>
//         <Container maxWidth="sm">
//             <Box sx={{ bgcolor: 'white', height: '50vh' }}>
//                 <Card variant="outlined">{card}</Card>
//             </Box>
//         </Container>
//         </div>
//     );
// }

// export default Signup;
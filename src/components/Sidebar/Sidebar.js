
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {Container,Row,Col} from 'react-bootstrap'
import Maps from '../Maps/Maps'
import './Sidebar.css'


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

 function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
            <div className="container">
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                    <div className="brand">
                            
                            <Typography style={{fontFamily:'Quicksand'}} variant="h3" gutterBottom>
                                        Safe Kyappa
                            </Typography>
                            <Typography style={{fontFamily:'Oxygen'}} variant="h6" gutterBottom>
                                        Land Safety Fast
                            </Typography>
                    </div>
                        <Paper  className="card">
                            <div className={classes.root}>
                                <AppBar position="static" color="default">
                                    <Tabs className="card" style={{backgroundColor:'white'}}
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    >
                                    <Tab label="FEEDS" />
                                    <Tab label="REGISTER LAND" />
                                    <Tab label="VERIFY TITLE" />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={value}
                                    onChangeIndex={handleChangeIndex}
                                >
                                    <TabContainer dir={theme.direction}>
                                    <Typography className="feeds" variant="body2" gutterBottom>
                                    Land is a key strategic resource to Uganda’s population and is a core primary factor of agricultural production, ecosystem stability, and climate resilience.
                                    Prevalence of land conflicts at household level is high at 34.9% and is slightly higher amongst rural households (36%) compared to urban households (33%). 
                                    Only 20% of land conflicts are not reported to any dispute resolution option. With a dispute resolution rate of 59.9% for land conflicts at first instance 
                                    and an average dissatisfaction rate of only 13.3 % the land justice system is rated fair. 

                                    </Typography>
                                    <Typography className="feeds" variant="body2" gutterBottom>
                                            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                    </Typography>
                                    
                                    <hr className="separator" />
                                    </TabContainer>
                                    <TabContainer dir={theme.direction}>
                                    <Typography variant="h5" gutterBottom>
                                        Land Registration for Land Owners
                                    </Typography>

                                    <form noValidate autoComplete="off">
                                    
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <TextField
                                                    id="name"
                                                    label="Name"
                                                    placeholder="Enter Full Name"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                    <TextField
                                                    id="nin"
                                                    label="NIN"
                                                    placeholder="Enter NIN"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                    <TextField
                                                    id="plotLocation"
                                                    label="Plot Location"
                                                    placeholder="Enter Plot Location"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                <TextField
                                                    id="email"
                                                    label="Email Address"
                                                    placeholder="Enter Email Address"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                <TextField
                                                    id="phoneNumber"
                                                    label="Phone Number"
                                                    placeholder="Enter Phone Number"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                <TextField
                                                    id="password"
                                                    label="Password"
                                                    placeholder="Enter Password"
                                                    type="password"
                                                    className="textBox"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                <TextField className="textBox"
                                                    id="password"
                                                    label="Confirm password"
                                                    placeholder="Enter Password"
                                                    type="password"
                                                    margin="normal"
                                                    />
                                                </Col>
                                                <Col>
                                                <input type="file" name="file"/>
                                                </Col>
                                            </Row>
                                        </Container>
                                    
                                    </form>
                                        
                                    </TabContainer>
                                    <TabContainer dir={theme.direction}>
                                        Verify Land Title
                                    </TabContainer>
                                </SwipeableViews>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid   item xs={8}>
                        <Paper className="card">
                                <Maps/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
  );
}
export default Sidebar

import React from 'react'
import {Grid,Paper, Typography} from '@material-ui/core'
import './theme.css'


export default function HomePage() {
    return (
        <center>
            <Grid>
        <div className="home">
               <div className="banner">
               <div>
                    <img className="img"
                   src={require('../images/land.png')}
                   alt="avatar"
                   />
             </div>
               <Typography className="title" variant="h2" gutterBottom>
                   Safe Kyapa
                </Typography>
                    <hr/>
                    <Typography style={{color:'white'}} variant="body1" gutterBottom>
                    We welcome you to safe kyapa <br/>a digitally built land title management system <br/>leveraging on cryptography and geofencing <br/>for secure land transactions.
                    </Typography>
                   
                    
               </div>
        </div>
        </Grid>
        </center>
    )
}

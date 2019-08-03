import React from 'react'
import { AppBar, Toolbar} from "@material-ui/core"
import { Link } from "react-router-dom"
import '.././pages/theme.css'

export default function NavBar() {
    return (
        <AppBar position="relative">
                <Toolbar style={{backgroundColor:'#3CAEA3'}}>
                    <Link className="links" to="/">
                    
                        Home
                    
                    </Link>
                    <Link className="links" to="/register">
                    
                        Register
                    
                    </Link>
                    <Link className="links" to="/transfer">
                    
                        Transfer
                    
                    </Link>
                    <Link className="links" to="/search">
                    
                        Search
                    
                    </Link>
                    
                    </Toolbar>
                </AppBar>
    )
}

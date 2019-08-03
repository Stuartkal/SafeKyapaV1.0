import React from 'react'
import { AppBar, Toolbar} from "@material-ui/core"
import { Link } from "react-router-dom"
import '.././pages/theme.css'

export default function NavBar() {
    return (
        <AppBar position="relative">
                <Toolbar  className="header">
                    <Link className="links" to="/">
                    
                        Home
                    
                    </Link>
                    <Link className="links" to="/register">
                    
                        Register/Transfer
                    
                    </Link>
                    <Link className="links" to="/search">
                    
                        Search
                    
                    </Link>
                    
                    </Toolbar>
                </AppBar>
    )
}

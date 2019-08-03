import React from 'react'
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <AppBar position="relative">
                <Toolbar>
                    <Link to="/">
                    <Button>
                        Home
                    </Button>
                    </Link>
                    <Link to="/register">
                    <Button>
                        Register
                    </Button>
                    </Link>
                    <Link to="/transfer">
                    <Button>
                        Transfer
                    </Button>
                    </Link>
                    <Link to="/search">
                    <Button>
                        Search
                    </Button>
                    </Link>
                    
                    </Toolbar>
                </AppBar>
    )
}

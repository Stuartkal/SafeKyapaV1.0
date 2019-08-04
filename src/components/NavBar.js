import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ".././pages/theme.css";

export default function NavBar() {
	return (
		<AppBar position="relative" className="header">
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					paddingRight: 300,
					paddingLeft: 300,
				}}>
				<Link className="links" to="/">
					<h2 style={{ color: "white" }}>SafeKyapa</h2>
				</Link>
				<Toolbar>
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
			</div>
		</AppBar>
	);
}

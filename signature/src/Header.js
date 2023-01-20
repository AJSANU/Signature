import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function Header() {
	  
return (
	<AppBar position="static">
		<Toolbar style={{backgroundColor:"Green"}}>
		{/*Inside the IconButton, we
		can render various icons*/}
		<IconButton
			size="small"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		/>
		{/* The Typography component applies
		default font weights and sizes */}

		<Typography variant="h6" style={{color: "black"}} component="div" sx={{ flexGrow: 100 }}>
		Draw Your Own Signature
		</Typography>
		</Toolbar>
	</AppBar>
);
}
import { DarkMode, Home, LightMode } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";
import Themes from "../utils/theme";
import { useNavigate } from "react-router-dom";

const NavBar = ({ onThemeChange,navLinks }) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={()=>navigate("/")}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        DreamBid
                    </Typography>
                    {navLinks.map(navLink=><Button color="inherit" key={navLink.name} sx={{textTransform:"capitalize"}} onClick={()=>navigate(navLink.path)}>{navLink.name}</Button>)}
                    <ToggleButtonGroup exclusive onChange={onThemeChange} sx={{ml:2}}>
                        <ToggleButton value={Themes[0].name}>
                            <LightMode></LightMode>
                        </ToggleButton>
                        <ToggleButton value={Themes[1].name}>
                            <DarkMode></DarkMode>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
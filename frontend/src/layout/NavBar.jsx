import { DarkMode, Home, LightMode } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Toolbar, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import Themes from "../utils/theme";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthViewModel from "../viewModels/AuthViewModel";

const NavBar = ({ onThemeChange, navLinks, profilePictureUrl, onLog, log:loggedIn }) => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null); // For managing the dropdown menu

    // Toggle login status for demonstration 
    const handleLogin = async () => {

        onLog(true);
    }

    const handelLogout = () =>{
        AuthViewModel.logOut();
        onLog(AuthViewModel.isLoggedIn());
    } 

    const handleMenuClick = (event) => setAnchorEl(event.currentTarget); // Open dropdown
    const handleMenuClose = () => setAnchorEl(null); // Close dropdown

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "purple" }}>
                <Toolbar>
                    <IconButton
                        onClick={() => navigate("/")}
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
                    {navLinks.map(navLink => (
                        <Button
                            color="inherit"
                            key={navLink.name}
                            sx={{ textTransform: "capitalize" }}
                            onClick={() => navigate(navLink.path)}
                        >
                            {navLink.name}
                        </Button>
                    ))}
                    <ToggleButtonGroup exclusive onChange={onThemeChange} sx={{ ml: 2 }}>
                        <ToggleButton value={Themes[0].name}>
                            <LightMode />
                        </ToggleButton>
                        <ToggleButton value={Themes[1].name}>
                            <DarkMode />
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {loggedIn ? (
                        <>
                            <img
                                alt="Profile Picture"
                                src={profilePictureUrl}
                                sx={{ ml: 2, cursor: "pointer" }}
                                onClick={handleMenuClick} // Open menu on click
                            />
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={() => { navigate("/sellerDashboard"); handleMenuClose(); }}>Seller Dashboard</MenuItem>
                                <MenuItem onClick={() => { navigate("/profile"); handleMenuClose(); }}>Profile</MenuItem>
                                <MenuItem onClick={() => { navigate("/wishlist"); handleMenuClose(); }}>Wishlist</MenuItem>
                                <MenuItem onClick={() => { handleMenuClose(); handelLogout(); }}>Logout</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => navigate("/register")} sx={{ ml: 2 }}>
                                Register
                            </Button>
                            <Button color="inherit" onClick={handleLogin} sx={{ ml: 1 }}>
                                Login
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;

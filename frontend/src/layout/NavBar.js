import { DarkMode, Home, LightMode } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";
import Themes from "../utils/theme";

const NavBar = ({ onThemeChange,navLinks }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Home />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <ToggleButtonGroup exclusive onChange={onThemeChange}>
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
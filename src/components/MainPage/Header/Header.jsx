import "./Header.css";
import {Avatar, Box, Button, Divider, Link, List, ListItem, ListItemIcon, Menu, MenuItem, Tooltip} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useState} from "react";
import {Logout, Settings} from "@mui/icons-material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import logoImg from "../../../images/mainpage/logo.png";
import Underheader from "../Underheader/Underheader";
const Header = () => {
    return(
        <div className="Header">
            <div className="header_elements">
                <div className="header_button_list">
                    <List>
                        <ListItem>
                            <Button variant="text" className="header_btn" sx={{color: grey[100], width: 90}}>
                                Пункт
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button variant="text" className="header_btn" sx={{color: grey[100], width: 90}}>
                                Пункт
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button variant="text" className="header_btn" sx={{color: grey[100], width: 90}}>
                                Пункт
                            </Button>
                        </ListItem>
                        <ListItem>
                            <Button variant="text" className="header_btn" sx={{color: grey[100], width: 90}}>
                                Пункт
                            </Button>
                        </ListItem>
                    </List>
                </div>
                <div className="header_logo">
                    <img src={logoImg} alt="" />
                </div>
                <Profile/>
            </div>
        </div>
    );
}

const Profile = () => {
    const user_info = {
        name: 'Микита',
        surname: 'Покора',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Wurst_Amadeus_2019_c.jpg/1200px-Wurst_Amadeus_2019_c.jpg'
    }
    const anonimAvatar = "https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png";
    const [anchorEl, setAnchorEl] = useState(false);
    const [isLoginOpen, setLogin] = useState(false);
    const [isRegisterOpen, setRegister] = useState(false);
    const open = anchorEl;
    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(false);
    };
    const handleLoginOpen = () => {
        setLogin(true);
    }
    const handleLoginClose = () => {
        setLogin(false);
    }
    const handleRegisterOpen = () => {
        setRegister(true);
    }
    const handleRegisterClose = () => {
        setRegister(false);
    }
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const logged_in = false;
    const [isAdmin, setIsAdmin] = useState(false);
    const profile_menu_color = "444445";
    return (
        <div className="header_profile">
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Профіль">
                    <Button
                        sx={{color: grey[100], width: 70, height: 70}}
                        className="profile_icon"
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 50, height: 50 }} src={logged_in ? user_info.avatar : anonimAvatar}></Avatar>
                    </Button>
                </Tooltip>
            </Box>
            {logged_in ? <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            bgcolor: "#242526",
                            overflow: "visible",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#ffffff',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem onClick={handleClick} sx={{color: "#F2F2F2"}}>
                        <Avatar src={user_info.avatar}/> Профіль
                    </MenuItem>
                    <Divider/>
                    <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <Settings fontSize="small" sx={{color: "#ffffff"}}/>
                        </ListItemIcon>
                        Налаштування
                    </MenuItem>
                    <Link to="/admin">
                        <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>

                            <ListItemIcon>

                                <LightbulbIcon fontSize="small" sx={{color: "#ffffff"}}/>

                            </ListItemIcon>

                            Адмін панель
                        </MenuItem>
                    </Link>

                    <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <Logout fontSize="small" sx={{color: "#ffffff"}}/>
                        </ListItemIcon>
                        Вийти з аккаунту
                    </MenuItem>
                </Menu>


                : <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            bgcolor: "#242526",
                            overflow: "visible",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#ee544e',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                >
                    <MenuItem onClick={handleLoginOpen} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <LoginIcon fontSize="small" sx={{color: "#8a8a8a"}}/>
                        </ListItemIcon>
                        Увійти
                    </MenuItem>
                    <MenuItem onClick={handleRegisterOpen} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <PersonAddIcon fontSize="small" sx={{color: "#9f9f9f"}}/>
                        </ListItemIcon>
                        Зареєструватися
                    </MenuItem>
                </Menu>
            }
        </div>
    );
}



export default Header;
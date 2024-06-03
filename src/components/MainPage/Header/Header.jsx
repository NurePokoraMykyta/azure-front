import "./Header.css";
import {
    Avatar,
    Box,
    Button, Container, createTheme,
    Divider, Grid,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    Menu,
    MenuItem, Modal, TextField,
    Tooltip, Typography
} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {Logout, Settings} from "@mui/icons-material";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import logoImg from "../../../images/mainpage/logo.png";
import Underheader from "../Underheader/Underheader";
import ModalContent from "../Modal/ModalContent";
import CloseIcon from '@mui/icons-material/Close';

const registerFetch = async (username, password) => {
    return await fetch(`http://localhost:5050/api/sign-up`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    })
}

const loginFetch = async (username, password) => {
    const response = await fetch(`http://localhost:5003/api/sign-in`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    });

    if (response.ok) {
        const data = await response.json();
        if (data.status === "ok") {
            const token = data.token;
            localStorage.setItem("token", token);
            return true; // Повертаємо true у випадку успішного входу
        } else {
            throw new Error(data.statusMessage);
        }
    } else {
        throw new Error(response.status);
    }
};


const Header = () => {
    return (
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
                    <img src={logoImg} alt=""/>
                </div>
                <Profile/>
            </div>
        </div>
    );
}

const Profile = ({}) => {
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

    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const [loggedIn, setLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const profile_menu_color = "444445";

    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };
    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
    };
    const handleRegisterModalOpen = () => {
        setRegisterModalOpen(true);
    };
    const handleRegisterModalClose = () => {
        setRegisterModalOpen(false);
    };


    return (
        <>
            <Modal
                open={isRegisterModalOpen}
                onClose={handleRegisterModalClose}
            >
                <RegisterForm
                    onClose={handleRegisterModalClose}
                    setLoggedIn={setLoggedIn}
                />
            </Modal>
            <Modal
                open={isLoginModalOpen}
                onClose={handleLoginModalClose}
            >
                <LoginForm
                    onClose={handleLoginModalClose}
                    setLoggedIn={setLoggedIn}
                />
            </Modal>
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
                            <Avatar sx={{width: 50, height: 50}}
                                    src={loggedIn ? user_info.avatar : anonimAvatar}></Avatar>
                        </Button>
                    </Tooltip>
                </Box>
                {loggedIn ? <Menu
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
                        <MenuItem onClick={handleLoginModalOpen} sx={{color: "#F2F2F2"}}>
                            <ListItemIcon>
                                <LoginIcon fontSize="small" sx={{color: "#8a8a8a"}}/>
                            </ListItemIcon>
                            Увійти
                        </MenuItem>
                        <MenuItem onClick={handleRegisterModalOpen} sx={{color: "#F2F2F2"}}>
                            <ListItemIcon>
                                <PersonAddIcon fontSize="small" sx={{color: "#9f9f9f"}}/>
                            </ListItemIcon>
                            Зареєструватися
                        </MenuItem>
                    </Menu>
                }
            </div>
        </>
    );
}

const theme = createTheme()

const LoginForm = ({onClose, setLoggedIn}) => {
    const [isSumbit, setIsSumbit] = useState(false);
    const [parameters, setParameters] = useState({
        username: '',
        password: ''
    });


    useEffect(() => {
        const handleButtonLoginClose = async () => {
            try {
                await loginFetch(parameters.username, parameters.password);
                setLoggedIn(true);
            } catch (err) {
                console.log(err);
            } finally {
                onClose();
                setIsSumbit(false);
            }
        };

        if (isSumbit) {
            handleButtonLoginClose();
        }
    }, [isSumbit]);


    return (
        <ModalContent>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                onClick={onClose}
            >
                <CloseIcon/>
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign-in
            </Typography>
            <Container maxWidth="md">
                <Box component="form" sx={{mt: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="login"
                                label="Login"
                                name="login"
                                autoComplete="login"
                                onChange={(e) =>
                                    setParameters({...parameters, username: e.target.value})
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setParameters({...parameters, password: e.target.value})
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            mx: 0,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSumbit(true)
                        }
                        }
                    >
                        Sign In
                    </Button>

                </Box>
            </Container>
        </ModalContent>
    )
}

const RegisterForm = (props) => {

    const [isSumbit, setIsSumbit] = useState(false);
    const [parameters, setParameters] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {

        if (isSumbit == true) {
            const handleButtonRegisterClose = async () => {
                try {
                    await registerFetch(parameters.username, parameters.password);
                } catch (e) {
                    console.log(e);
                } finally {
                    props.onClose();
                    setIsSumbit(false);
                }
            }
            handleButtonRegisterClose();
        }
    }, [isSumbit]);

    return (
        <ModalContent>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                onClick={props.onClose}
            >
                <CloseIcon/>
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign-up
            </Typography>
            <Container maxWidth="md">
                <Box component="form" sx={{mt: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="login"
                                label="Login"
                                name="login"
                                autoComplete="login"
                                onChange={(e) =>
                                    setParameters({...parameters, username: e.target.value})
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setParameters({...parameters, password: e.target.value})
                                }
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            mt: 3,
                            mb: 2,
                            mx: 0,
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsSumbit(true);
                        }
                        }
                    >
                        Sign Up
                    </Button>
                </Box>
            </Container>
        </ModalContent>
    )
}


export default Header;
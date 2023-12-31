import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IdentityContext from '../../../context/identity';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../../store/slices/authSlice';

export default function UpperBar({handleMenuIconClick}) {
  // const {identity, logout} = useContext(IdentityContext);
  const user = useSelector((state) => state.identity.user);
  const [auth, setAuth] = React.useState(user ? !(Object.keys(user).length === 0) : false);
  // const [auth, setAuth] = React.useState(Object.keys(identity).length === 0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  console.log("UpperBar, identity: ", user);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout= (event) => {
    dispatch(removeToken());
    setAuth(false);
  };

  const handleLogin = (event) => {
    return(navigate("signin"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{background:"rgb(51 65 85)"}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuIconClick} 
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sales and Rewards System 
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>

              <IconButton
                size="large"
                aria-label="Boton de para cerrar sesion"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
                <LogoutIcon></LogoutIcon> 
              </IconButton>
            </div>
          )}
          {
            !auth && (
            <div>
              <IconButton
                size="large"
                aria-label="Boton de para cerrar sesion"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                <LoginIcon></LoginIcon>
              </IconButton>
            </div>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Home } from '@mui/icons-material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import { useSelector } from "react-redux";
import './SideBar.css';

const drawerPosition = 'left';

export default function SideBar({isOpen, toggleDrawerOpen}) {

  const user = useSelector((state) => state.identity.user);

  // NOTE: Updates the local's SideBar state, based on the parent's state
  // change. This state, is also synched with the UpperBar sidebar button.
  // useEffect( () => {
  //   console.log(`Should Trigger only once ${isOpen}`)
  //   setDrawerOpen(isOpen);
  // }, [isOpen]);

  const handleChangeDrawerOpen = (isOpen) => (event) => {
    // console.log(`ToggleDrawer called\n\topen: ${open}\n\state: ${state}`)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    // setDrawerOpen(isOpen);
    toggleDrawerOpen();
    console.log(`ToggleDrawer called\n\topen: ${isOpen}\n\tstate: ${isOpen}`)
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={handleChangeDrawerOpen(false)}
      onKeyDown={handleChangeDrawerOpen(false)}
      className="findMe text-white bg-gray-600"
      flex={1}
    >
      <List pt={5}>
        <ListItem key={Math.random} disablePadding alignItems='center'>
            <Link to="/" className='w-full'>
              <ListItemButton
                
              >
                <ListItemIcon >
                  <Home></Home>
                </ListItemIcon>
                <ListItemText primary={"Home"} sx={{textDecoration:"none"}} />
              </ListItemButton>
            </Link>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          sx={{mt:10}}>
            <Link to="/profile" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"Perfil de Usuario"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          sx={{mt:3}}>
            <Link to="/register-sale" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PointOfSaleIcon></PointOfSaleIcon>
                </ListItemIcon>
                <ListItemText primary={"Registrar Compra"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem key={Math.random} disablePadding alignItems='center'sx={{mt:3}}>
            <Link to="/register-customer" fullWidht>
              <ListItemButton
                
              >
                <ListItemIcon >
                  <AppRegistrationIcon></AppRegistrationIcon>
                </ListItemIcon>
                <ListItemText primary={"Registrar Cliente"} />
              </ListItemButton>
            </Link>
        </ListItem>

        {
          (user && user.manager) &&
            <ListItem key={Math.random} disablePadding alignItems='center'sx={{mt:3}}>
                <Link to="/track-employees" >
                  <ListItemButton
                    
                  >
                    <ListItemIcon >
                      <Home></Home>
                    </ListItemIcon>
                    <ListItemText primary={"Progreso Mensual E Historia"} />
                  </ListItemButton>
                </Link>
            </ListItem>
        }
      </List>

      <Divider />
      <Typography sx={{mt:3}}>
        Administracion
      </Typography>
      <List sx={{mt:5}}>
        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          >
            <Link to="/crud-customers" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"Clientes"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          >
            <Link to="/crud-sales" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"Ventas"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          >
            <Link to="/crud-products" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"productos"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          >
            <Link to="/crud-employees" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"Empleados"} />
              </ListItemButton>
            </Link>
        </ListItem>

        <ListItem
          key={Math.random}
          disablePadding
          alignItems='center'
          >
            <Link to="/crud-users" >
              <ListItemButton
                
              >
                <ListItemIcon >
                  <PersonIcon></PersonIcon>
                </ListItemIcon>
                <ListItemText primary={"Usuarios"} />
              </ListItemButton>
            </Link>
        </ListItem>





      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button> */}
          <Drawer
            anchor={'left'}
            open={isOpen}
            // open={isOpen}
            onClose={handleChangeDrawerOpen(false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
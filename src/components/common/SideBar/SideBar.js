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
import { useContext } from 'react';
import IdentityContext from '../../../context/identity';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';


export default function SideBar({isOpen}) {
  const [state, setState] = React.useState({
    // top: false,
    left: isOpen,
    // bottom: false,
    // right: false,
  });
  const {identity} = useContext(IdentityContext);
  // setState({ ...state, left: isOpen});
  // NOTE: Maybe use useEffect here?

  useEffect( () => {
    console.log(`Should Trigger only once ${isOpen}`)
  }, [isOpen]);

  console.log(`Rendering SideBar\n\tLeft State: ${state.left}\n\tisOpen:${isOpen}`);


  const toggleDrawer = (anchor, open) => (event) => {
    // console.log(`ToggleDrawer called\n\topen: ${open}\n\state: ${state}`)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    console.log(`ToggleDrawer called\n\topen: ${open}\n\tstate: ${state}`)
  };

  useEffect( () => {
    console.log(`Should Trigger only once ${isOpen}`)
    setState({ ...state, "left": isOpen});
  }, [isOpen]);
  // toggleDrawer('left', isOpen);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="findMe"
    >
      <List pt={5}>
        <ListItem key={Math.random} disablePadding alignItems='center'>
            <Link to="/" fullWidht >
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
          (identity.manager) &&
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
          <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            // open={isOpen}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
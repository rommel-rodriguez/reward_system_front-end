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
import { useEffect } from 'react';

export default function SideBar({isOpen}) {
  const [state, setState] = React.useState({
    // top: false,
    left: isOpen,
    // bottom: false,
    // right: false,
  });

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
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
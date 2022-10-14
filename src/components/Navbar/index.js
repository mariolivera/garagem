import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer  from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Divider } from '@mui/material';
import {List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Home, DirectionsCar, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export default function Navbar() {
  const Navigate = useNavigate();
  const [menu, setmenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //const abrirMenu = () => setmenu(true);
  const handleMenuLateral = () => setmenu (!menu);
  const redirecionar = (url)=> {
    Navigate (url);
    setmenu(false);
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer onClose={handleMenuLateral} open={menu}>
        <div className='menu'>Menu
          <Divider/>
          <List>
            <ListItemButton onClick={() => redirecionar('/')}>
              <ListItemIcon><Home/></ListItemIcon>
              <ListItemText> inicio</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => redirecionar('/listar')}>
              <ListItemIcon><DirectionsCar/></ListItemIcon>
              <ListItemText>veiculos</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => redirecionar('/config')}>
              <ListItemIcon><Settings/></ListItemIcon>
              <ListItemText> Configuração </ListItemText>
            </ListItemButton>
          </List>
        </div>
      </Drawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuLateral}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          
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
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem style={{color:'red'}} onClick={() => {handleClose(); redirecionar('/entar')}} >Desconectar</MenuItem>
              </Menu>
            </div>
          )
        </Toolbar>
      </AppBar>
    </Box>
  );
}
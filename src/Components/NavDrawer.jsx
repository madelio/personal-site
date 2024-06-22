import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                onClick={() => setOpen(true)}
            >
                <MenuIcon/>
            </IconButton>
            <Drawer 
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box>Hello</Box>
            </Drawer>
            {children}
        </>
    )
};

export default NavDrawer;
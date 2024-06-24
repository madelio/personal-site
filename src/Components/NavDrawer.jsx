import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const NavDrawer = ({ navRef, listItems = [], onItemClick}) => {
    const [ selectedTabIndex, setSelectedTab ] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
        onItemClick(listItems[value]?.ref);
    }

    return (
        <AppBar
            color='inherit'
            variant={selectedTabIndex === 0? 'elevation' : 'outlined'}
            elevation={0}
        >
            <Tabs  
                value={selectedTabIndex} 
                onChange={handleTabChange} 
                role="navigation"
                centered
                ref={navRef}
            >
                {listItems?.map(({ title }) => (
                    <Tab label={title}/>
                ))}
            </Tabs>
        </AppBar>
    )
};

export default NavDrawer;
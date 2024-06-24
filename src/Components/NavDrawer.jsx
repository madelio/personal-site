import { useState, useRef } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { scrollTo } from '../util';

const NavDrawer = ({ children, listItems = []}) => {
    const [ selectedTab, setSelectedTab ] = useState(0);
    const navRef = useRef();

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
        scrollTo(listItems[value]?.ref, navRef.current.clientHeight);
    }

    return (
        <Tabs  
            value={selectedTab} 
            onChange={handleTabChange} 
            role="navigation"
            centered
            ref={navRef}
            sx={{
                position: 'sticky',
                top: 0
            }}
        >
            {listItems?.map(({ title }) => (
                <Tab label={title}/>
            ))}
        </Tabs>
    )
};

export default NavDrawer;
import React from 'react';
import './Tab.css';
import { useTabContext } from './TabContextHook.js';

const TabPanel = ({ children, value, ...other }) => {
    const { activeTab } = useTabContext(); // Assuming TabContext is defined and provides necessary context
    return (
        <div
            role="tabpanel"
            hidden={value !== activeTab}
            id={`tabpanel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className='tabpanel'
            {...other}
        >
            {value === activeTab && <div>{children}</div>}
        </div>
    );
};

export default TabPanel;
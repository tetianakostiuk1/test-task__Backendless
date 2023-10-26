import React from 'react';
import { Tab } from "../../types/Tab";
import './TabsNav.scss';
import {NavLink, useLocation} from "react-router-dom";

interface TabsNavProps {
    tabs: Tab[];
}

const TabsNav = ({ tabs }: TabsNavProps) => {

    const location = useLocation();

    return (
        <nav>
            <ul>
                {tabs
                    .sort((a, b) => a.order - b.order)
                    .map((tab: Tab) => (
                        <NavLink
                            to={tab.id}
                            className={`${tab.id === location.pathname.slice(1) 
                                ? 'active' 
                                : '' }`}
                        >
                            {tab.title}
                        </NavLink>
                    ))}
            </ul>
        </nav>
    );
};

export default TabsNav;
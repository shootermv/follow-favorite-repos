import React from 'react'

const Tab = ({children, active, tabindex, setActive}) => {
    
    return (
        <li onClick={() => setActive(tabindex)} data-test-id="tab-title">
            <button  className={active === tabindex ? 'active': ''}>
             {children}
            </button>
        </li>
    )
}

export default Tab;

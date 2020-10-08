import React from 'react'

const TabPanel = ({children, active, tabindex}) => {
    if (tabindex !== active) return null;
    return (
        <>{children}</>
    )
}

export default TabPanel

import React from 'react';



class Navbar extends React.Component{

    render(){
        const {title,onClick,darkmode} = this.props
        return(
            <nav className="nav-header shadow t-center">
                <span className="brand">{title}</span>
                <span className="right-navbar darkmode-btn" onClick={onClick}>{darkmode ? 'Light Mode' : 'Dark Mode'}</span>
            </nav>
        )
    }
}

export default Navbar;
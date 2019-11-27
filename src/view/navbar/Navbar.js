import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{

    render(){
        const {title,onClick,darkmode} = this.props
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-c-green">
                <div className="container">
                    <Link className="navbar-brand" to="/#" >{title}</Link>
                    <div className="mr-auto">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/#">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/surah">Baca Surah</Link>
                        <Link className="nav-item nav-link" to="/description">Lihat Deskripsi</Link>
                        </div>
                    </div>
                <button className="btn btn-dark btn-c-nav" onClick={onClick}>{darkmode ? 'Light Mode' : 'Dark Mode'}</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;
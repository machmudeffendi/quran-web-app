import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{

    render(){
        const {title,onClick,darkmode} = this.props
        return(
            <nav className="navbar navbar-expand navbar-dark bg-c-green navbar-shadow fixed-top">
                <div className="container flex-column flex-md-row">
                    <Link className="navbar-brand mr-0 mr-md-2" to="/quran-web-app/" >{title}</Link>
                    <div className="navbar-nav-scroll ml-lg-3 mr-lg-4">
                        <ul className="navbar-nav bd-navbar-nav flex-row">
                            {/*<li className="nav-item active">
                                <Link className="nav-item nav-link active" to="/#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/quran-web-app/surah">Baca Surah</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/quran-web-app/description">Lihat Deskripsi</Link>
                            </li>*/}
                        </ul>
                    </div>
                    <button className="btn btn-dark btn-c-nav btn-m-bottom" onClick={onClick}>{darkmode ? 'Light Mode' : 'Dark Mode'}</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;
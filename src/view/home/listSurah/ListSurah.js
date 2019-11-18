import React from 'react';
import { Link } from 'react-router-dom';

const ListSurah = ({index, nomor, nama, asma}) =>{
    return(
        <div className="items" key={index}>
            <div className="book">
                <Link to={'/surah/' + nomor} className="title-link">{nama}</Link>
                <p className="text-grey">{asma}</p>
                <span>{nomor}</span>
            </div>
        </div>
    )
}

export default ListSurah;
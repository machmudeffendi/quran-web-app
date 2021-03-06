import React from 'react';
import { Link } from 'react-router-dom';

const ListSurah = ({item}) =>{
    return(
        <div className="col-sm-12 col-md-4 mt-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{item.nama}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.arabic}</h6>
                    <p className="card-text desc-h-scroll"><span dangerouslySetInnerHTML={{__html: item.terjemah}} /></p>
                    <Link to={'/quran-web-app/surah/' + item.id} className="card-link">Baca</Link>
                    <Link to={'/quran-web-app/surah/description/' + item.id} className="card-link">Lihat Deskripsi</Link>
                </div>
            </div>
        </div>
        // <div className="items" key={index}>
        //     <div className="book">
        //         <Link to={'/surah/' + nomor} className="title-link">{nama}</Link>
        //         <p className="text-grey">{asma}</p>
        //         <span>{nomor}</span>
        //     </div>
        // </div>
    )
}

export default ListSurah;
import React from 'react';

const ListAyyah = ({nomor,arab,arabTranslate,indonesia}) => {
    return(
        <div className="item">
            <span className="nomor">{(nomor <= 9) ? '0'+nomor : nomor }</span>
            <span className="arabic">{arab}</span>
            <span className="arabic-tr"><div dangerouslySetInnerHTML={{__html: arabTranslate}} /></span>
            <span className="translate">{indonesia}</span>
        </div>
    )
}

export default ListAyyah;
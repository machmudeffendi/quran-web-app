import React from 'react';

const ListAyyah = ({nomor,arab,arabTranslate,indonesia}) => {
    return(
        <div className="card mt-2 mb-2">
            <div className="card-body p-2">
                <span className="number-c-1">{(nomor <= 9) ? '0'+nomor : nomor }</span>
                <div className="text-right">
                    <span className="arabic">{arab}</span>
                </div>
                <div className="text-left">
                    <span className="arabic-tr"><div dangerouslySetInnerHTML={{__html: arabTranslate}} /></span>
                </div>
                <div className="text-left">
                    <span className="translate">{indonesia}</span>
                </div>
            </div>
        </div>
    )
}

export default ListAyyah;
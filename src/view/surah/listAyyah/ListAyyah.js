import React from 'react';

const ListAyyah = ({item}) => {
    return(
        <div className="card mt-2 mb-2">
            <div className="card-body p-2">
                <span className="number-c-1">{(item.aya <= 9) ? '0'+item.aya : item.aya }</span>
                <div className="text-right">
                    <span className="arabic">{item.text}</span>
                </div>
                <div className="text-left">
                    {/* <span className="arabic-tr"><div dangerouslySetInnerHTML={{__html: arabTranslate}} /></span> */}
                </div>
                <div className="text-left">
                    {/* <span className="translate">{indonesia}</span> */}
                </div>
            </div>
        </div>
    )
}

export default ListAyyah;
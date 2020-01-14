import React from 'react';

const ListAyyah = ({item, translate, latin}) => {
    return(
        <div className="card mt-2 mb-2">
            <div className="card-body p-2">
                <span className="number-c-1">{(item.aya <= 9) ? '0'+item.aya : item.aya }</span>
                <div className="text-right">
                    <span className="arabic">{item.text}</span>
                </div>
                <div className="text-left">
                    <span className="arabic-tr"><div dangerouslySetInnerHTML={{__html: latin.text}} /></span>
                </div>
                <div className="text-left">
                    <span className="translate">{translate.text}</span>
                </div>
            </div>
        </div>
    )
}

export default ListAyyah;
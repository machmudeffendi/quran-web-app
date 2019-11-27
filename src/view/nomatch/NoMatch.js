import React from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router-dom';
 
const meta = {
    title: 'Oops not found - Quran Web',
    description: 'I am a description, and I can create multiple tags',
    meta: {
        charset: 'utf-8',
        name: {
        keywords: 'react,meta,document,html,tags'
        }
    }
};

const NoMatch = () => {
    return(
        <div className="container text-center">
            <DocumentMeta {...meta}/>
            <div className="mt-5">
                <h2 className="_404title">Oops 404!</h2> 
                <span className="_404desc">page not found..</span>
                <Link to="/" className="_404link">Back home</Link>
            </div>
        </div>
    )
}

export default NoMatch;
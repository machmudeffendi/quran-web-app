import React from 'react';

const handleToTop = () =>{
    window.scrollTo(0,0)
}

class TopButton extends React.Component{
    render(){
        return(
            <div className="goUp" onClick={handleToTop}>^</div>
        )
    }
}

export default TopButton;
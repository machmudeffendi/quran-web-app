import React from 'react';

class AudioPlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            play: false
        }
        this.togglePlay = this.togglePlay.bind(this);
    }

    // audio = new Audio(this.props.url);

    togglePlay(){
        this.setState({play: !this.state.play,}, () => {
            // this.state.play ? this.audio.play() : this.audio.pause()
        })
    }

    render(){
        return(
            <div className="bottom-player">
                {/* <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button> */}
                <audio controls>
                    <source src={this.props.url} type="audio/mpeg"/>
                </audio>
            </div>
        )
    }
}

export default AudioPlay;
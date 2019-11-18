import React from 'react';
import { connect } from 'react-redux';
import { fetchNewAyyah, fetchNewSurah } from '../../services/redux/actionCreators'
import ListAyyah from './listAyyah/ListAyyah';
import { Link, withRouter  } from 'react-router-dom';
import AudioPlay from './audioPlayer/AudioPlay';

class Surah extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noSurah: 0,
            isLoadingTitle: false,
            isLoadingContent: false,
            redirect: false,
            redirectSurah: 0
        }
        this.surahRedirect = this.surahRedirect.bind(this);
    }

    componentDidMount(){
        var nosurah = this.props.match.params.id;
        this.setState({
            noSurah: nosurah,
            isLoadingTitle: true,
            isLoadingContent: true
        })
        this.props.updateAyyah(nosurah, () => {
            this.setState({isLoadingContent: false})
        })
        this.props.updateSurah(() => {
            this.setState({isLoadingTitle: false})
        })

        window.scrollTo(0,0);
    }

    componentWillUnmount(){
        this.props.currentAyyah.currentAyyah = [];
        this.props.currentSurah.currentSurah = [];
    }

    surahRedirect(event){
        this.props.currentAyyah.currentAyyah = [];
        var id = event.target.value;
        this.setState({
            noSurah: id,
            redirect: true,
            redirectSurah: id,
            isLoadingContent: true,
        });
        this.props.updateAyyah(id, () => {
            this.setState({isLoadingContent: false})
        });
        this.props.history.push("/surah/"+id)
    }

    render(){
        const { currentAyyah, currentSurah } = this.props;
        const { isLoadingTitle, isLoadingContent, noSurah} = this.state;
        return(
            <div className="content">
                
                <div className="audio-player">
                    {currentSurah.currentSurah.map((item, index) => (
                        index === noSurah-1 && <AudioPlay key={index} url={item.audio}/>
                    ))}
                </div>
                <span className="back"><Link to={'../'} className="link-back">Kembali</Link></span>
                <span className="right-choice-surah">
                    <select className="" onChange={this.surahRedirect}>
                        <option hidden>Pilih Surah</option>
                        {currentSurah.currentSurah.map((item, index) => (
                            <option key={index} value={item.nomor}>{item.nama}</option>
                        ))}
                    </select>
                </span>
                <h2 className="title-surah">{currentSurah.currentSurah.map((item, index) => (
                    index === noSurah-1 ? item.asma+' - '+item.nama : ''
                ))}</h2>
                <h2>{isLoadingTitle  && 'Title Loading ..'}</h2>
                <h2>{isLoadingContent  && 'Content Loading ..'}</h2>
                <div className="bx-items">
                    {currentAyyah.currentAyyah.map((item,index) => (
                        <ListAyyah key={index} nomor={item.nomor} arab={item.ar} arabTranslate={item.tr} indonesia={item.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateAyyah: (noSurah,callback) => dispatch(fetchNewAyyah(noSurah,callback)),
    updateSurah: (callback) => dispatch(fetchNewSurah(callback))
});

const mapStateToProps = state => {
    return {
        currentAyyah: state.currentAyyah,
        currentSurah: state.currentSurah
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Surah));
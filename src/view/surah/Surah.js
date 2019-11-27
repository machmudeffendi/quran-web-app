import React from 'react';
import DocumentMeta from 'react-document-meta';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchNewAyyah, fetchNewSurah } from '../../services/redux/actionCreators';
import { Link, withRouter  } from 'react-router-dom';

import ListAyyah from './listAyyah/ListAyyah';
import AudioPlay from './audioPlayer/AudioPlay';

class Surah extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noSurah: 0,
            isLoadingTitle: false,
            isLoadingContent: false,
            redirect: false,
            redirectSurah: 0,
            itemSurah: {
                asma: 'asma',
                nama: 'Al-Fatihah',
                arti: 'Pembukaan',
            }
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
            if(this.props.currentSurah.currentSurah.error === undefined){
                this.props.currentSurah.currentSurah.map((item, index) => ( index === nosurah-1 ? this.setState({itemSurah: item}) : ''));
            }
            // console.log(this.props.currentSurah);
        });

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
        if(this.props.currentSurah.currentSurah.error === undefined){
            this.props.currentSurah.currentSurah.map((item, index) => (index === id-1 ? this.setState({itemSurah: item}) : ''));
        }
        this.props.history.push("/surah/"+id)
    }

    render(){
        const { currentAyyah, currentSurah } = this.props;
        const { isLoadingTitle, isLoadingContent, noSurah, itemSurah } = this.state;
        const meta = {
            title: itemSurah.nama+' - Quran Web',
            description: itemSurah.keterangan,
            meta: {
                charset: 'utf-8',
                name: {
                keywords: 'react,meta,document,html,tags'
                }
            }
        };

        return(
            <div className="container text-center mb-5 content">
                <DocumentMeta {...meta}/>

                <div className="audio-player d-none">
                    {
                    currentSurah.currentSurah.map === undefined 
                        ? '' 
                        : currentSurah.currentSurah.map((item, index) => (index === noSurah-1 && <AudioPlay key={index} url={item.audio}/>))
                    }
                </div>

                <div className="row mt-3">
                    <div className="col-sm-2 text-left">
                        <Link to={'../'} className="link-back"><button className="btn btn-c-green">Kembali</button></Link>
                    </div>
                    <div className="col-sm-8">
                        <h2 className="title-surah">{itemSurah.asma} - {itemSurah.nama} - {itemSurah.arti}</h2>
                        <h2>{isLoadingTitle  && <div className="spinner-border text-c-green" role="status"><span className="sr-only">Loading...</span></div>}</h2>
                    </div>
                    <div className="col-sm-2 text-right">
                        <span className="right-choice-surah">
                            <select className="form-control" onChange={this.surahRedirect}>
                                <option hidden>Pilih Surah</option>
                                {
                                currentSurah.currentSurah.map === undefined 
                                    ? '' 
                                    : currentSurah.currentSurah.map((item, index) => (<option key={index} value={item.nomor}>{item.nama}</option>))
                                }
                            </select>
                        </span>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">
                        
                        <h2>{isLoadingContent  && <div className="spinner-border text-c-green" role="status"><span className="sr-only">Loading...</span></div>}</h2>
                        <div className="bx-items">
                            {
                            currentAyyah.currentAyyah.map === undefined 
                                ? '' 
                                : currentAyyah.currentAyyah.map((item,index) => (<ListAyyah key={index} nomor={item.nomor} arab={item.ar} arabTranslate={item.tr} indonesia={item.id}/>))
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

Surah.propTypes = {
    currentSurah: PropTypes.object.isRequired
};
  
Surah.defaultProps = {
    currentSurah: {
        currentSurah: [{
            asma: 'asma',
            nama: 'Al-Fatihah',
            arti: 'Pembukaan',
            audio: 'audio',
            nomor: 1
        },{
            asma: 'asma',
            nama: 'Al-Baqarah',
            arti: 'Sapi Betina',
            audio: 'audio',
            nomor: 2
        },]
    },
    currentAyyah:{
        currentAyyah:[{
            nomor: '1',
            ar: 'Arab',
            tr: 'tr',
            id: 'Indonesia',
        },{
            nomor: '2',
            ar: 'Arab',
            tr: 'tr',
            id: 'Indonesia',
        },{
            nomor: '3',
            ar: 'Arab',
            tr: 'tr',
            id: 'Indonesia',
        }]
    }
};

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
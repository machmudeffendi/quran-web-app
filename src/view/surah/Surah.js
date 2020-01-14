import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter  } from 'react-router-dom';

import ListAyyah from './listAyyah/ListAyyah';
import { getValueSurah, getTitleSurah, getAllSurah, getIdnTranslate, getLatin } from '../../services/redux/surah/action';

class Surah extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noSurah: 0,
            isLoadingTitle: false,
            isLoadingContent: false,
            redirect: false,
            redirectSurah: 0,
            isValueSurahMounted: false,
            isTranslateMounted: false,
            isLatinMounted: false,
        }
        this.surahRedirect = this.surahRedirect.bind(this);
    }

    componentDidMount(){
        this.setState({
            isValueSurahMounted: false,
            isTranslateMounted: false,
            isLatinMounted: false,
        })

        var nosurah = this.props.match.params.id;
        this.setState({
            noSurah: nosurah,
            isLoadingTitle: true,
            isLoadingContent: true
        })
        
        this.props.updateAyyah(nosurah, () => {
            this.setState({
                isLoadingContent: false,
                isValueSurahMounted: true,
            })
        })
        this.props.updateSurah(nosurah, () => {
            this.setState({
                isLoadingTitle: false
            })
            // console.log(this.props.titleSurah);
        });
        this.props.updateAllSurah(() => {})
        this.props.updateTranslate(nosurah, () => {
            this.setState({
                isTranslateMounted: true,
            })
        })
        this.props.updateLatin(nosurah, () => {
            this.setState({
                isLatinMounted: true,
            })
        })

        document.title = "Surah "+nosurah+" - Quran web"
        window.scrollTo(0,0);
    }

    surahRedirect(event){
        // this.props.valueSurah = [];
        var id = event.target.value;
        this.setState({
            noSurah: id,
            redirect: true,
            redirectSurah: id,
            isLoadingTitle: true,
            isLoadingContent: true,
            isValueSurahMounted: false,
            isTranslateMounted: false,
            isLatinMounted: false,
        });
        this.props.updateAyyah(id, () => {
            this.setState({
                isLoadingContent: false,
                isValueSurahMounted: true
            })
        });
        this.props.updateSurah(id, () => {
            this.setState({isLoadingTitle: false})
        });
        this.props.updateTranslate(id, () => {})
        this.props.updateTranslate(id, () => {
            this.setState({
                isTranslateMounted: true,
            })
        })
        this.props.updateLatin(id, () => {
            this.setState({
                isLatinMounted: true,
            })
        })

        document.title = "Surah "+id+" - Quran web"

        this.props.history.push("/quran-web-app/surah/"+id)
    }

    render(){
        const { valueSurah, titleSurah, allSurah, idnTranslate, latin } = this.props;
        const { isLoadingTitle, isLoadingContent, isValueSurahMounted, isTranslateMounted, isLatinMounted } = this.state;

        return(
            <div className="container text-center mb-5 content">
                <div className="row">
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-4 ">
                        <div className="sidebar-menu">
                            <Link to={'../'} className="link-back"><button className="btn btn-c-green btn-block">Kembali</button></Link>
                            <select className="form-control rounded-select mt-3" onChange={this.surahRedirect}>
                                <option hidden>Pilih Surah</option>
                                {
                                allSurah.map === undefined 
                                    ? '' 
                                    : allSurah.map((item, index) => (<option key={index} value={item.id}>{item.nama}</option>))
                                }
                            </select>
                        </div>
                        <div className="sticky-sidebar">
                            <div className="card mt-3">
                                <div className="card-body">
                                    <h2 className="title-surah">{titleSurah.arabic} - {titleSurah.nama} - {titleSurah.terjemah}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12 justify-content-center">
                        <h2>{(isLoadingContent && isLoadingTitle)  && <div className="spinner-border text-c-green" role="status"><span className="sr-only">Loading...</span></div>}</h2>
                        <div className="bx-items">
                            {
                            (isValueSurahMounted && isTranslateMounted && isLatinMounted) && valueSurah.map((item,index) => (<ListAyyah key={index} item={item} translate={idnTranslate[index]} latin={latin[index]}/>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Surah.propTypes = {
    titleSurah: PropTypes.object.isRequired,
    valueSurah: PropTypes.array.isRequired,
    allSurah: PropTypes.array.isRequired,
    idnTranslate: PropTypes.array.isRequired,
};
  
Surah.defaultProps = {
    titleSurah: {},
    valueSurah: [],
    allSurah: [],
    idnTranslate: [
        {sura: 1, aya: 1, text: null}
    ],
    latin: [
        {sura: 1, aya: 1, text: null}  
    ]
};

const mapDispatchToProps = dispatch => ({
    updateAyyah: (noSurah,callback) => dispatch(getValueSurah(noSurah,callback)),
    updateSurah: (noSurah,callback) => dispatch(getTitleSurah(noSurah,callback)),
    updateAllSurah: (callback) => dispatch(getAllSurah(callback)),
    updateTranslate: (noSurah, callback) => dispatch(getIdnTranslate(noSurah, callback)),
    updateLatin: (noSurah, callback) => dispatch(getLatin(noSurah, callback)),
});

const mapStateToProps = state => {
    return {
        titleSurah: state.response.dataTitleSurah,
        allSurah: state.response.dataAllSurah.data,
        valueSurah: state.response.dataValueSurah.data,
        idnTranslate: state.response.dataIdnTranslate.data,
        latin: state.response.dataLatin.data,
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Surah));
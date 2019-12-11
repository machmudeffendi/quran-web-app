import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter  } from 'react-router-dom';

import ListAyyah from './listAyyah/ListAyyah';
import { getValueSurah, getTitleSurah, getAllSurah } from '../../services/redux/surah/action';

class Surah extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noSurah: 0,
            isLoadingTitle: false,
            isLoadingContent: false,
            redirect: false,
            redirectSurah: 0,
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
        this.props.updateSurah(nosurah, () => {
            this.setState({isLoadingTitle: false})
            // console.log(this.props.titleSurah);
        });
        this.props.updateAllSurah(() => {})
        document.title = "Surah "+nosurah+" - Quran web"
        window.scrollTo(0,0);
    }

    // componentWillUnmount(){
    //     this.props.valueSurah = [];
    //     this.props.titleSurah = {};
    // }

    surahRedirect(event){
        // this.props.valueSurah = [];
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
        this.props.updateSurah(id, () => {
            this.setState({isLoadingTitle: false})
        });

        document.title = "Surah "+id+" - Quran web"

        this.props.history.push("/surah/"+id)
    }

    render(){
        const { valueSurah, titleSurah, allSurah } = this.props;
        const { isLoadingTitle, isLoadingContent } = this.state;

        return(
            <div className="container text-center mb-5 content">

                <div className="row mt-3">
                    <div className="col-sm-2 text-left">
                        <Link to={'../'} className="link-back"><button className="btn btn-c-green">Kembali</button></Link>
                    </div>
                    <div className="col-sm-8">
                        <h2 className="title-surah">{titleSurah.arabic} - {titleSurah.nama} - {titleSurah.terjemah}</h2>
                        <h2>{isLoadingTitle  && <div className="spinner-border text-c-green" role="status"><span className="sr-only">Loading...</span></div>}</h2>
                    </div>
                    <div className="col-sm-2 text-right">
                        <span className="right-choice-surah">
                            <select className="form-control" onChange={this.surahRedirect}>
                                <option hidden>Pilih Surah</option>
                                {
                                allSurah.map === undefined 
                                    ? '' 
                                    : allSurah.map((item, index) => (<option key={index} value={item.id}>{item.nama}</option>))
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
                            valueSurah.map === undefined 
                                ? '' 
                                : valueSurah.map((item,index) => (<ListAyyah key={index} item={item}/>))
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
};
  
Surah.defaultProps = {
    titleSurah: {},
    valueSurah: [],
    allSurah: []
};

const mapDispatchToProps = dispatch => ({
    updateAyyah: (noSurah,callback) => dispatch(getValueSurah(noSurah,callback)),
    updateSurah: (noSurah,callback) => dispatch(getTitleSurah(noSurah,callback)),
    updateAllSurah: (callback) => dispatch(getAllSurah(callback))
});

const mapStateToProps = state => {
    return {
        titleSurah: state.response.dataTitleSurah,
        allSurah: state.response.dataAllSurah.data,
        valueSurah: state.response.dataValueSurah.data,
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Surah));
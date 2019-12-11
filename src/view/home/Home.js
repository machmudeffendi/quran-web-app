import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListSurah from './listSurah/ListSurah';
import { getAllSurah } from '../../services/redux/surah/action';

class Home extends React.Component {

    state = {
        isLoading: false
    }

    componentDidMount(){
        this.handleUpdateSurah()

        document.title = "Home - Quran web"
    }

    // componentWillUnmount(){
    //     this.props.currentSurah = [];
    // }

    handleUpdateSurah = () => {
        this.setState({isLoading: true})
        this.props.updateSurah(() => {
            this.setState({isLoading: false})
        })
    }

    render(){
        const { currentSurah } = this.props;
        const { isLoading } = this.state;
        return(
            <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Assalamuallaikum</h1>
                    <p className="lead">Selamat datang di Quran Web.</p>
                </div>
            </div>
            
            <div className="container mb-5 content">
                <div className="row">
                    <h2 className="text-center justify-content-center w-100">{isLoading && <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>}</h2>
                    {
                    currentSurah.map === undefined 
                        ? <span className="alert alert-danger w-100">Opps... Not found any data!</span> 
                        : currentSurah.map((item,index) => (<ListSurah key={index} item={item}/>))
                    }
                </div>
            </div>
            </React.Fragment>
        )
    }
}

Home.propTypes = {
    currentSurah: PropTypes.array.isRequired
};
  
Home.defaultProps = {
    currentSurah: [
        // {
        //     asma: 'asma',
        //     nama: 'Al-Fatihah',
        //     arti: 'Pembukaan',
        //     keterangan: 'Keterangan',
        //     audio: 'audio',
        //     nomor: 1
        // },{
        //     asma: 'asma',
        //     nama: 'Al-Baqarah',
        //     arti: 'Sapi Betina',
        //     keterangan: 'Keterangan',
        //     audio: 'audio',
        //     nomor: 2
        // },{
        //     asma: 'asma',
        //     nama: 'Ali\'Imran',
        //     arti: 'Keluarga Imran',
        //     keterangan: 'Keterangan',
        //     audio: 'audio',
        //     nomor: 3
        // },{
        //     asma: 'asma',
        //     nama: 'An-Nisa',
        //     arti: 'Wanita',
        //     keterangan: 'Keterangan',
        //     audio: 'audio',
        //     nomor: 4
        // },
    ]
};

const mapDispatchToProps = dispatch => ({
    updateSurah: (callback) => {
        dispatch(getAllSurah(callback))
    }
});

const mapStateToProps = state => {
    return {
        currentSurah: state.response.dataAllSurah.data
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
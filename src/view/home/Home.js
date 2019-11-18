import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNewSurah } from '../../services/redux/actionCreators'
import ListSurah from './listSurah/ListSurah';

class Home extends React.Component {
    static propTypes = {
        currentSurah: PropTypes.object.isRequired
    }

    state = {
        isLoading: false
    }

    componentDidMount(){
        this.handleUpdateSurah()
    }

    componentWillUnmount(){
        this.props.currentSurah.currentSurah = [];
    }

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
            <div className="search-body">
                <div className="search-box">
                <form>
                    <input type="text" className="bs-form-input" placeholder="Search.."/>
                </form>
                </div>
            </div>
            
            <div className="content">
                <div className="box box-center">
                    <h2>{isLoading && 'Loading ..'}</h2>
                    {currentSurah.currentSurah.map((item,index) => (
                        <ListSurah key={index} item={index} nomor={item.nomor} nama={item.nama} asma={item.asma}/>
                    ))}
                </div>
            </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateSurah: (callback) => {
        dispatch(fetchNewSurah(callback))
    }
});

const mapStateToProps = state => {
    return {
        currentSurah: state.currentSurah
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
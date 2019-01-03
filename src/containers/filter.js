import { connect } from 'react-redux';

import { setAlcohol, setBitterness, setColor, setName } from '../actions/filter';
import { fetchFilterBeers, fetchBeers } from '../actions/dashboard';

import Filter from '../components/filter';

const mapStateToProps = state => ({
    isFiltered: state.dashboard.get('isFiltered'),
    alcohol: state.filter.get('alcohol'),
    bitterness: state.filter.get('bitterness'),
    colorEbc: state.filter.get('color'),
    name: state.filter.get('name')
})

const mapDispatchToProps = dispatch => ({
    setAlcohol: (value) => dispatch(setAlcohol(value)),
    setBitterness: (value) => dispatch(setBitterness(value)),
    setColor: (value) => dispatch(setColor(value)),
    setSearchName: (value) => dispatch(setName(value)),
    fetchFilterBeers: (name, alcohol, bitterness, color) => dispatch(fetchFilterBeers(name, alcohol, bitterness, color)),
    fetchBeers: () => dispatch(fetchBeers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


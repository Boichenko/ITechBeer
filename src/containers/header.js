import { connect } from 'react-redux';

import { toggleVisibilitySidebar } from '../actions/sidebar';
import Header from '../components/header'


const mapDispatchToProps = {
    toggleVisibilitySidebar
}

export default connect(
    null,
    mapDispatchToProps
)(Header)

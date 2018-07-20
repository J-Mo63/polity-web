import { connect } from 'react-redux'
import NavBar from '../components/nav-bar/NavBar'

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(NavBar)
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps
)(NavBar)
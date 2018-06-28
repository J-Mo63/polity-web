import { connect } from 'react-redux'
import Home from "../components/Home";

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps
)(Home)
import { connect } from 'react-redux'
import Articles from '../components/articles/Articles'

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps
)(Articles)
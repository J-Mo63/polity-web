import { connect } from 'react-redux'
import Article from '../components/Article'

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps
)(Article)
import { connect } from 'react-redux'
import Article from '../components/article/Article'

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps
)(Article)
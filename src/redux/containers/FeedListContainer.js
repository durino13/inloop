import FeedList from '../../redux/';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        feeds: state.feeds
    }
};

const FeedListContainer = connect(
    mapStateToProps
)(FeedList)

export default FeedListContainer
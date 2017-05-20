import _ from 'lodash';
import React from 'react';
import FeedList from './FeedList';
import FeedDetail from './FeedDetail';
import AppToolbar from './AppToolbar';
import { connect } from 'react-redux';
import { feedsRequested, fetchFeeds }  from '../redux/actions/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const mapStateToProps = (state) => {
    return {
        selected_feed_id: state.selected_feed_id,
        feed: _.find(state.feeds, function(feed) { return feed._id === state.selected_feed_id }),
        loading_feeds: state.loading_feeds
    }
};

@connect(mapStateToProps)
class App extends React.Component {

    constructor(props) {
        super(props)
        const { dispatch } = this.props;
        dispatch(feedsRequested());
        dispatch(fetchFeeds());
        injectTapEventPlugin();
    }

    render() {

        const { feed } = this.props;
        const { selected_feed_id, loading_feeds } = this.props;

        // TODO Move those conditions into separate functions ..

        let selectedFeedComponent = null;
        let feedListComponent = null;

        // Do not render, until we have data prepared
        if (loading_feeds !== undefined && loading_feeds !== true) {
            feedListComponent =
                <FeedList />
        }

        // Do not render, until we have data prepared
        // TODO refactor this condition ..
        if ( loading_feeds !== undefined && loading_feeds !== true && selected_feed_id !== null) {
            selectedFeedComponent =
                <div>
                    <h1>Detail</h1>
                    <FeedDetail
                        feed={feed}
                    />
                </div>
        }

        return (

                <MuiThemeProvider>

                    <div>

                        <AppToolbar></AppToolbar>

                        <div className="container mt-20 mb-20">
                            <div className="row">

                                <div className="col-md-6">
                                    <h1>Zoznam feedov</h1>
                                    {feedListComponent}
                                </div>

                                <div className="col-md-6">
                                    <div style={{position: 'static'}}>
                                        {selectedFeedComponent}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </MuiThemeProvider>

        );
    }
}

export default App;
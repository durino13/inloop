import _ from 'lodash';
import React from 'react';
import AppToolbar from './AppToolbar';
import { connect } from 'react-redux';
import FeedList from './Feeds/FeedList';
import FeedDetail from './Feeds/FeedDetail';
import SnackbarPanel from './Snackbars/SnackbarPanel';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { feedsRequested, fetchFeeds, toggleSnackbar }  from '../redux/actions/actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const mapStateToProps = (state) => {
    return {
        selected_feed: state.selected_feed,
        feed: _.find(state.feeds, function(feed) {
            if (state.selected_feed) {
                return feed._id === state.selected_feed._id;
            } else {
                return false;
            }
        }),
        loading_feeds: state.loading_feeds,
        display_snackbar: state.display_snackbar,
        snackbar_message: state.snackbar_message ? state.snackbar_message : ''
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

        const {
            selected_feed,
            loading_feeds,
            display_snackbar,
            snackbar_message,
            dispatch
        } = this.props;

        // TODO Move those conditions into separate functions ..

        let feedDetail = null;
        let feedListComponent = null;

        // Do not render, until we have data prepared
        if (loading_feeds !== undefined && loading_feeds !== true) {
            feedListComponent =
                <FeedList />
        }

        // Do not render, until we have data prepared
        // TODO refactor this condition ..
        if ( loading_feeds !== undefined && loading_feeds !== true && selected_feed !== undefined && selected_feed !== null) {
            feedDetail =
                <div>
                    <h1>Detail</h1>
                    <FeedDetail
                        selected_feed={selected_feed}
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
                                        {feedDetail}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <SnackbarPanel
                            display_snackbar={display_snackbar}
                            snackbar_message={snackbar_message}
                        />

                    </div>

                </MuiThemeProvider>

        );
    }
}

export default App;
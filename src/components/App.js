import _ from 'lodash';
import React from 'react';
import AppToolbar from './AppToolbar';
import { connect } from 'react-redux';
import FeedList from './Feeds/FeedList';
import FeedDetail from './Feeds/FeedDetail';
import SnackbarPanel from './Snackbars/SnackbarPanel';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { feedsRequested, fetchFeeds }  from '../redux/actions/actions';


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
        loading_feed_detail: state.loading_feed_detail,
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

    /**
     * Function creates a list of feeds. Until loaded, loader component is displayed ..
     * @returns {XML}
     */
    createFeedListComponent() {

        const { loading_feeds } = this.props;

        const style = {
            container: {
                position: 'relative',
            },
            refresh: {
                display: 'inline-block',
                position: 'relative',
            },
        };

        // Do not render, until we have data prepared
        if (loading_feeds !== undefined && loading_feeds !== true) {
            return <FeedList />
        } else {
            return <RefreshIndicator
                size={40}
                left={40}
                top={30}
                status="loading"
                style={style.refresh}
            />
        }
    }

    /**
     * Function  builds the FeedDetail component. If not ready yet, it creates a loader
     * @returns {XML}
     */
    createFeedDetailComponent() {

        const {
            selected_feed,
            loading_feed_detail
        } = this.props;

        const style = {
            container: {
                position: 'relative',
            },
            refresh: {
                display: 'inline-block',
                position: 'relative',
            },
        };

        // Do not render, until we have data prepared
        if (loading_feed_detail !== undefined && loading_feed_detail === false) {
            return <div>
                    <h1>Detail</h1>
                    <FeedDetail
                        selected_feed={selected_feed}
                    />
                </div>
        } else {
            if (loading_feed_detail === true) {
                return <RefreshIndicator
                    size={40}
                    left={40}
                    top={30}
                    status="loading"
                    style={style.refresh}
                />
            }
        }

    }

    render() {

        let { display_snackbar, snackbar_message } = this.props;

        let feedListComponent = this.createFeedListComponent();
        let feedDetailComponent = this.createFeedDetailComponent();

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
                                    {feedDetailComponent}
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
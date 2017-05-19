import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar';
import FeedList from './FeedList';
import FeedDetail from './FeedDetail';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {

    return {
        selected_feed_id: state.selected_feed_id,
        feed: _.find(state.feeds, function(feed) { return feed.id === state.selected_feed_id })
    }
};

@connect(mapStateToProps)
class App extends React.Component {

    render() {

        const { feed } = this.props;
        const { selected_feed_id } = this.props;

        let selectedFeedComponent = null;

        if (selected_feed_id !== null) {
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
                                    <FeedList />
                                </div>

                                <div className="col-md-6">
                                    {selectedFeedComponent}
                                </div>

                            </div>
                        </div>

                    </div>

                </MuiThemeProvider>

        );
    }
}

export default App;
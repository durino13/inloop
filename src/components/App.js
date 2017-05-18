import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar';
import FeedList from './FeedList';
import FeedDetail from './FeedDetail';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        feed: state.feeds[0]
    }
};

@connect(mapStateToProps)
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { feed } = this.props;

        return (

                <MuiThemeProvider>

                    <div>

                        <AppToolbar></AppToolbar>

                        <div className="container">
                            <div className="row">

                                <div className="col-md-6">
                                    <h1>Zoznam feedov</h1>
                                    <FeedList />
                                </div>

                                <div className="col-md-6">
                                    <h1>Detail</h1>
                                    <FeedDetail feed={feed}></FeedDetail>
                                </div>

                            </div>
                        </div>

                    </div>

                </MuiThemeProvider>

        );
    }
}

export default App;
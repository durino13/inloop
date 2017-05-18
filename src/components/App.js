import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar';
import FeedList from './FeedList';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

                <MuiThemeProvider>

                    <div>

                        <AppToolbar></AppToolbar>

                        <div className="container">
                            <div className="row">
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <FeedList />
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>

                    </div>

                </MuiThemeProvider>

        );
    }
}

export default App;
import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { toggleSnackbar } from '../../redux/actions/actions';

@connect()
export default class SnackbarPanel extends React.Component {

    closeSnackbar = () => {
        this.props.dispatch(toggleSnackbar(false));
    }

    render() {

        let { snackbar_message, display_snackbar } = this.props;

        snackbar_message = snackbar_message ? snackbar_message : '';
        display_snackbar = display_snackbar ? display_snackbar : false;

        return (
            <Snackbar
                open={display_snackbar}
                message={snackbar_message}
                autoHideDuration={4000}
                onRequestClose={this.closeSnackbar.bind(this)}
            />
        );
    }
}
import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { showDeleteDialog, deleteComment, commentDeletionStarted } from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        delete_dialog_open: state.delete_dialog_open
    }
};

@connect(mapStateToProps)
export default class DeleteDialog extends React.Component {

    state = {
        open: false,
    };

    handleYes = () => {
        let { dispatch, feedId, commentId } = this.props;
        dispatch(commentDeletionStarted());
        dispatch(deleteComment(feedId, commentId)).then(() => {
            dispatch(showDeleteDialog(false));
        });
    };

    handleNo = () => {
        let { dispatch } = this.props;
        dispatch(showDeleteDialog(false));
    };

    render() {

        const actions = [
            <FlatButton
                label="Yes"
                primary={true}
                onTouchTap={this.handleYes}
            />,
            <FlatButton
                label="No"
                primary={true}
                onTouchTap={this.handleNo}
            />,
        ];

        const { delete_dialog_open } = this.props;

        let dialog = null;

        if (delete_dialog_open === true) {
            dialog = <Dialog
                title="Confirm deletion"
                actions={actions}
                modal={true}
                open={delete_dialog_open}
            >
                Do you really want to delete this comment?
            </Dialog>
        } else {
            dialog = <div></div>
        }

        return (
            <span>{dialog}</span>
        );
    }
}
import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state, ownProps) => {
    return {
        feeds: state.feeds
    }
};

@connect(mapStateToProps)
class CommentForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return<Paper>
            <div className="m-30">
                <TextField
                    hintText="First name"
                    floatingLabelText="First name"
                    fullWidth={true}
                /><br />
                <TextField
                    hintText="Last name"
                    floatingLabelText="Last name"
                    fullWidth={true}
                /><br />
                <TextField
                    hintText="Comment"
                    floatingLabelText="Comment"
                    fullWidth={true}
                /><br /><br /><br />
                <RaisedButton primary={true} label="Add comment" fullWidth={true} />
                <br /><br/>
            </div>
        </Paper>
    }

}

export default CommentForm;
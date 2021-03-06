import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { commentSent, submitComment, toggleSnackbar } from '../../redux/actions/actions';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const mapStateToProps = (state) => {
    return {
        selected_feed: state.selected_feed,
    }
};

@connect(mapStateToProps)
class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.clearForm();
    }

    clearForm = () => {
        this.state = {
            first_name: '',
            last_name: '',
            comment: ''
        };
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {

        let { dispatch, selected_feed } = this.props;

        let data = {
            'text': this.state.comment,
            'person': {
                'firstName': this.state.first_name,
                'lastName': this.state.last_name
            }
        };

        dispatch(commentSent());
        dispatch(submitComment(selected_feed._id, data)).then(() => {
            dispatch(toggleSnackbar(true, 'New comment has been added successfully.'));
        }).catch(() => {
            dispatch(toggleSnackbar(true, 'An error occured, while trying to add the comment. Try again later.'))
        });
        this.clearForm();

    }

    getButtonLabel() {

        let { comment_sending } = this.props;

        return !comment_sending ? 'Add comment' : 'Sending comment ...';

    }

    render() {
        return<Paper>
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <div className="m-30">
                    <TextValidator
                        floatingLabelText="First name"
                        onChange={this.handleChange}
                        name="first_name"
                        type="text"
                        validators={['required']}
                        errorMessages={['This field is required']}
                        fullWidth={true}
                        value={this.state.first_name}
                    />
                    <br />
                    <TextValidator
                        floatingLabelText="Last name"
                        onChange={this.handleChange}
                        name="last_name"
                        type="text"
                        validators={['required']}
                        errorMessages={['This field is required']}
                        fullWidth={true}
                        value={this.state.last_name}
                    />
                    <br />
                    <TextValidator
                        floatingLabelText="Comment"
                        onChange={this.handleChange}
                        name="comment"
                        type="textarea"
                        validators={['required']}
                        errorMessages={['This field is required']}
                        fullWidth={true}
                        value={this.state.comment}
                    />
                    <br /><br />
                    <RaisedButton primary={true} type="submit" label={this.getButtonLabel()} fullWidth={true} />
                    <br /><br/>
                </div>
            </ValidatorForm>
        </Paper>
    }

}

export default CommentForm;
import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const mapStateToProps = (state, ownProps) => {
    // return {
    //     feeds: state.feeds
    // }
};

// @connect(mapStateToProps)
class CommentForm extends React.Component {

    constructor(props) {
        super(props);
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
        console.log(this.state)
    }

    handleSubmit = () => {
        return true;
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
                    <RaisedButton primary={true} type="submit" label="Add comment" fullWidth={true} />
                    <br /><br/>
                </div>
            </ValidatorForm>
        </Paper>
    }

}

export default CommentForm;
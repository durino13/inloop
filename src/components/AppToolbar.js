import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class AppToolbar extends React.Component {

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
        <AppBar
            title="Inloop presentation by @durino13"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        );
    }
}
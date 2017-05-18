import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {

        const { feed } = this.props;

        return (
            <Card className="mt-40">
                <CardHeader
                    title={feed.person.firstName+" "+feed.person.lastName}
                    subtitle={feed.date}
                    avatar="https://placeimg.com/40/40/people/1"
                >
                    <FlatButton label="Otvoriť" primary={true} />
                </CardHeader>
                <CardText>
                    {feed.text}
                </CardText>
            </Card>
        );
    }

}

export default Feed;
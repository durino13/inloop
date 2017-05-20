import React from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        feeds: state.feeds
    }
};

@connect(mapStateToProps)
class FeedList extends React.Component {

    constructor(props) {
        super(props);
        this.feeds = this.props.feeds;
    }

    render() {
        return<div>
            {
                this.feeds.map(function(feed, index) {
                    return <Feed key={index} feed={feed}></Feed>
                })
            }
        </div>
    }

}

export default FeedList;
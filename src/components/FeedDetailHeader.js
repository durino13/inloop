import React from 'react';
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge';

class FeedDetailHeader extends React.Component {

    render() {

        const { feed } = this.props;

        return (
            <div className="flex-center pt-40 pb-40">
                <Avatar size={120} className="flex-center" src={feed.person.avatar} />
                <h1>{feed.person.firstName+" "+feed.person.lastName}</h1>
                <h2>{feed.person.username}</h2>
                <div>
                    <Badge
                        className="mt-10"
                        badgeContent={feed.likesCount}
                        secondary={true}
                        badgeStyle={{top: 0, right: 0}}
                    >
                        Likes
                    </Badge>
                    <Badge
                        className="mt-10"
                        badgeContent={feed.commentsCount}
                        secondary={true}
                        badgeStyle={{top: 0, right: 0}}
                    >
                        Comments
                    </Badge>
                </div>
            </div>
        );

    }

}

export default FeedDetailHeader;
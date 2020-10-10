import React, { Component } from 'react';
import moment from 'moment';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class IssuesDetails extends Component {
    emptyDetails = () => {
        return <Segment>Please click on any issue to see details</Segment>
    }

    showIssueDetails = () => {
        const { state, title, body, updated_at, user, repository_url } = this.props.details;
        return (
            <React.Fragment>
                <h3 className={state !== "open" ? "color-green" : "color-red"}>
                    <Image size="mini" avatar src={user.avatar_url} /> [{state}]: {title}
                </h3>
                <Link target="_blank" to={repository_url}>
                    Visit Github 
                    <i aria-hidden="true" className="external icon"></i>
                </Link>
                <p>{moment(updated_at).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>{body}</p>
            </React.Fragment>
        )

    }

    render() {
        const { state } = this.props.details;
        return (
            <React.Fragment>
                {state ? this.showIssueDetails() : this.emptyDetails()}
            </React.Fragment>
        );
    }
};

export default IssuesDetails;

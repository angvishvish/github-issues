import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetGithubIssues } from '../actions';
import BugBatch from './common/BugBatch';
import { Dropdown, Segment, Grid, List } from 'semantic-ui-react';
import IssuesDetails from './IssueDetails';
import moment from 'moment';


const stateOptions = ['all', 'open', 'closed'].map(state => ({
    key: state,
    text: state.charAt().toUpperCase() + state.slice(1),
    value: state
}))

class IssuesList extends Component {
    state = {
        details: {}
    }

    componentDidMount = () => {
        this.props.GetGithubIssues(this.state.currentState);
    }

    updateState = (e, data) => {
        this.props.GetGithubIssues(data.value);
    }

    showBugBatch = (issuesCount) => {
        return (
            <BugBatch issuesCount={issuesCount} />
        )
    }

    showError = () => {
        const { github } = this.props;
        return <Segment>{github.error ? github.error : ''}</Segment>
    }

    showIssues = () => {
        return this.props.github.issues.map(issue => {
            return (
                <List.Item key={issue.id}>
                    <List.Icon name='envelope open outline'
                        className={issue.state !== "open" ? "color-green" : "color-red"}
                        size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header
                            as='a'
                            className={issue.state !== "open" ? "color-green" : "color-red"}
                            onClick={() => this.setState({ details: issue })}>
                            {issue.title}
                        </List.Header>
                        <List.Description>
                            <span>#{issue.number}, </span>
                            <span>Opened: {moment(issue.created_at).startOf('day').fromNow()}, </span>
                            <span>
                                By: <a href={issue.user.html_url} target="_blank" rel="noopener noreferrer">
                                    {issue.user.login}
                                </a>
                            </span>
                            
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        });

    }

    render() {
        const { github } = this.props;
        return (
            <React.Fragment>
                {this.showBugBatch(github.issues.length)}
                State:
                <Dropdown
                    onChange={this.updateState}
                    defaultValue="all"
                    inline
                    options={stateOptions} />
                <br />
                <br />
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Segment>
                                <List divided relaxed celled>
                                    {github.issues.length ? this.showIssues() : this.showError()}
                                </List>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <IssuesDetails details={this.state.details} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        github: state.github
    }
}

export default connect(mapStateToProps, { GetGithubIssues })(IssuesList);


import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

class BugBatch extends Component {

    render() {
        return (
            <React.Fragment>
                <Button as='div' labelPosition='right'>
                    <Button color='red'>
                        <Icon name='bug' />
                            All issues
                        </Button>
                    <Label as='a' basic color='red' pointing='left'>
                        {this.props.issuesCount}
                    </Label>
                </Button>
            </React.Fragment>
        );
    }
};


export default BugBatch;

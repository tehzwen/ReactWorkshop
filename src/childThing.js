import React, { Component } from 'react';
import { Button, Input, Grid } from 'semantic-ui-react';

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <h4>{this.props.name}</h4>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>

                        <img src={this.props.avatarURL} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}
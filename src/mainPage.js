import React, { Component } from 'react';
import { Button, Input, Grid } from 'semantic-ui-react';
import UserInfo from './childThing';
import Question from './question';

export default class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            userName: ""
        };
    }

    componentWillMount() {
        fetch("https://api.github.com/users/tehzwen")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    userData: data,

                });
            })
            .catch((err) => {
                console.error(err);
            })

        fetch("https://opentdb.com/api.php?amount=10")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data.results);
                this.setState({
                    questionData: data.results,
                    loaded: true
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    renderQuestions() {
        let totalArr = [];

        this.state.questionData.map((question) => {
            totalArr.push(
                <Question
                    questionText={question.question}
                    answers={[...question.incorrect_answers, question.correct_answer]}
                    correctAnswer={question.correct_answer} />
            )
        })

        return totalArr;
    }

    componentDidMount() {

    }

    render() {
        if (this.state.userData && this.state.questionData) {
            return (
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            <h1>{this.props.title}</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <UserInfo avatarURL={this.state.userData.avatar_url} name={this.state.userData.name} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderQuestions()}
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            )
        } else {
            return (
                <Grid textAlign="center">
                    <Grid.Row>
                        <Grid.Column>
                            Loading...
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        }
    }
}
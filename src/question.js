import React, { Component } from 'react';
import { Button, Input, Grid } from 'semantic-ui-react';

export default class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        console.warn(this.props.answers)
        this.setState({
            answers: this.props.answers,
            correctAnswer: this.props.correctAnswer
        })
    }

    renderAnswers() {
        let totalArray = [];
        this.state.answers.map((answer) => {
            totalArray.push(<Button onClick={() => {
                if (answer === this.state.correctAnswer) {
                    this.setState({
                        userAnswer: "Correct!"
                    })
                } else {
                    this.setState({
                        userAnswer: "Incorrect!"
                    })
                }
            }} >{answer}</Button>)
        })

        return totalArray;
    }

    render() {
        if (this.state.answers && !this.state.userAnswer) {
            return (
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <h5>{this.props.questionText}</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {this.renderAnswers()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        } else if (this.state.answers && this.state.userAnswer) {
            return (
                <div>
                    {this.state.userAnswer}
                </div>
            )
        }   else {
            return (
                <div>
                    loading..
                </div>
            )
        }


    }
}
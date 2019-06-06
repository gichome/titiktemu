import React from "react";
import firebase from '../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './registerlogin.css';

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
  };

  dispalyErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleUserInput = input => {
    this.setState({ [input.target.name]: input.target.value });
  };

  formisValid = ({ email, password }) => email && password;

  handleSubmit = input => {
    input.preventDefault();
    if (this.formisValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signInUser => {
          console.log(signInUser);
        })
        .catch(err => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        })
    }
  };

    handleInputError = (errors, inputName) => {
        return errors.some(error =>
            error.message.toLowerCase().includes(inputName)
        )
            ? 'error'
            : '';
    };

    render() {
        const { email, password, errors, loading } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="registerlogin">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet" />
                        Login to titiktemu
                    </Header>

                    {/* Form for Login */}
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input
                                fluid
                                name="email"
                                value={email}
                                icon="mail"
                                iconPosition="left"
                                placeholder="Email Address"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'email')}
                                type="email"
                            />

                            <Form.Input
                                fluid
                                name="password"
                                value={password}
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                onChange={this.handleUserInput}
                                className={this.handleInputError(errors, 'password')}
                                type="password"
                            />

                            <Button
                                disabled={loading}
                                className={loading ? 'loading' : ''}
                                color="violet"
                                fluid
                                size="medium">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.dispalyErrors(errors)}
                        </Message>
                    )}
                    <Message>
                        Don't have an account? <Link to="/register">Join here!</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;
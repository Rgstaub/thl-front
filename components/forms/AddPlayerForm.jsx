import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Text, Button } from './';

const CREATE_PLAYER_MUTATION = gql`
  mutation CREATE_PLAYER_MUTATION(
    $name: String!,
    $email: String!
  ) {
    createPlayer()
  }
`;

class CreatePlayerForm extends Component {
  state = {
    name: '',
    email: ''
  };

  handleSubmit = e => {
    console.log(e);
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <Text
          placeholder="Your name in THL"
          label="Player Name"
          disabled={false}
          id="nameInput"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Text
          placeholder="email address"
          label="Email Address"
          disabled={false}
          id="emailInput"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Button text="Submit" />
      </form>
    );
  }
}

export default CreatePlayerForm;
export { CREATE_PLAYER_MUTATION };

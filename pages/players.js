import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_PLAYERS_QUERY = gql`
  query ALL_PLAYERS_QUERY {
    users {
      name
      email
    }
  }
`;

const PlayerCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 15px;
  max-width: 200px;
`;

class Players extends Component {
  render() {
    return (
      <div>
        <p>Players</p>
        <Query query={ALL_PLAYERS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.users.map(user => (
                  <PlayerCard>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                  </PlayerCard>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default Players;
export { ALL_PLAYERS_QUERY };

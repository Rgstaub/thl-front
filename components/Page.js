import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header.js';
import Meta from '../components/Meta.js';


const theme = {
  maxWidth: '1200px',

}

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

class Page extends Component {
  state = {  }

  render() { 
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </div>
      </ThemeProvider>

    );
  }
}
 
export default Page;
import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header.js';
import Meta from '../components/Meta.js';



const theme = {
  maxWidth: '1200px',
  fontFamily:  '\'Encode Sans Condensed\', sans-serif',
  brightBlue: '#14d0ff'
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:200,400,700');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0px;
    margin: 0px;
    font-size: 1.5rem;
    line-height: 2;
    font-family: ${theme.fontFamily};
  }
`

const StyledPage = styled.div`
  h1 {
    font-weight: 200;
  }
`

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
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
 
export default Page;
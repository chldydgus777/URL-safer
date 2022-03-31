import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import Search from './components/search';
import UrlList from './components/urlList';

function App() {
  return (
    <div>
      <Wrap>
        <Search/>
        <UrlList/>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
width: 1040px;
margin: 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
`;

export default App;

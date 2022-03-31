import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import Search from './components/search';
import UrlList from './components/urlList';
import BtnList from './components/btnList';
function App() {
  return (
    <div>
      <Wrap>
        <Search/>

        <Routes>
        <Route path="/" element={<UrlList/>}/>
        </Routes>

        <BtnList/>
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

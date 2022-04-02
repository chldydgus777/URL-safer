import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';

import UrlList from './components/urlList';
import BtnList from './components/btnList';
import Mypage from './page/mypage';
import Modal from './components/modal';

function App() {
  return (
    <div>
      <Wrap>

        <Routes>
        <Route path="/" element={<UrlList/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        </Routes>

        <BtnList/>
        <Modal/>
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

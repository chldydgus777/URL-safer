import React from 'react';
import styled from 'styled-components';

const btnList = () => {
    return(
        <> 
        <Button>
            <Btn>추가</Btn>
            <Btn>홈</Btn>
            <Btn>마이페이지</Btn>
        </Button>
        </>
    );
};

const Button = styled.div`
margin: 15px auto;
width: 800px;
display: flex;
justify-content: space-between;
`;

const Btn = styled.button`
width: 200px;
height: 50px;
display: inline-flex;
outline: none;
border: none;
border-radius: 4px;
color: white;
font-weight: bold;
cursor: pointer;
font-size: 1rem;

background: #228be6;
&:hover {
  background: #339af0;
}
&:active {
  background: #1c7ed6;
}
`;

export default btnList;
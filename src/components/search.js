import React from 'react';
import styled from 'styled-components';

const search = () => {
    return(
        <>
            <Input type="text" placeholder="URL 주소를 입력해 주세요."></Input>
        </>
    );
};

const Input = styled.input`
width: 800px;
height: 80px;
border-radius: .5rem;
border: 1px solid #339af0;
margin: 30px auto 15px;
padding: 10px;
font-size: 24px;
`;

export default search
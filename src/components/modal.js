import React from 'react';
import styled from 'styled-components';

const modal = () => {
    return(
        <>
        <ModalWrap>
            <ModalInner placeholder="URL 주소를 입력해 주세요"/>
            <BtnWrap>
            <ModalBtn>추가</ModalBtn>
            <ModalBtn>취소</ModalBtn>
            </BtnWrap>
        </ModalWrap>
        </>
    );
};

const ModalWrap = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 50%;
left: 50%;
background-color: #eee;
`;

const ModalInner = styled.input`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 20px;
border-radius: .5rem;
border: 1px solid #339af0;
margin: 30px;
padding: 10px;
font-size: 18px;
`;

const ModalBtn = styled.button`
width: 150px;
height:100%;
display:inline-block;
text-align:center;
align-items: center;
vertical-align:middle;
border: 1px solid #eee;
cursor: pointer;
background: #228be6;
&:hover {
  background: #339af0;
}
&:active {
  background: #1c7ed6;
}
`;

const BtnWrap = styled.div`
display: flex;
margin: 0 30px 15px;
justify-content: space-between;
`;
export default modal;

import React from 'react';
import styled from 'styled-components';

const mypage = () => {
    const fol = [
        {
            title: '폴더'
        }
]
    const fold = fol.map((f, idx) => {return <FolderItem key={idx}>{f.title}</FolderItem>})
    return(
        <>
            <Wrap>
                <Profile>
                    프로필 이미지
                </Profile>
                <Folder>
                        {fold}
                </Folder>
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
width: 1040px;
margin: 0px auto;
display: flex;
`;

const Profile = styled.div`
width: 300px;
min-height: 400px;
background-color: #eee;
margin-top: 15px;
`;
const Folder = styled.div`
width: 100%;
height: 100%;
padding: 20px;
display: grid;
grid-template-columns: 100px 100px 100px;
grid-template-columns: 1fr 1fr 1fr;
`;
const FolderItem = styled.div`
width: 50px;
height: 50px;
background-color: #F7C703;
`;
export default mypage;
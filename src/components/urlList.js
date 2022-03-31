import { useEffect, useState }  from 'react';
import styled from 'styled-components';

const urlList = () => {
    // const [content, setContent] = useState([]);
    const list = [
        {preview: 'www.naver.com', pagename: '네이버', update: '편집', delete: '제거' },
        {preview: 'www.naver.com', pagename: '네이버', update: '편집', delete: '제거' },
        {preview: 'www.naver.com', pagename: '네이버', update: '편집', delete: '제거' },
    ];
    const map = list.map((listing,key) => {
        return(
            listing
        )
    })
    return(
        <>
            <Wrap>
                {list.map(element => <List Preview={element.preview} />)}
                <List >
                    <Preview src="https://en.pimg.jp/050/595/319/1/50595319.jpg" /> 
                    <PageName>
                        네이버 
                    </PageName>
                    <Update>
                        편집
                    </Update>
                    <Delete>
                        삭제
                    </Delete>
                </List>
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
background-color: #eee;
border : 3px solid blue;
justify-content: space-between;
`;

const List = styled.div`
display: flex;
margin: 10px 0
`;
const Preview = styled.img`
width: 180px;
height: 80px;
background-color: green;
margin : 0 10px;
`;
const PageName = styled.div`
background-color: blue;
min-width: 500px;
`;
const Update = styled.button`
margin: 0 10px;
width: 150px;
height: 80px;
`;
const Delete = styled.button`
width: 150px;
height: 80px;
`;

export default urlList;
import { useEffect, useState }  from 'react';
import styled from 'styled-components';

const urlList = () => {
    // const [content, setContent] = useState([]);
    const list = [
        {
            preview: 'https://en.pimg.jp/050/595/319/1/50595319.jpg',
            pagename: '네이버',
            update: '편집',
            delete: '제거' 
        },
        {
            preview: 'https://en.pimg.jp/050/595/319/1/50595319.jpg',
            pagename: '다음',
            update: '편집',
            delete: '제거' 
        },
    ];
    const urlItem = list.map((i, idx) => {
        return(
            <List key={idx}>
                    <Preview src={i.preview}/> 
                    <PageName>
                        {i.pagename} 
                    </PageName>
                    <Update>
                        {i.update}
                    </Update>
                    <Delete>
                        {i.delete}
                    </Delete>
            </List>
            )
    })
    return(
        <>
            <Wrap>
                {urlItem}
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
background-color: #eee;
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
background-color: #aaa;
align-items: center;
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
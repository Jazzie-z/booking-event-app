import React from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
const Container = styled.div`
background: #3b3b3b; 
height:70px;
padding: 10px;
display:flex;
align-items:center;
justify-content:center;
`;
const Input = styled.input`
 width:100%;
 height:30px;
 border-radius:20px;
 :focus{
     outline:none;
 }
`
const Search = () => {
    const dispatch = useDispatch()
    return (
        <Container>
            <Input placeholder={'SEARCH EVENTS'} onChange={(e)=>{
                dispatch({ type: 'SEARCH_ITEMS', payload: e.target.value })
            }}/>
        </Container>
    )
}

export default Search;

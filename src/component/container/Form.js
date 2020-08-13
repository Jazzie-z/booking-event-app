import React, { useState } from 'react'
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
import { BOOKING } from '../../actions';
const FormContainer = styled.form`
display:flex;
flex-direction:column;
width: 200px;
`
const InputContainer = styled.div` 
display:flex;
align-items:center;
`
const Input = styled.input`
margin: 5px 10px;
`
const Select = styled.select`
margin: 5px 10px;
`
const ButtonContainer = styled.div`
display:flex;
justify-content: space-evenly;
margin-top:10px;
`
const Button = styled.div`
background:orange;
width:fit-content;
padding: 5px;
border-radius:5px;
color:white;
cursor:pointer;
`
const Error = styled.div`
color:red;
font-size:12px;
`
const pattern = {
    name: /^[A-Za-z_ ]+$/,
    email: /\S+@\S+\.\S+/,
}
const Form = () => {
    const [data, setData] = useState({
        name: '', email: '', seats: 0
    })
    const [error, setError] = useState({
        name: '', email: '', seats: ''
    })
    const dispatch = useDispatch()
    const onChangeHandler = (e, key) => {
        let value = e.target.value
        setData(prevState => ({ ...prevState, [key]: value }))
    }
    const onSubmit = () => {
        let errorPresent = false
        Object.keys(data).forEach(key => {            
            if(!data[key]){
                setError(prevState => ({...prevState, [key]: `Value required`}))
                errorPresent=true
            }else if (pattern[key] && !data[key].match(pattern[key])) {
                setError(prevState => ({...prevState, [key]: `Not valid ${key}`}))
                errorPresent=true
            }else{
                setError(prevState => ({...prevState, [key]: ''}))
            }
        })
        if (!errorPresent) {
            dispatch({ type: BOOKING, payload: data })
        }
    }
    const onCancel = () => {

    }
    return (
        <FormContainer>
            <InputContainer>
                <label>Name</label>
                <Input onChange={(e) => onChangeHandler(e, 'name')} />                
            </InputContainer>
            <Error>{error.name}</Error>
            <InputContainer>
                <label>Email</label>
                <Input onChange={(e) => onChangeHandler(e, 'email')} />                
            </InputContainer>
            <Error>{error.email}</Error>
            <InputContainer>
                <label>Number of seats</label>
                <Select placeholder="Names of other attendees"  onChange={(e) => onChangeHandler(e, 'seats')}>
                    {[...new Array(6)].map((e, i) => <option>{i}</option>)}
                </Select>                
            </InputContainer>
            <Error>{error.seats}</Error>
            <ButtonContainer>
                <Button onClick={onSubmit}>Submit</Button>
                <Button onClick={onCancel}>Cancel</Button>
            </ButtonContainer>
        </FormContainer>
    )
}

export default Form;

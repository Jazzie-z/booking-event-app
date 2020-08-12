import React, { useState } from 'react'
import styled from 'styled-components';
const FormContainer = styled.form`
display:flex;
flex-direction:column;
width: 200px;
`
const Input = styled.input`
margin: 5px;
`
const ButtonContainer = styled.div`
display:flex;
justify-content: space-evenly;
`
const Button = styled.div`
background:orange;
width:fit-content;
padding: 5px;
border-radius:5px;
color:white;
cursor:pointer;
`
const Form = () => {
    const pattern = {
        name: /^[A-Za-z_ ]+$/,
        email: /\S+@\S+\.\S+/,
    }
    const [data, setData] = useState({
        name: '', email: '', seats: 0
    })
    const onChangeHandler = (e, key) => {
        let value = e.target.value
        if (pattern[key] ? value.match(pattern[key]) : value) {
            console.error(value)
            setData(prevState => ({ ...prevState, [key]: value }))
        } else {

        }
    }
    return (
        <FormContainer>
            <Input placeholder="Name" onChange={(e) => onChangeHandler(e, 'name')} />
            <Input placeholder="Email" onChange={(e) => onChangeHandler(e, 'email')} />
            <Input placeholder="Number of seats" onChange={(e) => onChangeHandler(e)} />
            <Input placeholder="Names of other attendees" />
            <ButtonContainer>
                <Button onClick={() => {

                }}>Submit</Button>
                <Button>Cancel</Button>
            </ButtonContainer>
        </FormContainer>
    )
}

export default Form;

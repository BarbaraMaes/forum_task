import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export default function FormElement(props) {
    return (
        <InputContainer>
            <Label htmlFor={props.var}>{props.var}</Label>
            {props.type === "text" || props.type ==="password" ? <Input {...props} type={props.type} name={props.var} /> : null}
            {props.type === "select" && 
            <Select name={props.name} id={props.var} {...props}>
            {props.values && props.values.map(item => <Option key={item.id} value={item.id}>{item.title}</Option>)}
            </Select>}
            {props.type === "textarea" && <Textarea {...props}></Textarea>}
            {props.error && <Span>{props.error}</Span>}   
        </InputContainer>
    )
}
const Textarea = styled.textarea`
    grid-column: 2;
    border: 1px groove ${Colors.grey};
    background: none; 
    color: ${Colors.white}; 
    font-size: 1rem;
`

const Select = styled.select`
    grid-column: 2; 
    background-color: transparent ; 
    color: ${Colors.white}; 
    border: none;
    border-bottom: 1px groove ${Colors.grey};
`
const Option = styled.option`
    background: rgba(${Colors.dark_rgb}, 0.9);
    padding: 1rem 2rem;
`

const Span = styled.span`
    color: ${Colors.red};  
    grid-column: 1/ span 2; 
`

const Label = styled.label`
    font-size: 1.3rem; 
    font-weight: bold; 
    grid-column: 1; 
`

const Input = styled.input`
    grid-column: 2;
    height: fit-content; 
    width: 100%; 
    border: none;
    border-bottom: 1px groove ${Colors.grey};
    background: none; 
    color: ${Colors.white}; 
    text-align: center; 
    font-size: 1.2rem;

    &:focus {
        outline: none; 
    }
}

`
const InputContainer = styled.div`
    margin: 1rem; 
    padding: 1rem; 
    display: grid; 
    grip-template-columns: 25% 75%;
`
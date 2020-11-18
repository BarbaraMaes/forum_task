import React from 'react';
import styled from 'styled-components';
import Colors from '../constants/colors';

export default function FormElement(props) {
    return (
        <InputContainer>
            <Label htmlFor={props.var}>{props.name}</Label>
            {props.type !== "select" ? 
            <Input type={props.type} name={props.var} /> : 
            <Select name={props.name} id={props.var}>
            {props.values && props.values.results.map(country => <Option key={country.id} value={country.id}>{country.title}</Option>)}
            </Select>
            }
            {props.error && <Span>{props.error.message}</Span>}   
        </InputContainer>
    )
}
const Select = styled.select`
    grid-column: 2; 
    background: none; 
    color: ${Colors.white}; 
    border: none;
    border-bottom: 1px groove ${Colors.grey};
`
const Option = styled.option`
    background: ${Colors.dark}; 
    border: 1px solid transparent;
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
    height: 75%; 
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

`
const InputContainer = styled.div`
    margin: 1rem; 
    padding: 1rem; 
    display: grid; 
    grip-template-columns: 25% 75%;
`
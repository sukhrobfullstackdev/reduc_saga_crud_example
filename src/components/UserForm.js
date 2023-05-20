import React, {useState} from 'react';
import {Button, Container, Input} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addUserSlice, editUserSlice} from "../redux/slices/users";
import {nanoid} from "@reduxjs/toolkit";
import {CREATE_USER, UPDATE_USER_BY_ID} from "../redux/types";

const UserForm = () => {
    const user = useSelector(state => state.user);
    const [id,setId] = useState(user.id);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const d = useDispatch();
    const changeName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        if (name.trim().length >= 3 && email.trim().length >= 8 && password.trim().length >= 8 && id === '') {
            d({type: CREATE_USER,user: {id: nanoid(8), name, email, password}});
            setName('');
            setEmail('');
            setPassword('');
        }
        if (name.trim().length >= 3 && email.trim().length >= 8 && password.trim().length >= 8 && id.trim() !== '') d({type: UPDATE_USER_BY_ID,user: {id, name, email, password}});
    }
    return (
        <Container>
            <Input value={id} fullWidth disabled/>
            <Input style={{marginTop: 20}} onChange={changeName} placeholder={"Please enter your name!"} value={name}
                   fullWidth/>
            <Input style={{marginTop: 20}} onChange={changeEmail} placeholder={"Please enter your email!"} value={email}
                   fullWidth/>
            <Input style={{marginTop: 20}} onChange={changePassword} placeholder={"Please enter your password!"}
                   value={password} fullWidth/>
            <Button onClick={() => handleSubmit()} fullWidth variant="outlined" style={{marginTop: 20}}>Submit</Button>
        </Container>
    );
};

export default UserForm;
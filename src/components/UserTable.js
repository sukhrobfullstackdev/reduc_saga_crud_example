import React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {setUserSlice} from "../redux/slices/user";
import {deleteUserSlice} from "../redux/slices/users";
import {CREATE_USER, DELETE_USER_BY_ID, GET_USERS} from "../redux/types";
import {nanoid} from "@reduxjs/toolkit";

const UserTable = () => {
    const users = useSelector(state => state.users);
    const d = useDispatch();
    const editUser = (id, user) => {
        d(setUserSlice(user));
    }
    const deleteUser = (id) => {
        d({type: DELETE_USER_BY_ID, id});
    }
    useEffect(() => {
        d({type: GET_USERS})

    }, []);
    return (
        <TableContainer component={Paper}>
            <Button variant="outlined" style={{margin: 10}}>Add User</Button>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{users.map((user) => (
                    <TableRow
                        key={user.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            {user.id}
                        </TableCell>
                        <TableCell align="right">{user.name}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.password}</TableCell>
                        <TableCell align="center">
                            <Button onClick={() => editUser(user.id, user)} variant="outlined" color="success"
                                    style={{margin: 5}}>Edit</Button>
                            <Button onClick={() => deleteUser(user.id)} variant="outlined" color="error"
                                    style={{margin: 5}}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
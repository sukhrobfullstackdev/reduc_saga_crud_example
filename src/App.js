import React from 'react';
import UserTable from "./components/UserTable";
import Grid from "@mui/material/Grid";
import UserForm from "./components/UserForm";

const App = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}><UserForm/></Grid>
            <Grid item xs={12} md={8} lg={8}><UserTable/></Grid>
        </Grid>
    );
};

export default App;
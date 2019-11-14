import React, {useContext } from 'react';
import {Paper, TextField} from '@material-ui/core'
import { Context } from "./ContextProvider";

const SearchBar = () => {
    const { handleSubmit , searchTerm, setSearchTerm} = useContext(Context);

    const onFormSubmit = (e) => {
        handleSubmit(searchTerm);
        e.preventDefault();
    }
    const handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.value) setSearchTerm(e.target.value);
 
    }
    return(
        <Paper elevation={6} style={{padding:'25px'}}>
            <form  onSubmit={onFormSubmit}>
                <TextField fullWidth label='Search...' onChange={handleChange}/>
            </form>
        </Paper>
    )
}
export default SearchBar;
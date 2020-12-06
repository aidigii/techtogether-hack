import React, { useState } from "react";
import Track from '../components/track'; 
import data from '../color-data';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Share(){
    const classes = useStyles();
    const [search, set_search] = useState("")

    function handleChange(e){
        set_search(e.target.value)
    }
    function test(){
        console.log(search)
    }

    return(
        <Container>
               <form className={classes.form} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Hello" variant="outlined" onChange={(e) => handleChange(e)}/>
                </form>
                <Button variant="contained">Search</Button>
                {test()}
            <Track title = "save me" artist = "bts" image = "https://images.shazam.com/coverart/t418737097-i1384387086_s400.jpg">
            </Track>
        </Container>
    )

}
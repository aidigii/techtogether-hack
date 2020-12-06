import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Track from '../components/track';
import data from '../color-data';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Library(){
    const classes = useStyles();
    const [mood_state, set_mood] = useState(0)
    const [arr, set_arr] = useState([])


    function handleChange(num){
        set_mood(num)
        set_arr(data[num])

    }

    return(
     
        <Container className={classes.root}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Mood</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        >
        <MenuItem onClick={() => set_mood(0)}>Happy</MenuItem>
        <MenuItem onClick={() => set_mood(1)}>Energetic</MenuItem>

        </Select>
        </FormControl>

        {data[mood_state].map((element) => <Track title={element.title} artist = {element.artist} image={element.image} />)}
        </Container>
      
    )

}

// 
import React, { useState } from "react";
import Track from '../components/track'; 
import data from '../color-data';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function Find(){
    const [number, set_number] = useState(0)
    const [mood_state, set_mood] = useState(0)
    const [arr, set_arr] = useState([])


    function handleChange(num){
        set_mood(num)
        set_arr(data[num])

    }
    const array = data[1]

    function move_right(){
        if (number < array.length-1){
            set_number(number + 1)
        }
    }

    function move_left(){
        if (number > 0){
            set_number(number - 1)
        }
        
    }

    return(

        <Container>
            <Typography> I want to feel: </Typography>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Mood</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                >
                <MenuItem onClick={() => set_mood(0)}>Happy</MenuItem>
                <MenuItem onClick={() => set_mood(1)}>Energetic</MenuItem>

                </Select>
        </FormControl>
            <Track title = {array[number].title} artist = {array[number].artist} image = {array[number].image}>
            </Track>
            <Button onClick={() => move_left()}> Previous </Button>
            <Button onClick={() => move_right()}> Next </Button>
        </Container>
    )

}
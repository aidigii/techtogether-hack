//imports the firebase database object we can use
const db = require('./firebase-config')

//imports express so you can use it
const express = require('express')

//use this variable to use express
const app = express()
const cors = require('cors')

//imports axios
const axios = require('axios')

app.use(cors())
app.use(express.static('build'))
//eases use of json
app.use(express.json())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// END POINTS
// app.get('/example', (request, response) => {

//   const title = request.body.title //"kiss the rain"


//   try{

//     //chaining

//     axios.get('https://shazam.p.rapidapi.com/search', {
//       params: {
//         'term': title,
//         'limit': 1,
//       },
//       headers: {
//         'x-rapidapi-key' : '6687921d10msh8ecacb0330016bep1c9c74jsnbdbe105272ca',
//         'x-rapidapi-host' : 'shazam.p.rapidapi.com',
//         'useQueryString' : true, 
//       }
//     })
//     .then(function (res) {
//       //response.json(response.data.tracks.hits);

//       const send_data = {
//         "title": res.data.tracks.hits[0].track.title,
//       }
//       response.json(send_data)
//     })
    
//   }catch(error){
//     console.log(error)
//   }

//   //response.json(title)

// })


// app.get('/get_songs', async (request, response) => {

//   //front end will send you the string "happy"
//   const mood = request.body // user input

//   /**
//    * request.body is going to be 
//    * {
//    *  "mood": "happy"
//    * }
//    * 
//    * "happy" <--
//    */

//   try{

//     //put code here
//       const cityRef = db.collection('moods').doc();
//       const doc = await cityRef.get();
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//       }

//   }catch(error){
//     console.log(error)
//   }

//   response.send(`<h1>completed</h1>`)

// })




const unknownEndpoint = (request, response) => {
    response.status(400).send({error: 'unknown endpoint'})
  }
  
//use of middleware is denoted by following
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
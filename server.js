const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())


const rappers = {
    '21 savage':{
        'age': 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    }, 

    'chance the rapper':{
        'age': 29,
        'birthname': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois',

    },
    
    'dylon':{
        'age': 29,
        'birthname': 'Dylon',
        'birthLocation': 'Dylan',

    }, 

    'unknown':{
        'age': 'NA',
        'birthname': 'NA',
        'birthLocation': 'NA',

    }, 
}


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) =>{
    const rappersName = request.params.rapperName.toLowerCase()
   if(rappers[rappersName]){
        response.json(rappers[rappersName])
   }else{
    response.json(rappers['unknown'])
   }
})


app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}!`)
})
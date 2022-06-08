// A simple API to return some information & facts about Scottish Football teams.

const express = require('express')
const app = express()
const PORT = 8000

const team = {
    'rangers':{
        'location': 'Glasgow',
        'stadium': 'Ibrox',
        'capacity': 50817,
        'founded': '1872',
        'colours': 'Royal Blue, Red, White',
        'sponsor': '32Red',
        'leagueTitles': 55,
        'scottishCupTrophies': '34 and 27 League Cups',
        'europeanTrophies': 1,
        'fact': 'First British side to reach a UEFA-sanctioned European final in 1961.'
    },
    'celtic':{
        'location': 'Glasgow',
        'stadium': 'Celtic Park',
        'capacity': 60411,
        'founded': '1887',
        'colours': 'Green, White',
        'sponsor': 'Dafabet',
        'leagueTitles': 52,
        'scottishCupTrophies': '40 and 20 League Cups',
        'europeanTrophies': 1,
        'fact': 'Highest attendance for a European club competition match: 136,505 against Leeds United.'
    },
    'aberdeen':{
        'location': 'Aberdeen',
        'stadium': 'Pittodrie',
        'capacity': 20866,
        'founded': '1903',
        'colours': 'Red, White',
        'sponsor': 'Saltire Energy',
        'leagueTitles': 4,
        'scottishCupTrophies': '7 and 6 League Cups',
        'europeanTrophies': 2,
        'fact': 'Have never been relegated from the top division of the Scottish football league system since they were promoted in 1905.'
    },
    'unknown':{
        'location': 'unknown',
        'stadium': 'unknown',
        'capacity': 0,
        'founded': 'unknown',
        'colours': 'unknown',
        'sponsor': 'unknown',
        'leagueTitles': 0,
        'scottishCupTrophies': 'unknown',
        'europeanTrophies': 0,
        'fact': 'unknown'
    },
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
   const teamName = request.params.name.toLowerCase()
   if( team[teamName]) {
       response.json(team[teamName])
   }else{
       response.json(team['unknown'])
   } 
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on ${PORT}`)
})
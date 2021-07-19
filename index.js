const { response } = require('express');
const fetch = require('node-fetch');
const express = require('express');
const datastore=require('nedb');
require('dotenv').config()

//imports files from other dir
const sim_labels=require('./serverfiles/simfile');

const app = express();
app.listen(3000, () => {
    console.log("Started Server");
});

app.use(express.static("public"));
app.use(express.json());

let today= new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
let todaydate=new Date(today);


const database =new datastore("database.db");
database.loadDatabase();

app.get('/getapidata', async (request, response) => {
            database.find({},async (err,data)=>{
                if(err){
                    response.end();
                    return;
                }
                console.log('datalength',data.length);
                if(data.length==0){
                    const api_key=process.env.API_KEY;
                    const menudata=await fetch(`https://api.twelvedata.com/time_series?symbol=BTC/USD&exchange=Binance&interval=1day&apikey=${api_key}&source=docs`);
                    const data=await menudata.json();
                    database.insert(data); 
                }
                let localdatadate=await getdbdata(data);
               localdatadate=new Date(localdatadate);
              console.log(localdatadate);
                console.log(todaydate);
                if(localdatadate<todaydate){
                    console.log("fetching data");
                    database.remove({}, { multi: true }, async function (err, numRemoved) {
                        console.log('Records Deleted Count!',numRemoved);
                    });
                        const api_key='fc076a3317e2411ea48ec1f5796d93a6';
                        const menudata=await fetch(`https://api.twelvedata.com/time_series?symbol=BTC/USD&exchange=Binance&interval=1day&apikey=${api_key}&source=docs`);
                        const data=await menudata.json();
                        database.insert(data);
                        response.json(data);
                    }
                    else{
                        console.log("data already present");
                       
                        response.json(data);
                    }
            });
});


async function getdbdata(dbdata){
    return dbdata[0].values[0].datetime;
}


app.get('/getsimdata',async (request,response)=>{
   
       response.json(await sim_labels.getlabels());
});
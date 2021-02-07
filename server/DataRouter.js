const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const fs = require('fs');
const csv = require('csv-parser')
const request = require('request')

const Covid = require("./DataModel");
const { json } = require("express");
const dataRouter = express.Router();



//download csv file
const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
      request(url)
        .pipe(fs.createWriteStream(path))
        .on('close', callback)
    })
  }
  
  const url = 'https://api.covid19india.org/csv/latest/states.csv';
  const dest = 'file.csv';
  
  
setTimeout(() => {
    download(url, dest, function(err){
        let arr = [];
        if (err) {
          console.error(err);
        }
        else {
            fs.createReadStream('file.csv')
            .pipe(csv())
            .on('data', (row) => {
                let changed = false;
                for (let v of arr) {
                    if (v.State === row.State) {
                        changed = true;
                        v.Confirmed = v.Confirmed + parseInt(row.Confirmed) | 0;
                        v.Recovered = v.Recovered + parseInt(row.Recovered) | 0;
                        v.Deceased = v.Deceased + parseInt(row.Deceased) | 0;
                        v.Tested = v.Tested + parseInt(row.Tested) | 0;
                        v.Other = v.Other + parseInt(row.Other) | 0;
                    }
                }
                if (!changed) {
                  arr.push({
                      "State": row.State,
                      "Confirmed": parseInt(row.Confirmed) | 0,
                      "Recovered": parseInt(row.Recovered) | 0,
                      "Deceased": parseInt(row.Deceased) | 0,
                      "Tested": parseInt(row.Tested) | 0,
                      "Other": parseInt(row.Tested) | 0
                  });
                }
            })
            .on('end', () => {
              arr.map(data => Covid.create(data)
              .catch( err => console.log(err)));
              console.log("database updated");
            });
        }
     });
    // polls every 24 hours
}, 8640000);

dataRouter
  .route("/")
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    Covid.find({})
      .then(
        (covidData) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(covidData);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = dataRouter;

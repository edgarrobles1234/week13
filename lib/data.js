//import fs from 'fs';
//import path from 'path';
import got from 'got';

//const dataDir = path.join(process.cwd(), 'data');
const dataURL= "https://dev-srjc-cs55-13-edgar-robles.pantheonsite.io/wp-json/twentytwentyone-child/v1/special"




export async function getSortedList() {

    //const filePath = path.join(dataDir, "QB.json");


    //const jsonString = fs.readFileSync(filePath, 'utf8');
  
    let jsonString;
   try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);

   } catch (error){
    jsonString.body = [];
    console.log(error);
   }
    const jsonObj = JSON.parse(jsonString.body);



    jsonObj.sort(
        function (a, b) {
            return a.post_title.localeCompare(b.post_title)
        }
    );

    return jsonObj.map(
        function (item) {
            return {
                id: item.ID.toString(),
                team: item.post_status,
                name: item.post_title
            };
        }

    );
}


export async function getAllIds() {
    //const filePath = path.join(dataDir, "QB.json");

   // const jsonString = fs.readFileSync(filePath, 'utf8');
   let jsonString;
   try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);

   } catch (error){
    jsonString.body = [];
    console.log(error);
   }
    const jsonObj = JSON.parse(jsonString.body);

     return jsonObj.map(
    function(item) {
      return {
        params: {
          id: item.ID.toString()
        }
      };
    }
  );
  
}



export async function getData(idRequested) {
    //const filePath = path.join(dataDir, "QB.json");

    //const jsonString = fs.readFileSync(filePath, 'utf8');

    //const jsonObj = JSON.parse(jsonString);

    let jsonString;
   try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);

   } catch (error){
    jsonString.body = [];
    console.log(error);
   }
    const jsonObj = JSON.parse(jsonString.body);

    const objMatch = jsonObj.filter(
        function(obj) {
          return obj.ID.toString() === idRequested;
        }
      );
    

      let objReturned;
      if (objMatch.length > 0) {
        objReturned = objMatch[0];
      } else {
        objReturned = {};
      }
    
      return objReturned;
    }

    
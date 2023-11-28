//import fs from 'fs';
//import path from 'path';
import got from 'got';

//const dataDir = path.join(process.cwd(), 'data');
const dataURL= "https://dev-srjc-cs55-13-edgar-robles.pantheonsite.io/wp-json/twentytwentyone-child/v1/type3"




export async function getSortedList3() {

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

    jsonObj.forEach(
      function(item) {
        let x = '{"' + item.acf_fields + '"}';
        x = x.replaceAll(',','","');
        x = x.replaceAll(':','":"');
        let y = JSON.parse(x);
        item.acf_fields = y;
      }
    );


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

    jsonObj.forEach(
      function(item) {
        let x = '{"' + item.acf_fields + '"}';
        x = x.replaceAll(',','","');
        x = x.replaceAll(':','":"');
        let y = JSON.parse(x);
        item.acf_fields = y;
      }
    );

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
    
    jsonObj.forEach(
      function(item) {
        let x = '{"' + item.acf_fields + '"}';
        x = x.replaceAll(',','","');
        x = x.replaceAll(':','":"');
        let y = JSON.parse(x);
        item.acf_fields = y;
      }
    );

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

    
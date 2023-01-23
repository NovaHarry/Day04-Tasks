// To compare two JSON have the same properties without order :

let obj1 = {"name":"Person 1", "age" : "5"};
let obj2 = {"age" : "5", "name":"Person 1"};


for(var i of  Object.keys(obj2))
{
  if(obj1[i] == obj2[i])
  {
    console.log(i,obj1[i]);
  }
}



var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var result=JSON.parse(request.response);
console.log(result);

var a=result;

// To display all the flags using restcountries API : 
for(var i in a)
{
    console.log("Country Name:" + a[i].name, a[i].flag);
}

// To display all the Countries, Regions, Sub Regions and Population using restcountries API :

for(var i in a)
{
    console.log("Country Name:"+ a[i].name);
    console.log("Region:" + a[i].region);
    console.log("Sub-region:" + a[i].subregion);
    console.log("Population:" + a[i].population);
}

}



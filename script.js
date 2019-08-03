let btn = document.getElementById('btn');
let output = document.getElementById('output');

btn.addEventListener("click", function(){
    
    let chuck = new XMLHttpRequest();
    
    let url = 'https://api.chucknorris.io/jokes/random';
   

    chuck.onreadystatechange = function(){
        if(chuck.readyState == 1){
            output.innerHTML = "Almost...";
        }
    
        if (chuck.readyState == 4 && chuck.status == 200){
            let data = JSON.parse(chuck.responseText);
            console.log(chuck.responseText);
            console.log(data)
            output.innerHTML = `${data.value} <br> <img src="${data.icon_url}">`
            
        }
    }
    chuck.open('GET', url);
    chuck.send();
    
});

// LOOP EXAMPLE USING SELECTOR OPTION

let country = new XMLHttpRequest();
let url2 ='https://restcountries.eu/rest/v2/all';


country.onreadystatechange = function(){
    if(country.readyState == 4 && country.status == 200){
        let data1 = JSON.parse(country.response)
        for (let x=0;x<data1.length;x++){
            let opt = document.createElement("option");
            opt.innerText =data1[x].name;
            document.querySelector("#wc").appendChild(opt);

        }
    }
}

country.open('GET', url2);
country.send();

// RANDOM USER


let btn3 = document.getElementById('button-addon2');

btn3.addEventListener("click", function(){
    myRandomUser();
});

function myRandomUser(){
    let xhm3 = new XMLHttpRequest();
    let ruser = document.getElementById("inputU").value;
    let url3 = `https://randomuser.me/api/?results=${ruser}`;
    
        xhm3.onreadystatechange = function(){
            if (xhm3.readyState == 4 && xhm3.status == 200){
                let data3 = JSON.parse(xhm3.response).results;
               
                 for(let x=0; x<data3.length;x++){
                     let i = x+1;
                     let para = document.createElement("p");
                     para.innerText = i + " - " + data3[x].name.title + " " + data3[x].name.first + " " + data3[x].name.last
                     para.id="p"+x;
                     document.querySelector("#userProfile").appendChild(para);
                     let imahe = document.createElement("img");
                     imahe.src = data3[x].picture.large;
                     document.querySelector("#"+para.id).append(imahe);
                     
                 }
                 
             
    
                }
                
            }
        xhm3.open('GET',url3);
        xhm3.send();
};

function removeActive(){
    let para =document.querySelector("#para")
   for(let y = 0; y<para.length;y++){
       para[y].parentNode.removeActive(para[y]);
   }
   }




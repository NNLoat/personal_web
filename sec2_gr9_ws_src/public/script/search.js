
ipv4 = "3.83.218.73";

async function callSearchWS(url, method){
    let data;
    let tmp2 = [];
    let tmp = document.getElementsByName("crit");
    //console.log(tmp);
    for (let i =0;i<tmp.length;i++){
        if(tmp[i].checked){
                tmp2.push(tmp[i].value);
        }
    }
    console.log("tmp2 :" + tmp2);
    //let checkedValue = document.querySelector(".checkbox1").checked.value;
    //console.log("check :" +checkedValue);
    const formData = {
        que: document.getElementById("url2").value,
        crit: tmp2
    }
    JSON.stringify(formData)
    
    console.log(formData);
    if(method=="submit"){
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        data = await response.json();
    }
    return data;
}

let myForm  = document.getElementById("form1");
if(myForm){
    myForm.addEventListener("submit", function(e){
        e.preventDefault();
        callSearchWS("http://"+ipv4+":3030/search-movie/","submit")
        .then((data) =>{
            console.log(data);
            sessionStorage.setItem("data", JSON.stringify(data.data));
            //let obj = sessionStorage.getItem("data")
            //JSON.parse(obj);
            //console.log(obj);
            document.location.href = "result.html";
            if(data){
            //alert(data.message)
        }
        }).catch(function (error){
            console.error(error);
        })
    });
}


console.log("hello this is testing");

//console.log(fetchedData);
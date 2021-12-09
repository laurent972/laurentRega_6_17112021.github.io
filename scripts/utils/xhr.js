const xhr = new XMLHttpRequest();


xhr.onreadystatechange = function(){
    console.log(this);
    if(this.readyState === 4 && this.status == 200){
       
    }
    
}

xhr.open("GET", "scripts/pages/photographer.js", true);
xhr.send();
var proimg=document.querySelector('img');
var namew=document.getElementById('namew');
var userName=document.getElementById('userName');
var btn=document.getElementById('searchButton');
var input=document.getElementById('inputtext');
var followers=document.getElementById('followers');
var following=document.getElementById('following');
var bio=document.getElementById('bio');
var repo=document.getElementById('repo');


function search(inputtext){
    var http=new XMLHttpRequest();
    http.open('GET',`https://api.github.com/users/${inputtext}`,true);
    http.onreadystatechange=function(){
    if(this.readyState===4){
        if(this.status===200){
        var obj=JSON.parse(this.responseText);
        proimg.src=obj.avatar_url;
        if(obj.name==null){
            namew.innerHTML="NULL";
        }
        else{
            namew.innerHTML=obj.name;
        }
        userName.innerHTML=obj.html_url;
        bio.innerHTML=obj.bio;
        repo.innerHTML=obj.public_repos+" Repositories";
        followers.innerHTML=obj.followers+" followers";
        following.innerHTML=obj.following+" following";
        }
        else{
            namew.innerHTML="User Not Found";
            userName.innerHTML="";
            followers.innerHTML=0;
            following.innerHTML=0;
            bio.innerHTML="None"
            repo.innerHTML="None"
            alert('Please Enter Valid UserName');
        }
    }
}
http.send();
}

function getUser(){
    if(input.value==""){
        alert('Please Enter UserName');
    }
    else{
        search(input.value);
    }
}
import {save, get} from "./storage.js";

window.registerUser = function(){
 const user=document.getElementById("newUser").value;
 const pass=document.getElementById("newPass").value;

 if(pass.length < 6){
   alert("Senha muito curta");
   return;
 }

 let users=get("users") || [];

 if(users.find(u=>u.user===user)){
   alert("Usuário já existe");
   return;
 }

 users.push({user,pass});
 save("users",users);
 alert("Cadastro realizado!");
}

window.loginUser = function(){
 const user=document.getElementById("user").value;
 const pass=document.getElementById("pass").value;

 let users=get("users") || [];

 const found=users.find(u=>u.user===user && u.pass===pass);

 if(found){
   save("loggedUser",found);
   window.location="dashboard.html";
 } else{
   alert("Login inválido");
 }
}
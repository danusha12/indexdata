var firstname= localStorage.getItem("fname")



 if(!window.indexedDB){
   console.log("indexeddb is not working...!");
 }
 var request=window.indexedDB.open("cseDB",1);
 request.onerror=e=>{
   console.log("error "+e);
 }
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("svit",{keyPath:"name"});
 console.log("upgraded...!");

}
request.onsuccess=e=>{
 var dbname=e.target.result;
 store=dbname.transaction("svit","readwrite").objectStore("svit");
var data=store.get(firstname);
data.onsuccess=e=>{
  var res=e.target.result;
  console.log(res);
var main=document.getElementById('mainDiv');
var left=document.createElement("div");
left.classList.add("leftDiv");
var name=document.createElement("h3");
name.textContent=res.name;
left.appendChild(name);
main.appendChild(left);
var hr=document.createElement("hr");
left.appendChild(hr);
var rollno=document.createElement("p");
left.appendChild(rollno);
var email=document.createElement("p");
email.textContent=res.email;
left.appendChild(email);
var phoneno=document.createElement("p");
phoneno.textContent=res.phoneno;
left.appendChild(phoneno);

var right=document.createElement("div");
right.classList.add("rightDiv");
var co=document.createElement("p");
co.textContent=res.co;
right.appendChild(co);
main.appendChild(right);
var hr=document.createElement("hr");
right.appendChild(rigtht);

}
console.log(data);

console.log("success....!");
}

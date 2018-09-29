var sscvalue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var intervalue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var techvalue;
var techmks;
var techmks1;
var techradio;
var techper;
var techyop;

var name;
 var rollno;
 var email;
 var co;
 var store;


function getDetails(){
    sscvalue=document.getElementById('sscvalue').value;
      sscmks=document.getElementById('sscmks');
        sscmks1=document.getElementById('sscmks1');
        sscper=document.getElementById('sscper').value;
        sscyop=document.getElementById('sscyop').value;

        intervalue=document.getElementById('intervalue').value;
          intermks=document.getElementById('intermks');
            intermks1=document.getElementById('intermks1');
            interper=document.getElementById('interper').value;
            interyop=document.getElementById('interyop').value;

                techvalues=document.getElementById('techvalue').value;
                techmks=document.getElementById('techmks');
                techmks1=document.getElementById('techmks1');
                techper=document.getElementById('techper').value;
                techyop=document.getElementById('techyop').value;
                co=document.getElementById('co').value;

        if(sscmks.checked) {
        sscradio=sscmks.value;

        }else{
          sscradio=sscmks1.value;

        }

        if(intermks.checked) {
        interradio=intermks.value;

        }else{
          interradio=intermks1.value;

      }

      if(techmks.checked) {
      techradio=techmks.value;
          }else{
        techradio=techmks1.value;

    }
    console.log(sscvalue+" "+sscradio+" "+sscper+" "+sscyop);
    console.log(intervalue+" "+interradio+" "+interper+" "+interyop);
    console.log(techvalue+" "+techradio+" "+techper+" "+techyop);

    // cpga=document.getElementById('cpga').value;
    // percentage=document.getElementById('percentage').value;
    // yop=document.getElementById('yop').value;
    // console.log(ssc+""+cgpa+""+percentage+""+yop);
    // if(!window.indexedDB){
    //   console.log("indexdb is not working...!");
    //   }
    //   var request=window.indexedDB.open("sscvalue",1);
    //   request.onerror=e=>{
    //     console.log("error"+e);
    //   }
    //   request.onupgradeneeded=e=>{
    //    var dbname=e.target.result;
    //     dbname.createObjectStore("svit",{keyPath:"sscvalue"});
    //    console.log("upgraded...!");
    //
    //   }
    //    request.onsuccess=e=>{
    //      var dbname=e.target.result;
    //      store=dbname.transaction("svit","readwrite").objectStore("svit");
    //   store.put(
    //      {
    //        "sscvalue":sscvalue,
    //        "cpga":cpga,
    //     "percentage":percentage,
    //     "yop":yop
    //     }
    //     );
    //     }
    //     console.log("success....!");
    //    }

  // var name; var rollno;
// var email;
//

   name=document.getElementById('name').value;
   rollno=document.getElementById('rollno').value;
   email=document.getElementById('email').value;
   console.log(name+" "+rollno+""+email);

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
   store.put(
   {
     "name":name,
     "rollno":rollno,
     "email":email,
     "co":co,
     "edudetails":
     {
       "ssc":[
         sscvalue,
       sscradio,
       sscper,
       sscyop

     ],
     "inter": [
       intervalue,
       interradio,
       interper,
       interyop
     ],
     "btech":[
       techvalue,
       techradio,
       techper,
       techyop
     ]
   }
}
   );


 }
 console.log("success....!");
localStorage.setItem("fname",name);
window.open("resume.html","_self");
}

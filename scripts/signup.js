document.getElementById("signUpForm").addEventListener("submit", signUpDataFunct)
var signUpArr = JSON.parse(localStorage.getItem("signUpInfo")) || [];

function signUpDataFunct(event) {
  event.preventDefault()
  
 
     let  name = document.querySelector("#name").value;
     let  phone =document.querySelector("#phone").value;
     let  email =document.querySelector("#email").value;
     let  pass = document.querySelector("#pass").value;

   
   if(name==null || name=="", phone ==null || phone=="", email=="" || email==null, pass=="" || pass==null)
   {
      alert("Please Fill All Inforamation")
   }
   else {
       
       var InfoObj ={
           name :name,
           phone:phone,
           email:email,
           pass:pass,
        }
        signUpArr.push(InfoObj)
        localStorage.setItem("signUpInfo", JSON.stringify(signUpArr))
     
   }



   


}
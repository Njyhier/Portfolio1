function receiveEmail(){
  let name =$("#name").val();
  let email = $("#email").val();
  let subject = $("#subject").val();
  let message = $("#message").val();

  if (name === ""){
    alert("Please enter your name!");
  }
  else if ( email === "") {
    alert("Please enter a valid email!");
  }
   else if (message === "") {
    alert("Please write us something.");
   }
   else{
    alert("Hello " + name +". " + "Your message has been received. I will get back to you shortly")

   }
}

function resetForm(){
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

//UX
$(document).ready(function(){
  $("#contact").click(function(event){
    event.preventDefault();
    document.getElementById("get").scrollIntoView({behavior: "smooth"})
  });

  $("#contacts").submit(function(event){
    event.preventDefault();
    receiveEmail();
    resetForm();
  })
});
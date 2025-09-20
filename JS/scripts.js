function receiveEmail(){
  let name =$("#name").val();
  alert("Hello " + name +". " + "Your message has been received. I will get back to you shortly")
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
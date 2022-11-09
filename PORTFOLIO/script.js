
 
 //email sending using formspree
 var form = document.getElementById("my-form");
    
 async function handleSubmit(event) {
   event.preventDefault();
   var data = new FormData(event.target);
   fetch(event.target.action, {
     method: form.method,
     body: data,
     headers: {
         'Accept': 'application/json'
     }
   }).then(response => {
     if (response.ok) {
       // status.innerHTML = "Thanks for your submission!";
       swal("Success!", "Thanks for your submission!", "success");
       form.reset()
     } else {
       response.json().then(data => {
         if (Object.hasOwn(data, 'errors')) {
           swal("Try again", data["errors"].map(error => error["message"]).join(", "), "error");
           // status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
         } else {
           swal("Error!", "Oops! There was a problem submitting your form", "error");
           // status.innerHTML = "Oops! There was a problem submitting your form"
         }
       })
     }
   }).catch(error => {
     swal("Error!", "Oops! There was a problem submitting your form", "error");
     // status.innerHTML = "Oops! There was a problem submitting your form" 
   });
 }
 form.addEventListener("submit", handleSubmit)
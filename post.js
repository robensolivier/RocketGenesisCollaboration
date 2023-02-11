// Fetch Post

const form = document.getElementById("coctact-form");

 form.addEventListener("submit" , formSubmit);

 function formSubmit(e) {
   e.preventDefault();
 }
const format = {
    fullname: document.querySelector('input[name="fullname"]').value,
    email: document.querySelector('input[name="email"]').value,
     phone: document.querySelector('input[name="phone"]').value,
     company_name: document.querySelector('input[name="company_name"]').value,
     project_name: document.querySelector('input[name="project_name"]').value,
     project_desc: document.querySelector('input[name="project_desc"]').value,
     departement: document.querySelector('select[name="departement"]').value,
     message: document.querySelector('textarea[name="message"]').value,
     file: document.querySelector('input[name="file"]').value,
 };

     console.log(formData);    
     fetch("http://99.79.77.144:3000/api/contact", {    
      method: "POST", 

      body: JSON.stringify(formData),
 })

.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});
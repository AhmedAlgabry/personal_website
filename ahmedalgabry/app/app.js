const navItem= document.getElementsByClassName("navitem");
const sections = document.getElementsByClassName ("lable");

document.addEventListener('scroll', function (){
  for(const section of sections){
      const sectionBound= section.getBoundingClientRect();
      if(sectionBound.top >=0 && sectionBound.top <=150){
      for (const nav of navItem){
        if(nav.innerText==section.getAttribute("dataNav")){
          nav.style.cssText = 'background: linear-gradient(0deg, rgba(250, 70, 70, 1.5) 0%, rgb(250, 10, 10, 1.5) 100%); color: #fff; transition: all 0.3s ease-out';
          } else {nav.removeAttribute("style")};
      }
    }
  }
});


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//function sendMail(str) {
//  var link = "mailto:a7medelgabry@gmail.com" + "&subject:" escape("This is my subject")" + "&body=" + escape(str);
//  location.href = link;
//}
subbutton = document.getElementById("submit_button");
let emailTo = "a7medelgabry@gmail.com";
function submit_comment() {
  var body = document.getElementById("subject").value;
  var fName= document.getElementById('fname').value;
  var lName= document.getElementById('lname').value;
  var country = document.getElementById('country').value;
  var text= "Please fill all fields";
  if((body !="")&&(fName !="")&&(lName !="")&&(country !="")){
    location.href = `mailto:${emailTo}?subject="Website contact- First Name: ${fName}- Last Name: ${lName}- Country: ${country}" &body=${body}`;
  } else alert(text);
};
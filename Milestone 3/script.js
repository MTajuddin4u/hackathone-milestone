var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<p><b>Name</b>$(name)</p>\n<p><b>Email</b>$(email)</p>\n<p><b>Phone</b>$(phone)</p>\n\n<h3>Education</h3>\n<p>$(education)</p>\n\n<h3>Experience</h3>\n<p>$(experience)</p>\n\n<h3>Skills</h3>\n<p>$(skills)</p>\n";
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});

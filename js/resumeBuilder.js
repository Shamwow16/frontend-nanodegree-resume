/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*var name = "Shamyle Ghazali";
var role = "Front End Web Developer";



/*$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/
skills = ["communication","critical thinking","teamwork","project management"];
var bio = {
	"name":"Shamyle Ghazali",
	"role":"Front End Web Developer",
	"contact_info":{
		email:"shamyleg@gmail.com",
		mobile:"224-241-4290",
		skype:"shamyle.ghazali",
		location:"Chicago" },
	"picture_URL":"images/biopic.jpg",
	"welcome_message":"Welcome to Shamyle Ghazali's Resume",
	"skills":skills
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contact_info.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);







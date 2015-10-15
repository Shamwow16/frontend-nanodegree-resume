/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name":"Shamyle Ghazali",
	"role":"Front End Web Developer",
	"contact_info":{
		email:"shamyleg@gmail.com",
		mobile:"224-241-4290",
		github:"Shamwow16",
		location:"Chicago" },
	"picture_URL":"images/biopic.jpg",
	"welcome_message":"Welcome to Shamyle Ghazali's Resume",
	"skills":["communication","critical thinking","teamwork","project management"]
};


bio.displayTitle = function(){
	var name = bio.name;
	var mainTitle = $("<h1 class='main-title text-center'></h1>").html(name);
	$("#header").append(mainTitle);
};

bio.displayContacts = function(){
	var contactSection = $(".contact-section");
	for(var contact in bio.contact_info){
		var contactItemDiv = $("<div class='col-md-3 contact-item'></div>");
		var contactItem = contact + ": " + bio.contact_info[contact];
		contactSection.append(contactItemDiv);
		contactItemDiv.html(contactItem);
	}
};

bio.displayTitle();
bio.displayContacts();


//Code for Welcome Text Fade In Section
var welcomeText = "Welcome to the realm of Shamyle Ghazali";

$(function(){
var welcomeDiv = $("<div class='text-center col-md-12'><p id='#welcome-text'></p></div>")
//welcomeParagraph.html(welcomeText);
//welcomeParagraph.addClass('col-md-12 text-center');
console.log(welcomeDiv.html());
$('.welcome').append(welcomeDiv);
welcomeDiv.text(welcomeText);
$('#welcome-section').fadeIn(2000);
});
/*if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);


var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkills);

}*/



function inName(){
	var oldNameArray = bio.name.split(" ");
	var lastName = oldNameArray[1].toUpperCase();
	var firstName = oldNameArray[0].toLowerCase().split("");
	firstName = firstName[0].toUpperCase() + firstName.slice(1).join('');
	return firstName + " " + lastName;
}
var work={
	"jobs":[{
		"employer":"Northwestern University Information Technology",
		"title":"Lead Support Center Analyst",
		"location":"Evanston",
		"dates":"04/2011-06/2013",
		"description":"Provided first tier technical support to Northwestern faculty, staff and students via phone, email and in-person. Performed virus remediation, network troubleshooting, MS Exchange account maintenance and identity management. Provided in-house software training and customer service training to all junior and senior analysts. Presented tech talks aimed at bringing students and faculty members up to date with the latest technologies being introduced on campus."
	},
	{
		"employer":"Regis Technologies",
		"title":"Temporary Quality Control Engineer",
		"location":"Morton Grove",
		"dates":"01/2014-10/2014",
		"description":"Conducted QC experiments for contract-based pharamaceutical manufacturing. Ran purity assays and improvement studies for quality control. Provided recommendations on increasing purity of active pharamaceutical ingredients (APIs)"
	},
	{"employer":"SMS Assist",
	"title":"Project Manager",
	"location":"Chicago",
	"dates":"11/2014-07/2015",
	"description":"Managed work orders between affiliates and customers to ensure timely work completion. Provided customer support and escalated emergency issues. Ensured that affiliates were paid on time by tracking billed work orders. Assisted the procurement team with finding new affiliates across the country."
}
]
}

function displayWork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
	$(".work-entry:last").append(formattedWorkDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);

}
}




displayWork();
var projects={
	"projects":[
	{
		"title":"Personal Portfolio",
		"dates":"09/23/2015-10/04/2015",
		"description":"Developed a responsive personal portfolio using the Bootstrap framework along with custom CSS. The main goal was to provide potential employers with a presentation of all the projects that I have and will be completing as part of my Nanodegree. The portfolio highlights the use of responsive design and the benefits of a grid layout. Images in the website are responsive and the file type was taken into consideration as part of image optimization.",
		"images":"images/portfolio.png"
	}
	,
	{
		"title":"Online Resume",
		"dates":"10/08/2015-Present",
		"description":"Using Javascript and JQuery in combination with HTML/CSS to learn about web interactivity. This project allows for a firm understanding of the flow and control structure of Javascript. It reinforces the concept of functions and the idea that everything within Javascript is an object. The online resume will also serve as a starting point for employers to view my bio, work and project experience as well as my skills",
		"images":"images/sample-resume.jpg"
	}
]
}

projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		formattedProjectDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

var education={
	"schools" : [{
		"name":"Northwestern University",
		"location":"Evanston",
		"degree":"Bachelors",
		"major":"Chemical Engineering",
		"years":"2009-2013",
	}
	],

	"onlineCourses" : [
	{
		"title":"",
		"school":"",
		"dates":"",
		"url":""
	},

	{
		"title":"",
		"school":"",
		"dates":"",
		"url":""
	}
	,
	{
		"title":"",
		"school":"",
		"dates":"",
		"url":""
	}

	]


}



$("#mapDiv").append(googleMap);
/*education["name"] = "Northwestern University";
education["years"] = "2009-2013";
education["city"] = "Evanston, IL";*/


/*var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedEmail = HTMLemail.replace("%data%",bio.contact_info.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact_info.mobile);
var formattedGithub = HTMLgithub.replace("%data%",bio.contact_info.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact_info.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
var formattedImage = HTMLbioPic.replace("%data%",bio.picture_URL);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",work["position"]);
var formattedSchoolName = HTMLschoolName.replace("%data%",education.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedImage);
$("#header").append(formattedWelcome);
$("#header").append(HTMLskillsStart)
$("#header").append(formattedSkills);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedWorkTitle);*/
/*$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName)
*/







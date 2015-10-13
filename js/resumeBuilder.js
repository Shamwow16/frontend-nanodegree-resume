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

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);


var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
$("#skills").append(formattedSkills);
formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
$("#skills").append(formattedSkills);

}
var work={
	"jobs":[{
		"employer":"Northwestern University Information Technology",
		"title":"Lead Support Center Analyst",
		"location":"Evanston",
		"dates":"04/2011-06/2013",
		"description":"Provided first tier technical support to Northwestern faculty, staff and students via phone, email and in-person"
	},
	{
		"employer":"Regis Technologies",
		"title":"Temporary Quality Control Engineer",
		"location":"Morton Grove",
		"dates":"01/2014-10/2014",
		"description":"Conducted QC experiments for contract-based pharamaceutical manufacturing. Ran purity assays and improvement studies for quality control"
	},
	{"employer":"SMS Assist",
	"title":"Project Manager",
	"location":"Chicago",
	"dates":"11/2014-07/2015",
	"description":"Managed work orders between affiliates and customers to ensure timely work completion."
}
]
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);

}

var projects={
	"projects":[
	{
		"title":"",
		"dates":"",
		"description":"",
		"images":""
	}
	,
	{
		"title":"",
		"dates":"",
		"description":"",
		"images":""
	}			
	,
	{
		"title":"",
		"dates":"",
		"description":"",
		"images":""}
	]


}

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







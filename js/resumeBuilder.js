////BIO SECTION/////
//MODEL

var model = {
	bio: {"name":"Shamyle N. Ghazali",
	"role":"Front End Web Developer Extraordinaire",
	"contact_info":{
		email:"shamyleg@gmail.com",
		mobile:"224-241-4290",
		github:"Shamwow16",
		location:"Chicago, IL" },
	"contact_logo" : ["<i class='fa fa-envelope fa-fw'></i>","<i class='fa fa-mobile fa-fw'></i>",
	"<i class='fa fa-github fa-fw'></i>","<i class='fa fa-map-marker fa-fw'></i>"],
		"picture_URL":"images/biopic.jpg",
		"skills":["communication","critical thinking","teamwork","project management"]},

	education :{
	"schools" : [
	{
		"name":"Northwestern University",
		"location":"Evanston, IL",
		"degree":"Bachelors of Science",
		"major":"Chemical Engineering, Thematic focus in Computer Science and French",
		"years":"2009-2013",
		"url":"http://www.northwestern.edu/",
		"image":"images/NU_Logo.gif",
		"relevantCoursework":["Fundamentals of Object-Oriented Programming","Data Structures and Algorithms","Engineering Analysis","Engineering Design and Communication","Calculus 1-3"]
	}
	],

	"onlineCourses" : [
	{
		"title":"Udacity Front End Web Development Nanodegree",
		"provider":"Udacity",
		"dates":"09/15-Present",
		"image":"images/Udacity_Logo.gif",
		"url":"www.udacity.com",
		"relevantCoursework":["Intro to HTML and CSS","Version Control using GitHub","Responsive Web Design and Image Optimization","Javascript Basics","Intro to JQuery"]
	},

	{
		"title":"Foundations of Programming:Fundamentals",
		"provider":"Lynda.com",
		"dates":"07/14-08/14",
		"image":"images/lynda_logo.gif",
		"url":"www.lynda.com",
		"relevantCoursework":["Intro to Java","Object-Oriented Design"]
	}
	]


},
work:{
	"jobs":[
	{
		"employer":"Northwestern University Information Technology",
		"title":"Lead Support Center Analyst",
		"location":"Evanston, IL",
		"dates":"04/2011-06/2013",
		"description":"Provided first tier technical support to Northwestern faculty, staff and students via phone, email and in-person. Performed virus remediation, network troubleshooting, MS Exchange account maintenance and identity management. Provided in-house software training and customer service training to all junior and senior analysts. Presented tech talks aimed at bringing students and faculty members up to date with the latest technologies being introduced on campus."
	},
	{
		"employer":"Regis Technologies",
		"title":"Temporary Quality Control Engineer",
		"location":"Morton Grove, IL",
		"dates":"01/2014-10/2014",
		"description":"Conducted QC experiments for contract-based pharamaceutical manufacturing. Ran purity assays and improvement studies for quality control. Provided recommendations on increasing purity of active pharamaceutical ingredients (APIs)"
	},
	{"employer":"SMS Assist",
	"title":"Project Manager",
	"location":"Chicago, IL",
	"dates":"11/2014-07/2015",
	"description":"Managed work orders between affiliates and customers to ensure timely work completion. Provided customer support and escalated emergency issues. Ensured that affiliates were paid on time by tracking billed work orders. Assisted the procurement team with finding new affiliates across the country."
}
]
},
projects:{
	"projects":[
	{
		"title":"Personal Portfolio",
		"dates":"09/23/2015-10/04/2015",
		"description":"Developed a responsive personal portfolio using the Bootstrap framework along with custom CSS. The main goal was to provide potential employers with a presentation of all the projects that I have and will be completing as part of my Nanodegree. The portfolio highlights the use of responsive design and the benefits of a grid layout. Images in the website are responsive and the file type was taken into consideration as part of image optimization.",
		"images":"images/sky.jpg"
	}
	,
	{
		"title":"Online Resume",
		"dates":"10/08/2015-Present",
		"description":"Using Javascript and JQuery in combination with HTML/CSS to learn about web interactivity. This project allows for a firm understanding of the flow and control structure of Javascript. It reinforces the concept of functions and the idea that everything within Javascript is an object. The online resume will also serve as a starting point for employers to view my bio, work and project experience as well as my skills",
		"images":"images/sky.jpg"
	}
	]
}

}

console.log(model.projects.projects);

//OCTOPUS
var octopus = {
	init:function(){
		view.init();
	},
	getResumeHeading: function(){
		return model.bio.name;
	},
	getContacts: function(){
		return model.bio.contact_info;
	},
	getContactIcons:function(){
		return model.bio.contact_logo;
	},
	getPicUrl:function(){
		return model.bio.picture_URL;
	},
	getWelcomeText:function(){
		return model.bio.role;
	}


}

//VIEW
var view = {
	init:function(){

		console.log(this.resumeHeading);
		this.render();
	},
	render:function(){
		this.displayTitle();
		this.displayContacts();
		this.displayWelcome();
	},
	displayTitle:function(){
		this.resumeHeadingDiv = $('#header');
		this.resumeHeading = $("<h1 class='main-title text-center'></h1>");
		this.resumeHeading.html(octopus.getResumeHeading());
		this.resumeHeadingDiv.append(this.resumeHeading);
	},
	displayContacts:function(){
		this.contactSection = $(".contact-section");
		this.contacts = octopus.getContacts();
		this.contactIcons = octopus.getContactIcons();
		console.log(this.contacts);

		var i = 0;
		for(var contact in this.contacts){
			this.contactItem = $("<div class='col-md-3 contact-item'></div>");
			console.log(this.contacts[contact]);
			this.contactItem.html(this.contactIcons[i] + this.contacts[contact]);
			this.contactSection.append(this.contactItem);
			i++
		}
	},
	displayWelcome:function(){
		this.welcomeRow = $('.welcome');
		this.bioPic = $("<img class='col-sm-4 img-responsive img-circle text-right' src='" + octopus.getPicUrl() + "'>");
		this.welcomeText = $("<h3 class='role text-right'>" +octopus.getWelcomeText() + "</h3>");
		this.portfolioButton = $("<button class='btn btn-primary'>View My Portfolio</button>");
		this.welcomeDiv = $("<div class='col-sm-8 text-center'></div>");
		this.welcomeDiv.append(this.welcomeText);
		this.welcomeDiv.append(this.portfolioButton);
		this.welcomeRow.append(this.bioPic);
		this.welcomeRow.append(this.welcomeDiv);
		console.log(this.bioPic);
	}
}

octopus.init();

var bio = {
	"name":"Shamyle N. Ghazali",
	"role":"Front End Web Developer Extraordinaire",
	"contact_info":{
		email:"shamyleg@gmail.com",
		mobile:"224-241-4290",
		github:"Shamwow16",
		location:"Chicago, IL" },
		"picture_URL":"images/biopic.jpg",
		"skills":["communication","critical thinking","teamwork","project management"]
	};


//// WELCOME SECTION /////
/*welcomeRow = $(".welcome");
var bioPic = $("<img class='col-sm-4 img-responsive img-circle text-right' src='" + bio.picture_URL + "'>");
var welcomeDiv = $("<div class='col-sm-8 text-center'></div>");
var welcomeText = $("<h3 class='role text-right'>" + bio.role + "</h3>");
var portfolioButton = $("<button class='btn btn-primary'>View My Portfolio</button>");
welcomeDiv.append(welcomeText);
welcomeDiv.append(portfolioButton);
welcomeRow.append(bioPic);
welcomeRow.append(welcomeDiv);
*/

/////EDUCATION SECTION/////

var education={
	"schools" : [
	{
		"name":"Northwestern University",
		"location":"Evanston, IL",
		"degree":"Bachelors of Science",
		"major":"Chemical Engineering, Thematic focus in Computer Science and French",
		"years":"2009-2013",
		"url":"http://www.northwestern.edu/",
		"image":"images/NU_Logo.gif",
		"relevantCoursework":["Fundamentals of Object-Oriented Programming","Data Structures and Algorithms","Engineering Analysis","Engineering Design and Communication","Calculus 1-3"]
	}
	],

	"onlineCourses" : [
	{
		"title":"Udacity Front End Web Development Nanodegree",
		"provider":"Udacity",
		"dates":"09/15-Present",
		"image":"images/Udacity_Logo.gif",
		"url":"www.udacity.com",
		"relevantCoursework":["Intro to HTML and CSS","Version Control using GitHub","Responsive Web Design and Image Optimization","Javascript Basics","Intro to JQuery"]
	},

	{
		"title":"Foundations of Programming:Fundamentals",
		"provider":"Lynda.com",
		"dates":"07/14-08/14",
		"image":"images/lynda_logo.gif",
		"url":"www.lynda.com",
		"relevantCoursework":["Intro to Java","Object-Oriented Design"]
	}
	]


}

var educationSectionTitle = $("<h1>Education</h1>")
var relevantCourseworkHeading = $("<h3 class='text-right'>Relevant Coursework</h3>")
var educationSection = $("#education-section");
var relevantCourseworkHeading = $("<h3>Relevant Coursework</h3>");

education.displaySchool = function(){
	$(".education-section-title").prepend(educationSectionTitle);
	for(var school in education.schools){
		var schoolRow = $("<div class='education-entry row spacing'></div>");
		var schoolLogoUrl = education.schools[school].image;
		var schoolLogo = $("<img class='col-sm-4 text-left' src=" + schoolLogoUrl + ">");
		schoolRow.append(schoolLogo);
		var schoolInfoDiv = $("<ul class='col-sm-8 text-right info'></ul>");
		var schoolName = $("<li class='education-name'>" + education.schools[school].name + "</li>");
		var schoolLocation = $("<li class='school-location'>" + education.schools[school].location + "</li>");
		var schoolDegree = $("<li class='degree'>" + education.schools[school].degree + " in " + education.schools[school].major + "</li>");
		var schoolDates = $("<li class='dates'>" + education.schools[school].years + "</li>");
		var schoolCourseWork = education.displayCourseWork(education.schools[school].relevantCoursework);
		schoolInfoDiv.append(schoolName);
		schoolInfoDiv.append(schoolLocation);
		schoolInfoDiv.append(schoolDegree);
		schoolInfoDiv.append(schoolDates);
		schoolInfoDiv.append(schoolCourseWork);
		schoolRow.append(schoolInfoDiv);
		educationSection.append(schoolRow);
		educationSection.append($("<hr>"));
	}
}

education.displayOnlineCourse = function(){
	for(var onlineCourse in education.onlineCourses){
		var courseRow = $("<div class='education-entry row spacing'></div>");
		var courseLogoUrl = education.onlineCourses[onlineCourse].image;
		var courseLogo = $("<img class='col-sm-4 text-left' src=" + courseLogoUrl + ">");
		courseRow.append(courseLogo);
		var courseInfoDiv = $("<ul class='col-sm-8 text-right info'></ul>");
		var courseName = $("<li class='education-name'>" + education.onlineCourses[onlineCourse].provider + "</li>");
		var courseDegree = $("<li class='degree'>" + education.onlineCourses[onlineCourse].title + "</li>");
		var courseDates = $("<li class='dates'>" + education.onlineCourses[onlineCourse].dates + "</li>");
		var relevantCourseworkHeading = $("<h3 text-right>Relevant Coursework</h3>");
		var onlineCourseWork = education.displayCourseWork(education.onlineCourses[onlineCourse].relevantCoursework);
		courseInfoDiv.append(courseName);
		courseInfoDiv.append(courseDegree);
		courseInfoDiv.append(courseDates);
		courseInfoDiv.append(relevantCourseworkHeading);
		courseInfoDiv.append(onlineCourseWork);
		courseRow.append(courseInfoDiv);
		educationSection.append(courseRow);
		educationSection.append($("<hr>"));
	}
}

education.displayCourseWork = function(courseworkList){
	var relevantCourseworkArray = courseworkList;
	var relevantCourseworkList = $("<ul class='coursework-list'></ul>");
	for(var course in relevantCourseworkArray){
		var courseItem = relevantCourseworkArray[course];
		relevantCourseworkList.append($("<li class='coursework-item'>" + courseItem + "</li>"));
	}
	return relevantCourseworkList;
}
education.displaySchool();
education.displayOnlineCourse();

////WORK SECTION////

var work={
	"jobs":[
	{
		"employer":"Northwestern University Information Technology",
		"title":"Lead Support Center Analyst",
		"location":"Evanston, IL",
		"dates":"04/2011-06/2013",
		"description":"Provided first tier technical support to Northwestern faculty, staff and students via phone, email and in-person. Performed virus remediation, network troubleshooting, MS Exchange account maintenance and identity management. Provided in-house software training and customer service training to all junior and senior analysts. Presented tech talks aimed at bringing students and faculty members up to date with the latest technologies being introduced on campus."
	},
	{
		"employer":"Regis Technologies",
		"title":"Temporary Quality Control Engineer",
		"location":"Morton Grove, IL",
		"dates":"01/2014-10/2014",
		"description":"Conducted QC experiments for contract-based pharamaceutical manufacturing. Ran purity assays and improvement studies for quality control. Provided recommendations on increasing purity of active pharamaceutical ingredients (APIs)"
	},
	{"employer":"SMS Assist",
	"title":"Project Manager",
	"location":"Chicago, IL",
	"dates":"11/2014-07/2015",
	"description":"Managed work orders between affiliates and customers to ensure timely work completion. Provided customer support and escalated emergency issues. Ensured that affiliates were paid on time by tracking billed work orders. Assisted the procurement team with finding new affiliates across the country."
}
]
}

var workSection = $("#work-section")
var workSectionTitle = $("<h1>Work Experience</h1>")
work.displayWork = function(){
	for(job in work.jobs){
		$(".work-section-title").append(workSectionTitle);
		var workRow = $("<div class='row work-entry'></div>");
		var workEmployer = $("<h2 class='work-employer col-sm-6'>" + work.jobs[job].employer + "<span class='work-location'>" + "- "  + work.jobs[job].location + "</span>"  + "</h2>");
		var workInfoDiv = $("<div class='col-sm-6'></div>");
		var workTitle = $("<h3 class='work-title text-right'>" + work.jobs[job].title + "</h3>");
		var workDates = $("<h4 class='work-dates text-right'>"+ work.jobs[job].dates + "</h4>");
		var workDescriptionRow = $("<div class='row'></div>");
		var workDescription = $("<p class='work-description col-sm-12'>" + work.jobs[job].description + "</p>");
		workRow.append(workEmployer);
		workInfoDiv.append(workTitle);
		workInfoDiv.append(workDates);
		workRow.append(workInfoDiv);
		workDescriptionRow.append(workDescription);
		workRow.append(workDescription);
		workSection.append(workRow);
		workSection.append($("<hr>"));
	}
}

work.displayWork();


/////PROJECTS SECTION /////
var projects={
	"projects":[
	{
		"title":"Personal Portfolio",
		"dates":"09/23/2015-10/04/2015",
		"description":"Developed a responsive personal portfolio using the Bootstrap framework along with custom CSS. The main goal was to provide potential employers with a presentation of all the projects that I have and will be completing as part of my Nanodegree. The portfolio highlights the use of responsive design and the benefits of a grid layout. Images in the website are responsive and the file type was taken into consideration as part of image optimization.",
		"images":"images/sky.jpg"
	}
	,
	{
		"title":"Online Resume",
		"dates":"10/08/2015-Present",
		"description":"Using Javascript and JQuery in combination with HTML/CSS to learn about web interactivity. This project allows for a firm understanding of the flow and control structure of Javascript. It reinforces the concept of functions and the idea that everything within Javascript is an object. The online resume will also serve as a starting point for employers to view my bio, work and project experience as well as my skills",
		"images":"images/sky.jpg"
	}
	]
}

var projectSection = $(".projects");
var projectSectionHeading = $("<h1 class='col-sm-12 text-center'> Projects </h1>");
projects.displayProject = function(){
	$(".project-section-title").append(projectSectionHeading);
	for(var project in projects.projects){
		var projectRow = $("<div class='row project-entry jumbotron'></div>");
		var projectInfoDiv = $("<div class='col-sm-6 text-left'></div>");
		var projectTitle = $("<h2 class='project-title'>" + projects.projects[project].title + "</h2>");
		var projectDates = $("<h2 class='project-dates'>" + projects.projects[project].dates + "</h2>");
		var projectDescription = $("<p class='project-description col-sm-6 text-left'>" + projects.projects[project].description + "</p>");
		projectInfoDiv.append(projectTitle);
		projectInfoDiv.append(projectDates);
		projectRow.append(projectInfoDiv);
		projectRow.append(projectDescription);
		projectSection.append(projectRow);
	}
}

projects.displayProject();





/////SKILLS SECTION//////
$("#skills-section").prepend("<h1 class='skills-section-title text-center'>Skills</h1>");

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);





$(document).ready(function () {
	$(window).resize(function(){
		drawBasic();
	});
});
////Using Google Charts to draw a basic horizontal bar chart
function drawBasic() {

	var data = google.visualization.arrayToDataTable([
		['Skill', 'Proficiency',{role:'annotation'}],
		['HTML/CSS', {v:4,f:'Proficient'},'Proficient'],
		['Back-end Development', {v:1,f:'Novice'},'Novice'],
		['Communication', {v:5,f:'Highly Proficient'},'Highly Proficient'],
		['Python', {v:4,f:'Proficient'},'Proficient'],
		['Project Management', {v:4,f:'Proficient'},'Proficient'],
		['Javascript/JQuery', {v:3,f:'Average'},'Average'],
		['Problem Solving', {v:5,f:'Highly Proficient'}, 'Highly Proficient'],
		['Bootstrap 3', {v:4, f:'Proficient'},'Proficient']
		]);

	var options = {
		title: 'My Skills',
		chartArea: {height: '100%', width: '50%'},
		fontSize: '2em',
		fontName: 'Lato',
		hAxis: {
			title: 'Proficiency',
			textPosition: 'none',
			gridlines: {
				color: 'transparent'
			}
		},
		vAxis: {
			title: 'Skill',
			format: "skill",
		},
		backgroundColor: { fill: "#ddedf0" },
		annotations: {
			textStyle: {
				color: '#333'
		}
		},
		legend: {position: 'none'}
	};

	var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

	chart.draw(data, options);
}

///// MAP SECTION
var mapSectionHeading = $("<h1 class=' col-sm-12 text-center'>Where I've Worked</h1>");
$(".map-section-heading").append(mapSectionHeading);
$("#mapDiv").append(googleMap);
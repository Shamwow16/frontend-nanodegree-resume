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
	"skills":["communication","critical thinking","teamwork","project management"]
};


var facebookBarData = {
    labels: ['Sexy', 'Friendly', 'Hard-working', 'Reliable', 'Muscular'],
    datasets: [
        {
            label: "What Shamyle's Facebook friends say",
            fillColor: '#382765',
            data: [10, 4, 6, 8, 10]
        }
    ]
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
var quote = "Perseverance Commands Success";

$(function(){
var welcomeDiv = $("<div class='text-center col-sm-12'></div>")
var welcomeQuote = $("<p id='quote' class='welcome-text col-sm-12'></p>");
welcomeDiv.append(welcomeQuote);

welcomeQuote.html(quote);
$('.welcome').append(welcomeDiv);
//$(welcomeParagraph).css("display","none");
$('#welcome-section').fadeIn();
$('#quote').fadeOut(4000,function(){
	$(this).html(welcomeText)
}).fadeIn(1000);
//$(welcomeParagraph).fadeIn(6000);
});

$(function(){
	$('.jumbotron').css("background-image",'url:"images/sky.jpg"');

})


//Code for Skill Bar Charts
var facebookDoughnutdata = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Sexy"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Friendly"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Hardworking"
    }
]

var ctx = $("#facebook-chart").get(0).getContext("2d");
var facebookDoughnutChart = new Chart(ctx).Doughnut(facebookDoughnutdata);
/*var facebookSkillBarChart = new Chart(ctx).Bar(facebookBarData,{
	barValueSpacing:8,
	multiTooltipTemplate:"<%= datasetLabel %> - <%= value %>"
});*/

var ctx = $("#personalChart").get(0).getContext("2d");
var mySkillBarChart = new Chart(ctx).Doughnut(facebookDoughnutdata);



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



/*function inName(){
	var oldNameArray = bio.name.split(" ");
	var lastName = oldNameArray[1].toUpperCase();
	var firstName = oldNameArray[0].toLowerCase().split("");
	firstName = firstName[0].toUpperCase() + firstName.slice(1).join('');
	return firstName + " " + lastName;
}*/
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




//displayWork();
var projects={
	"projects":[
	{
		"title":"Personal Portfolio",
		"dates":"09/23/2015-10/04/2015",
		"description":"Developed a responsive personal portfolio using the Bootstrap framework along with custom CSS. The main goal was to provide potential employers with a presentation of all the projects that I have and will be completing as part of my Nanodegree. The portfolio highlights the use of responsive design and the benefits of a grid layout. Images in the website are responsive and the file type was taken into consideration as part of image optimization.",
		"images":"images/portfolio-image.jpg"
	}
	,
	{
		"title":"Online Resume",
		"dates":"10/08/2015-Present",
		"description":"Using Javascript and JQuery in combination with HTML/CSS to learn about web interactivity. This project allows for a firm understanding of the flow and control structure of Javascript. It reinforces the concept of functions and the idea that everything within Javascript is an object. The online resume will also serve as a starting point for employers to view my bio, work and project experience as well as my skills",
		"images":"images/portfolio-image.jpg"
	}
]
}
/*projects.displayProjectTitle = function(){
var projectWrapperTitle = $("<h1 class='text-center'>Projects</h1>");
var projectWrapper = $(".project-area-title");
projectWrapper.append(projectWrapperTitle);
};
*/
projects.displayProjectDetails = function(){

	var projectSection = $(".project-section");
	for(project in projects.projects){
	var projectColumnDiv = $("<div class='col-sm-12'></div>");
	var projectTitleDiv = $("<h2 class='project-title text-center'></h2>");
	var projectDateDiv = $("<h3 class='project-dates text-center'></h3>");
	projectColumnDiv.append(projectTitleDiv);
	projectColumnDiv.append(projectDateDiv);
	projectTitleDiv.html(projects.projects[project].title);
	projectDateDiv.html(projects.projects[project].dates);
	console.log(projects.projects[project].dates);
	projectSection.append(projectColumnDiv);
}
}

//projects.displayProjectDetails();
//projects.displayProjectTitle();
var projectWrapperTitle = $("<h1 class='text-center'>Projects</h1>");
var projectSection = $('.project-section');

projects.addImage = function(){
		//var projectImage = $("<img class='img-responsive jumbotron'>");
		var imageCaptionDiv = $("<p class='caption'></p>");
		var imageCaption = "Testing this caption";
		var projectImageDiv = $("<div class='jumbotron text-center'></div>");
		projectSection.append(projectImageDiv);
		//projectImage.attr("src", imageUrl);
		projectImageDiv.css("background-image","url(projects.projects[images])");
		projectImageDiv.append(imageCaptionDiv);
		imageCaptionDiv.text(imageCaption);
}

projects.display = function(){
	//projectWrapper.append(projectWrapperTitle)
	for(project in projects.projects){
		$(".project-area-title").append(projectWrapperTitle);
		var projectColumnDiv = $("<div class='col-sm-12'></div>");
		var projectTitleDiv = $("<h2 class='project-title text-center'></h2>");
		var projectDateDiv = $("<h3 class='project-dates text-center'></h3>");
		var imageCaptionDiv = $("<p class='caption'></p>");
		var imageCaption = "Testing this caption";
		var projectImageDiv = $("<div class='jumbotron text-center'></div>");

		//var projectImage = $("<img class='img-responsive'>");
		//var imageCaptionDiv = $("div class='caption'></div>");
		//var imageCaption = projects.projects[project].title;
		projectSection.append(projectColumnDiv);
		projectSection.append(projectImageDiv);
		projectColumnDiv.append(projectTitleDiv);
		projectTitleDiv.text(projects.projects[project].title);
		projectColumnDiv.append(projectDateDiv);
		projectDateDiv.text(projects.projects[project].dates);
		var projectImageUrl = projects.projects[project].images;
		console.log(projectImageUrl);
		projectImageDiv.css("background-image","url"+ "(" + projectImageUrl + ")");
		projectImageDiv.append(imageCaptionDiv);
		imageCaptionDiv.text(imageCaption);
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
		"image":"http://placehold.it/350x150",
	}
	],

	"onlineCourses" : [
	{
		"title":"Udacity Front End Web Development Nanodegree",
		"school":"Udacity",
		"dates":"09/23/15-Present",
		"url":"www.udacity.com"
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

var educationWrapperTitle = $("<h1 class='text-center'>Education</h1>")

education.addInfo = function(){
	var schools = education.schools;

	for(var school in schools){
		for(var schoolInfo in schools[school]){
			var keyArray = Object.keys(schools[school]);
				if(schoolInfo == keyArray[keyArray.length - 1]){
					continue;
				}
				var schoolListItem = $("<li class='school-item'></li>");
				$(".school-info").append(schoolListItem);
				schoolListItem.html(schools[school][schoolInfo]);
		}

	}
}

education.addInfo();

education.display = function(){
	$('#education-section').prepend(educationWrapperTitle);
	for(var school in education.schools){
		var schoolLogoUrl = education.schools[school].image;
		var schoolLogoElement = $("<img class='img-responsive' alt='school-logo'>");
		schoolLogoElement.attr("src",schoolLogoUrl);
		$(".school-logo").append(schoolLogoElement);
		var schoolName = education.schools[school].name;
		var schoolDegree = education.schools[school].degree;
		//$(".school-info").append(education.schools[school]);


	}
}

education.display();



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







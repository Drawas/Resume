/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "David Rawas",
    "role": "Web Designer",
    "contacts": {
        "mobile": "425-000-0000",
        "email": "anon@private.com",
        "github": "Drawas",
        "location": "Washington"
    },
    "welcomeMessage": "Welcome to my site!",
    "skills": ["Web Design", "Programming", "Writing"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWel = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
        $("#header").append(formattedPic, formattedWel, HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#header").append(formattedSkill);
        }
    }
};

var education = {
    "schools": [{
        "name": "High School",
        "location": "Redmond",
        "degree": "GPD",
        "majors": ["None"],
        "dates": "20XX-20XX",
        "url": "highschool.com"
    }, {
        "name": "College",
        "location": "Kirkland",
        "degree": "Bachlors",
        "majors": ["Comp Sci"],
        "dates": "20XX-20XX",
        "url": "college.com"
    }],

    "onlinCourses": [{
        "title": "Online Course",
        "school": "Online Place",
        "dates": "20XX-20XX",
        "url": "school.com"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        $("#education").addClass("center-content");
        for (var i = 0; i < education.schools.length; i++) {

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedLocation = HTMLschoolDates.replace("%data%", education.schools[i].dates) + HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry").append(formattedSchool, formattedLocation);
            console.log("here");
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry").append(formattedMajors);
            }
        }

        for (i = 0; i < education.onlinCourses.length; i++) {
            $("#education").append(HTMLonlineClasses);
            var formattedOnlineSchool = HTMLonlineTitle.replace("%data%", education.onlinCourses[i].title).replace("#", education.onlinCourses[i].url) + HTMLonlineSchool.replace("%data%", education.onlinCourses[i].school);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlinCourses[i].dates);
            var formattedCourse = HTMLonlineURL.replace("%data%", education.onlinCourses[i].url).replace("#", education.onlinCourses[i].url);
            $("#education").append(formattedOnlineSchool, formattedDate, formattedCourse);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Megacorp",
        "title": "Lackey",
        "location": "New York",
        "dates": "20XX-20XX",
        "description": "A whole bunch of stuff."
    }, {
        "employer": "The Underground",
        "title": "Moleperson",
        "location": "Boston",
        "dates": "20XX-20XX",
        "description": "Digging."
    }],
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        $("#workExperience").addClass("center-content");
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedArea = HTMLworkDates.replace("%data%", work.jobs[i].dates) + HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDes = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(formattedJob, formattedArea, formattedDes);
        }
    }
};

var projects = {
    "projects": [{
        "title": "The Pit",
        "dates": "20XX-20XX",
        "description": "Digging a pit.",
        "images": ["images/Hans_Moleman.png"]
    }, {
        "title": "The Sea",
        "dates": "20XX-20XX",
        "description": "Making a sea.",
        "images": ["images/Horatio_McCallister.png"]
    }],
    "display": function() {
        $("#projects").append(HTMLprojectStart);
        $("#projects").addClass("center-content");
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedTitle= HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedPro= HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(formattedTitle, formattedDates, formattedPro);
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
$("#mapDiv").find("h2").addClass("center-heading");


//  $(document).click(function(loc) {
//   var x=loc.pageX;
//   var y=loc.pageY;
//   logClicks(x,y);
// });

// function inName(name){
//   name=name.trim().split(" ")
//   console.log(name);
//   name[1]=name[1].toUpperCase();
//   name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase()
//   return name[0] + " " + name[1];
// }
// $("#main").append(internationalizeButton);

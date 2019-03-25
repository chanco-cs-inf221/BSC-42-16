let projectForm = document.getElementById("form_id");
projectForm.addEventListener("submit", function(event){
	event.preventDefault();
	
	var project = projectForm.name.value;
	var details = projectForm.pDetails.value;
	var bDate = projectForm.startDate;
	
	var arrayP = [project, details, bDate];
	localStorage.setItem(details, arrayP);
	
	var projects = document.getElementById("project");
	var lement = document.createElement("p");
	var t = document.createTextNode(project);
	lement.appendChild(t);
	projects.appendChild(lement);
	projectForm.reset();
		
});

let experiForm = document.getElementById("experience");
    experiForm.addEventListener("submit", function(e){
		e.preventDefault();
		
		var organName = experiForm.organName.value;
		var period = experiForm.WorkPeriod.value;
		
		let arrayP = [orgaName,period]
		localStorage.setItem(organName,arrayP );
		
		var workExperience = document.getElementById("w");
		var element = document.createElement("p");
		var f = document.createTextNode(orgaName);
		element.appendChild(f);
		workExperience.appendChild(element);
		experiForm.reset();
		
	});
	


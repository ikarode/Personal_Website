$(document).ready(function(){
	var learnerDrop, makerDrop, researcherDrop, coderDrop, coachDrop, volunteerDrop, blogDrop;
	learnerDrop = new Drop({
	    target: document.querySelector('.learner-ico'),
	    content: 'Education',
	    position: 'top center',
	    openOn: 'hover'
	  });
	makerDrop = new Drop({
	    target: document.querySelector('.maker-ico'),
	    content: 'Engineering',
	    position: 'top center',
	    openOn: 'hover'
	  });
	researcherDrop = new Drop({
	    target: document.querySelector('.researcher-ico'),
	    content: 'Research',
	    position: 'top center',
	    openOn: 'hover'
	  });
	coderDrop = new Drop({
	    target: document.querySelector('.coder-ico'),
	    content: 'Coding',
	    position: 'top center',
	    openOn: 'hover'
	  });
	coachDrop = new Drop({
	    target: document.querySelector('.coach-ico'),
	    content: 'Trading',
	    position: 'top center',
	    openOn: 'hover'
	  });
	volunteerDrop = new Drop({
	    target: document.querySelector('.volunteer-ico'),
	    content: 'Volunteer',
	    position: 'top center',
	    openOn: 'hover'
	  });
	blogDrop = new Drop({
		target: document.querySelector('.dummyActionButton'),
		content: 'Lab Website',
		position: 'top center',
		openOn: 'hover'
	});
});
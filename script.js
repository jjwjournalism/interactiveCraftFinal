$(document).ready(function () {

	var stateName;
	var stateValues;
	var stateAssessments;
	var stateVaccinations;
	//var stateSports;

	var assessmentMessages = [
		"There's no assessment required by state law. Students can complete their schooling without ever being assessed by a non-parent.",
		"State law requires that students complete some kind of assessment. But that assessment can be administered by a parent, so there's no guarantee that homeschooled children will come into contact with a mandated reporter. Furthermore, parents don't need to submit their test results, so there's no way to enforce the assessment requirements. Under state law, a student could complete these assessments (or skip them) without ever coming into contact with a mandated reporter.",
		"There are different rules for different types of homeschooling, but none of them put students in contact with mandated reporters.",
		"There are different rules for different types of homeschooling. Some put students in contact with mandated reporters, while others don't.",
		"State law requires that children complete either a standardized test or a portfolio review, both in the presence of an adult who's not a parent. If a child is showing signs of abuse, the administrator or portfolio reviewer can report them to CPS.",
		"It's up to each school district to decide what sort of assessment (if any) homeschooling students must complete."
		];
	var vaccinationMessages = ["State law doesn't require homeschooled students to be vaccinated, so a homeschooled child could go years without seeing a doctor.",
		"There are different rules for different types of homeschooling. But overall, state law doesn't require homeschooled students to be vaccinated, so a homeschooled child could go years without seeing a doctor.",
		"State law requires that homeschooled students be vaccinated. But since the law doesn't ask for proof of vaccination, a homeschooled child could go years without seeing a doctor.",
		"There are different rules for different types of homeschooling. But overall, state law does require that homeschooled students be vaccinated. But since the law doesn't ask for proof of vaccination, a homeschooled child could go years without seeing a doctor.",
		"State law requires that homeschooled students be vaccinated, and parents must provide proof that their children have gotten all the necessary shots. So even homeschooled kids have to go to the doctor.",
		"There are different rules for different types of homeschooling. But overall, state law requires that homeschooled students be vaccinated, and parents must provide proof that their children have gotten all the necessary shots. So even homeschooled kids have to go to the doctor." ];
	var sportsMessages = [];

	$("#state").change(function(){
		
		// Gets the name of the chosen state
		stateName = $( "#state option:selected" ).text();
		
		// Gets the state values from the chosen state and assigns them to the appropriate variables
		stateValues = $( "#state option:selected" ).val();
		stateAssessments = stateValues.charAt(0);
		stateVaccinations = stateValues.charAt(1);
		//stateSports = stateValues.charAt(2);

		
		
		// Looks up the assessment laws for the chosen state and puts them in the corresponding span	
		$(".results-container").find("#assessments").text(assessmentMessages[stateAssessments]);

		// Adds an X, check, or question mark depending on the law
		if (stateAssessments < 3){
			$(".results-container").find("#assessmentsVerdict").html('&#10008;');

			}

		else if (stateAssessments == 4){
			$(".results-container").find("#assessmentsVerdict").html('&#10004;');

		}

		else {
			$(".results-container").find("#assessmentsVerdict").html('&#10067;');
		}
		

		//Looks up the vaccination laws for the chosen state and puts them in the corresponding span	
		$(".results-container").find("#vaccinations").text(vaccinationMessages[stateVaccinations]);

		// Adds an X, check, or question mark depending on the law
		if (stateVaccinations < 4){
			$(".results-container").find("#vaccinationsVerdict").html('&#10008;');

			}

		else {
			$(".results-container").find("#vaccinationsVerdict").html('&#10004;');
		}






	});

});
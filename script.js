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
			$(".results-container").find("#assessmentsVerdict").css("color","red");
			$(".results-container").find("#assessmentsVerdict").html('&#10008;');

			}

		else if (stateAssessments == 4){
			$(".results-container").find("#assessmentsVerdict").css("color","green");
			$(".results-container").find("#assessmentsVerdict").html('&#10004;');

		}

		else {
			$(".results-container").find("#assessmentsVerdict").css("color","black");
			$(".results-container").find("#assessmentsVerdict").html('&#10067;');
		}
		

		//Looks up the vaccination laws for the chosen state and puts them in the corresponding span	
		$(".results-container").find("#vaccinations").text(vaccinationMessages[stateVaccinations]);

		// Adds an X, check, or question mark depending on the law
		if (stateVaccinations < 4){
			
			$(".results-container").find("#vaccinationsVerdict").css("color","red");
			$(".results-container").find("#vaccinationsVerdict").html('&#10008;');

			}

		else {
			$(".results-container").find("#vaccinationsVerdict").css("color","green");
			$(".results-container").find("#vaccinationsVerdict").html('&#10004;');
		}






	});

	//Second interactive

	var educationValue;
	var felonyValue;

	var homeschoolEducationAnswer = true;
	var publicEducationAnswer = true;

	var homeschoolFelonyAnswer = true;
	var publicFelonyAnswer = true;

	$(".calculate").click(function() {

		//Clear anything left over from last time you ran the quiz
		$(".public").each(function(){
			$(this).find("span").text('');

		});

		$(".homeschool").each(function(){
			$(this).find("span").text('');

		});

		//Get values from inputs
		educationValue = $("input[name='education']:checked").val();
		felonyValue = $("input[name='felony']:checked").val();


		if (educationValue == 1){
			publicEducationAnswer = false;
			$("#publicExplanation1").find("span").text("In all 50 states, you must have at least a Bachelor's degree to teach public school.")

			homeschoolEducationAnswer = true;
			$("#homeschoolExplanation1").find("span").text("In every state except Washington, you can homeschool without any college credit.")


		}


		if (educationValue == 0){

			publicEducationAnswer = false;
			$("#publicExplanation1").find("span").text("In all 50 states, you must have at least a Bachelor's degree to teach public school.");

			homeschoolEducationAnswer = true;
			$("#homeschoolExplanation1").find("span").text("In all but 11 states, you can homeschool without a high school degree or equivalent.");
		}

		
		if (educationValue == 2){
			publicEducationAnswer = false;
			$("#publicExplanation1").find("span").text("In all 50 states, you must have at least a Bachelor's degree to teach public school.");

			homeschoolEducationAnswer = true;
			$("#homeschoolExplanation1").find("span").text("If you have an Associate's degree, you can homeschool in any state, including Washington, which requires that homeschooling parents have some college credit.");

		}

		if (educationValue == 3) {
			
			publicEducationAnswer = true;
			$("#publicExplanation1").find("span").text("If you have a Bachelor's degree, you can enroll in a teacher preparation program and eventually teach public school.");

			homeschoolEducationAnswer = true;
			$("#homeschoolExplanation1").find("span").text("If you have a Bachelor's degree, you can homeschool in any state, including Washington, which requires that homeschooling parents have some college credit.");
		}

		if (felonyValue == 0){
			publicFelonyAnswer = true;
			$("#publicExplanation2").find("span").text("If you've never been convicted of a felony, you can receive your teaching certificate and eventually teach public school.");

			homeschoolFelonyAnswer = true;
			$("#homeschoolExplanation2").find("span").text("If you've never been convicted of a felony, you can homeschool in any state, including Pennsylvania, which forbids anyone who's been convicted of a felony in the last five years from homeschooling.");

		}

		if (felonyValue == 1){
			publicFelonyAnswer = false;
			$("#publicExplanation2").find("span").text("While exact requirements vary from state to state and can change on a case-by-case basis, a felony conviction makes it nearly impossible for you to get a teaching certification.");

			homeschoolFelonyAnswer = true;
			$("#homeschoolExplanation2").find("span").text("If you were convicted of a felony more than five years ago, you can homeschool in any state, including Pennsylvania, which forbids anyone who's been convicted of a felony in the last five years from homeschooling.");

		}

		if (felonyValue == 2){
			publicFelonyAnswer = false;
			$("#publicExplanation2").find("span").text("While exact requirements vary from state to state and can change on a case-by-case basis, a felony conviction makes it nearly impossible for you to get a teaching certification.");

			homeschoolFelonyAnswer = true;
			$("#homeschoolExplanation2").find("span").text("If you were convicted of a felony more than five years ago, you can homeschool in any state—except Pennsylvania, which forbids anyone who's been convicted of a felony in the last five years from homeschooling.");

		}

		//Assign checks and Xes
		if (homeschoolEducationAnswer && homeschoolFelonyAnswer){
			$("#homeschoolVerdict").css("color","green");
			$("#homeschoolVerdict").html('&#10004;');
		}

		else{
			$("#homeschoolVerdict").css("color","red");
			$("#homeschoolVerdict").html('&#10008;');
		}

		if (publicEducationAnswer && publicFelonyAnswer){
			$("#publicVerdict").css("color","green");
			$("#publicVerdict").html('&#10004;');
		}

		else{
			$("#publicVerdict").css("color","red");
			$("#publicVerdict").html('&#10008;');
		}









	});

});
$(document).ready(function() {
	
});

// var resetQuiz = function() {
// 	responseArray = [];
// 	questionCount = 0;
// 	finishedQuiz = false; 

// 	questions = [{ 
// 		q: "What is the capital of the US?", 
// 		choices: ["Washington DC", "NYC", "Silicon Valley"], 
// 		correct: 0
// 	}, {
// 		q: "What is the capital of China?", 
// 		choices: ["Beijing", "NYC", "Silicon Valley"], 
// 		correct: 0
// 	}, {
// 		q: "What is the capital of the Canada?", 
// 		choices: ["Ottawa", "NYC", "Silicon Valley"], 
// 		correct: 0
// 	}, {
// 		q: "What is the capital of the Mexico?", 
// 		choices: ["Mexico City", "NYC", "Silicon Valley"], 
// 		correct: 0
// 	}];

// 	q1 = questions[0];
// 	q2 = questions[1];
// 	q3 = questions[2];
// 	q4 = questions[3];

// 	answerKey = [q1.correct, q2.correct, q3.correct, q4.correct];

// 	loadQuestion();
// }



var lookupUser = function() {
	var userId = $('#lookup').val();
	var clientId = "a5f8092dddf4464b823580e2fc13d197";
	var redirectUri = "http://wainetam.github.io/"; // needs to match in my user profile
	// http://wainetam.github.io/";
	if (userId.length) { // validates submission of username
		// send to instagram
		// https://instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
		var url = "https://instagram.com/oauth/authorize/?client_id=" + clientId + "&redirect_uri=" + redirectUri + "&response_type=token";
		window.location = url;
		// get access code substring
	} else {
		alert("You haven't entered in a username! Try again dude.");
	}
}

var getAccessCode = function() {
	var accessUrl = $(location).attr('href');
	// http://your-redirect-uri#access_token=ACCESS-TOKEN
	// http://wainetam.github.io/#access_token=ACCESS-TOKEN
	return accessUrl.substring(41); //start at index = 41, inclusive; string.substring(from, to)
	// index = chars in redirectUri + 26
}

var accessCode = getAccessCode();

$('#lookup').on('click', function() {
	lookupUser();
});
//need to define callback function
$.getJSON("https://api.instagram.com/v1/tags/coffee/media/recent?access_token=" + accessCode + "&callback=callbackFunction", function(result) {
	// do something with result
	console.log(result);
	});

// sample JSONP code
// https://api.instagram.com/v1/tags/coffee/media/recent?access_token=fb2e77d.47a0479900504cb3ab4a1f626d174d2d&callback=callbackFunction




// var storeAnswer = function() {		
// 	var selected = $("input[name='choice']:checked"); //Q why if move out of function, doesn't work
// 	if (selected.length) {
// 		responseArray.push(parseInt(selected.val())); //parseInt(string) => integer
// 		questionCount++; //move to storeAnswer function?
// 		$('.radio').removeAttr('checked'); //clear answers from prior question
// 	 } else {
// 		 alert("You haven't selected an answer!");
// 	 }
// }

// var loadQuestion = function() {
// 	if (questionCount < questions.length) {
// 		// questionCount++; //move to storeAnswer function? Q: why if this is here that it goes infinite
// 		$('#question_text').text('(Question ' + (questionCount + 1) + ' of ' + questions.length + '): ' + questions[questionCount].q); //load question text
// 		$("label[for='choice0']").text(questions[questionCount].choices[0]); //load answer choices
// 		$("label[for='choice1']").text(questions[questionCount].choices[1]);
// 		$("label[for='choice2']").text(questions[questionCount].choices[2]);
// 	} else {
// 		alert("End of quiz! Check your answers!");
// 		finishedQuiz = true;
// 		addAnswerButton();
// 		addResetButton();
// 	}
// }

// var addAnswerButton = function() {
// 	var answerButton = $('<input type="button" name="submit" value="Check Answers" class="dynamic" id="check_answer" />');
// 	$('#answer_choices').append(answerButton);
// }

// var checkAnswer = function() {
// 	var correctAnswers = 0;
// 	for (var i = 0; i < responseArray.length; i++) {
// 		if (responseArray[i] === answerKey[i]) {
// 			correctAnswers++;
// 		}
// 	}
// 	alert('Congrats! You got ' + correctAnswers + ' correct answers!');
// }

// var addResetButton = function() {
// 	var resetButton = $('<input type="button" name="submit" value="Reset Quiz" class="dynamic" id="reset_quiz" />');
// 	$('#answer_choices').append(resetButton);
// }
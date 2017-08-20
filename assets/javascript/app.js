		
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 10,
		reset: function() {
			countdownTimer.time = 10;
			$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);

			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Who is the NBA MVP in 2017?',
	possibleAnswers : ['A. Stephen Curry',
				 'B. James Harden',
				 'C. Russell Westbrook',
				 'D. Lebron James'],
	flags : [false, false, true, false],
	answer : 'C. Russell Westbrook'
};

var q2 = {
	question: 'Which state is the sunshine state?',
	possibleAnswers: ['A. Texas',
				 'B. Florida',
				 'C. Ohio',
				 'D. Massachusetts'],
	flags : [false, true, false, false],
	answer : 'B. Florida'
};

var q3 = {
	question : 'What Arizona state nickname?',
	possibleAnswers : ['A. The Grand Canyon State',
				 'B. The Golden State',
				 'C. The Constitution State',
				 'D. The Last Frontier'],
	flags : [true, false, false, false],
	answer : 'A. The Grand Canyon State'
};

var q4 = {
	question : 'How many state in usa?',
	possibleAnswers : ['A. 38',
				 'B. 45',
				 'C. 50',
				 'D. 55'],
	flags : [false, false, true, false],
	answer : 'C. 50'
};

var q5 = {
	question : 'How many championships do the warriors have?',
	possibleAnswers : ['A. 3',
				 'B. 2',
				 'C. 1',
				 'D. 5'],
	flags : [false, false, false, true],
	answer : 'D. 5'
};

var q6 = {
	question : 'Who has won the most NBA championships?',
	possibleAnswers : ['A. The Lakers',
				 'B. Miami Heat',
				 'C. Boston Celtics',
				 'D. Spurs'],
	flags : [false, false, true, false],
	answer : 'C. Boston Celtics'
};



var questionArray = [q1, q2, q3, q4, q5, q6,];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}



setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});
		
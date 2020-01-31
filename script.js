$(document).ready(function(){
    // my counter
    var helper = 0;
    // my questions
    var questions = [
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        },
        {
          title: "The condition in an if / else statement is enclosed within ____.",
          choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
          answer: "parentheses"
        },
        {
          title: "Arrays in JavaScript can be used to store _________",
          choices: ["numbers and strings", "other arrays", "booleans", "all-of-the-above"],
          answer: "all-of-the-above"
        },
        {
          title: "String values must be enclosed within _____ when being assigned to variables.",
          choices: ["commas", "curly brackets", "quotes", "parentheses"],
          answer: "quotes"
        },
        {
          title: "A very useful tool used during debuggingfor printing content to the debugger is:",
          choices: ["JavaScript", "terminal/ bash", "for loops", "console.log"],
          answer: "console.log"
          },
    ]
    // starting time
    var secondsLeft = (questions.length) * 15; 
    // start functionality
    $("#start").on("click", function () {
        $('#startText').remove();
        loadQandA();
        setTimer();
    });
    
    // timer
    function setTimer(){
        $("#countdown-timer").text(secondsLeft);
    var countdown = setInterval(function(){
        secondsLeft--;
        $("#countdown-timer").text(secondsLeft);
        if (secondsLeft <=0) {
            clearInterval(countdown);
        }
    }, 1000);
    }
    
    
    
    // questions and answers
    function loadQandA() {
        choices = questions[helper].choices;
        var question = questions[helper].title;
        $('.questions').html(question);
        for (var i = 0; i < 4; i++) {
            var displayAnswer = questions[helper].choices[i];
            $('.answers').append('<h4 class= "button-answer" id=' + displayAnswer + '>' + displayAnswer + '</h4><br>');
        }
    
        $("h4").click(function () {
            var id = $(this).attr('id');
            var answer = questions[helper].answer;
            if (id === answer) {
                answered = true;
                console.log("correct") 
                helper++;
                console.log(helper);
                correct();
    
            } else {
                answered = true; 
                console.log("incorrect")
                helper++;
                console.log(helper);
                wrong();
            }
        });
    
    //correct
    function correct(){
        resetEvent();
    }
    //failed
    function wrong(){
        resetEvent();
        timerDown();
    }
    
    function timerStop(){
        $("#timer").remove();
    
    }
    
    function timerDown(){
        secondsLeft = secondsLeft -= 15;
    
    }
    //clear and try to log highscores, plus i need to create a highscore panel of some sorts for the user to see
    function resetEvent(){
        $('.answers').empty();
    
        if (helper < questions.length) {
            loadQandA();
        } else {
        timerStop();
        $('.question').remove();
        $('.show-onclick').append('<div class="form-group"> <label id= "initials" ></label><input class="form-control" placeholder="Enter initials"></div><button id= "highScoresSubmit" class="btn btn-primary">Submit</button>');
        var score = secondsLeft
        $("#initials").append("Your score is: " + score);
        }

        $("#highScoresSubmit").click(function () {
            

            saveSettings();
            loadSettings();
            console.log(highScoreList);
        });

        function loadEntry() {
            // honestly stuck trying to log or append the data inside of an array to reload and maintain a highscore of some sort
            $("#form-control").val().trim(localStorage.initial);
            $("#form-control").val().trim();
        }
        
        function saveEntry() {
            localStorage.initial = $("#form-control").val().trim();
        }
    
            // Close
    function scores (){
        $('.show-onclick').empty();
        $('.show-onclick').append('<button type="button" class="btn btn-info" id= "clear" style= "float:left;">Clear High Scores</button><button type="button" class="btn btn-info" id= "restart" style= "float:right;">Restart</button>');
    
        $("#restart").click(function () {
            location.reload();
        });
    
    
    
    }
    };
    
    };
});
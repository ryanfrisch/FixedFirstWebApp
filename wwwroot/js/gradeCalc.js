var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {

    // this section sets the grade category weights
    const assignmentWeight = .5;
    const groupProjectWeight = .1;
    const quizWeight = .1;
    const examWeight = .2;
    const intexWeight = .1;

    // this section collects the scores from the form
    var assignmentScore = document.getElementById("assignment").value;
    var groupProjectScore = document.getElementById("groupProject").value;
    var quizScore = document.getElementById("quiz").value;
    var examScore = document.getElementById("exam").value;
    var intexScore = document.getElementById("intex").value;

    // this computes the final grade as a percent
    var finalGrade = (assignmentWeight * assignmentScore) + (groupProjectWeight * groupProjectScore) + (quizWeight * quizScore) + (examWeight * examScore) + (intexWeight * intexScore);

    var gradeLetter;

    // this converts the percent into a letter grade
    if (finalGrade >= 94) {
        gradeLetter = "A";
    }
    else if (finalGrade >= 90) {
        gradeLetter = "A-";
    }
    else if (finalGrade >= 87) {
        gradeLetter = "B+";
    }
    else if (finalGrade >= 84) {
        gradeLetter = "B";
    }
    else if (finalGrade >= 80) {
        gradeLetter = "B-";
    }
    else if (finalGrade >= 77) {
        gradeLetter = "C+";
    }
    else if (finalGrade >= 74) {
        gradeLetter = "C";
    }
    else if (finalGrade >= 70) {
        gradeLetter = "C-";
    }
    else if (finalGrade >= 67) {
        gradeLetter = "D+";
    }
    else if (finalGrade >= 64) {
        gradeLetter = "D";
    }
    else if (finalGrade >= 60) {
        gradeLetter = "D-";
    }
    else {
        gradeLetter = "E";
    }

    // this updates the HTML where the message is displayed.
    document.getElementById("gradeMessage").innerHTML = ("Your final grade percent is: " + finalGrade + ". This means you got a letter grade of: " + gradeLetter);
})
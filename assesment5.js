var grade;
function findGrade(grade){
    if(grade >= 90 && grade <= 100)
    console.log("S grade");
    else if(grade >= 80 && grade <= 90)
    console.log("A grade");
    else if(grade >= 70 && grade <= 80)
    console.log("B grade");
    else if(grade >= 60 && grade <= 70)
    console.log("C grade");
    else if(grade >= 50 && grade <= 60)
    console.log("D grade");
    else if(grade >= 40 && grade <= 500)
    console.log("E grade");
    else if (grade >=0 && grade <= 40)
    console.log("Student has failed ");

}
findGrade(grade);

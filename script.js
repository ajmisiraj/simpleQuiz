function quizResult(){
    var score=0;
    if(document.getElementById('correct1').checked)
    {
        score=score+2;
    }
    if(document.getElementById('correct2').checked)
    {
        score=score+2;
    }
    if(document.getElementById('correct3').checked)
    {
        score=score+2;
    }
    if(document.getElementById('correct4').checked)
    {
        score=score+2;
    }
    if(document.getElementById('correct5').checked)
    {
        score=score+2;
    }
    if(score>5){
        alert("Hurray!!!\nYour score is: "+score)
    }
    else if (score==0){
        alert("Oops\nBetter luck next time!\nYour score is: "+score)
    }
    else{
        alert("Hmmm!!\nYou can do better\nYour score is: "+score)
    }
}
function quizAnswers(){
    alert("1-Snow White\n2-Toy Story\n3-The Prisoner of Azkaban\n4-A Brief History of Time\n5-Walt Disney")
}
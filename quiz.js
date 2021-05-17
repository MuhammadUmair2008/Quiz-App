var currentQuestion=0;
    var totalScore=0;
    var cQuestion=document.getElementById('currentQuestion');
    var totalQuestions=document.getElementById('totalQuestions');
    var splashSecreen=document.getElementById('start');
    var quizScreen=document.getElementById('quiz-secreen');
    var x=0;
    var resultSecreen=document.getElementById('resultSecreen');
    var timeLeft=document.getElementById('timeLeft');
    var score=document.getElementById('score');
    var question=document.getElementById('question');
    var opt1=document.getElementById('opt1');
    var opt2=document.getElementById('opt2');
    var opt3=document.getElementById('opt3');
    var opt4=document.getElementById('opt4');
    var btn=document.getElementsByClassName('btn');
    var next=document.getElementById('next');
    var quizQuestions=[
      {
        question:"HTML is a ... ",
        choice1:"Programming Language",
        choice2:"Markup Language",
        choice3:"Rebotic Language",
        choice4:"Machine Language",
        ans:"Markup Language",
      },
         {
        question:"CSS stands for ... ",
        choice1:"Cascading Style Sheet",
        choice2:"Cascading Stylish Sheet",
        choice3:"Case Senstive Sheet",
        choice4:"Cascading Sence Sheet",
        ans:"Cascading Style Sheet",
      },
         {
        question:"Number of Headings available in HTML",
        choice1:"4",
        choice2:"6",
        choice3:"7",
        choice4:"8",
        ans:"6",
      },
         {
        question:"Famous Language use for AI...?",
        choice1:"PHP",
        choice2:"Python",
        choice3:"JavaScript",
        choice4:"Java",
        ans:"Python",
      },
         {
        question:"<ul> Tag is used for....",
        choice1:"Ordred List",
        choice2:"Unordred List",
        choice3:"List Item",
        choice4:"List",
        ans:"Unordred List",
      }
    ];
    function nextQuestion(no){
    Inter(300);
    cQuestion.textContent=" "+(no+1);
    totalQuestions.textContent=" "+quizQuestions.length;
    console.log("number "+no);
    question.textContent=quizQuestions[no].question;
    opt1.textContent=quizQuestions[no].choice1;
    opt2.textContent=quizQuestions[no].choice2;
    opt3.textContent=quizQuestions[no].choice3;
    opt4.textContent=quizQuestions[no].choice4;
  }
    var z=setInterval(function(){
        if(x==1){
          clearInterval(z);
          splashSecreen.style.display="none";
          quizScreen.style.display="block";
          nextQuestion(currentQuestion);
        }
        x++;
    },2000);
    for(var i=0;i<btn.length;i++){
      btn[i].onclick=function(){
        if(this.textContent==quizQuestions[currentQuestion].ans){
            totalScore++;
            if(currentQuestion<4){
            clearInterval(bar);
            currentQuestion++;
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
        else{
          if(currentQuestion<4){
            currentQuestion++;
            clearInterval(bar);
            nextQuestion(currentQuestion);
            console.log(totalScore);
            }else{
              endSecreen();
            }
        }
      }
    }
    var bar;
    function endSecreen(){
      quizScreen.style.display="none";
      resultSecreen.style.display="block";
      score.textContent=totalScore;
    }
    function Inter(set){
    var statusTime=set;
    timeLeft.style.width=statusTime+"px";
    bar=setInterval(function(){
     if(statusTime==0){
         clearInterval(bar); 
          if(currentQuestion<4){
            currentQuestion++;
            nextQuestion(currentQuestion);
          }
          else{
            endSecreen();
          } 
           
        }
        timeLeft.style.width=statusTime+"px";
        statusTime=statusTime-30;
    },1000); 
   }
  next.onclick=function(){
    if(currentQuestion<4){
    currentQuestion++;
    nextQuestion(currentQuestion);
    }
    else{
      endSecreen();
    }
   
  }
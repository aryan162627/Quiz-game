class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
background("purple")
    //write code to show a heading for showing the result of Quiz
text("Result of Quix",400,30)
    //call getContestantInfo( ) here
    
    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){

    }
    //write code to add a note here
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("Note : Contastant who answered correct are heighlighted in green colour !",130, 230);
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red");
    }

  }

}

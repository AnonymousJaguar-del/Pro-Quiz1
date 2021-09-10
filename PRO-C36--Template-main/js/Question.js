class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    this.message1 = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Can you solve this Question?");
    this.title.position(250, 0);

    this.question.html("Which Riverine Island is found in the River Brahmaputra? " );
  

    this.question.position(150, 150);
    this.option1.html("(A) Umananda Island" );
    this.option1.position(150, 180);
    this.option2.html("(B) Majuli Island" );
    this.option2.position(150, 200);
    this.option3.html("(C) Elephanta Island" );
    this.option3.position(150, 220);
    this.option4.html("(D) Neil Island" );
    this.option4.position(150, 240);

    this.input1.position(200, 350);
    this.input2.position(475, 350);
    this.button.position(400, 400);

    this.button.mousePressed(()=>{
      
      this.message.html("THANK YOU FOR ATTEMPTING THE QUIZ.");
      this.message1.html("YOUR ANSWER HAS BEEN RECORDED.");
      this.message.position(180, 450);
      this.message1.position(195, 480);
    });
  }
}

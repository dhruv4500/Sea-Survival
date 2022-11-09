class Form{
    constructor(){

        this.title=createElement("h1")
        this.askName=createElement("h1");
        this.inName=createInput("").attribute('placeholder','Type name here').attribute('class','textbox');
        this.button=createButton("Enter Game").attribute('class','button1');

        this.loseTitle=createElement("h1")
        this.hint=createElement("h3")
    }

    getPlayerDetails(){
        this.loseTitle.hide()
        player.scor.hide()
        player.health.hide();
        this.title.html("Let the Quest Begin! Survive your Seahorse for 3-4 minutes!");
        this.title.position(width/4,100);

        this.askName.html("What is Your Name?");
        this.askName.position(100,190);

        this.inName.position(110,265);
        
        this.button.position(300,340);

        this.hint.html("Hint: Some Piranas Will not harm you! Kill one many will be Killed!")
        this.hint.position(width/5,height)

        this.button.mousePressed(()=>{
            user = this.inName.value();

            player.updatePlayerName(user);

            
            game.start();
            gameState=1;

            this.title.hide();
            this.askName.hide();
            this.inName.hide();
            this.button.hide();
            this.hint.hide();

            
    document.getElementById("intro").pause()
    
    document.getElementById("game").play()



        })
 
    }

    end(){
        this.loseTitle.show()
        this.loseTitle.html("Sorry "+player.name+"! The Sea horse has 0% life. Better Luck next Time!")
        this.loseTitle.position(100,200)
        
    document.getElementById("game").pause()
    
    document.getElementById("lose").play()

    }
    win(){
        
        this.loseTitle.show()
        this.loseTitle.html("Well done "+player.name+"! The Sea horse has "+player.score+"% life. You have cracked the Game!")
        this.loseTitle.position(100,200)
        
    document.getElementById("game").pause()
    
    document.getElementById("win").play()
    }


}
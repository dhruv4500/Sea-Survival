class Game{
    constructor(){

        this.smallKill=2;
        this.bigKill=4

    }

    formStart(){
        form=new Form;
        form.getPlayerDetails();

    }

    start(){
        
        smallFishGroup = new Group();
        smallFishGroup2 = new Group();
        bigFishGroup = new Group();
        fireGroup = new Group()
        whaleGroup = new Group()

        smallFishGroup3 = new Group();
        smallFishGroup4 = new Group();
        bigFishGroup2 = new Group();
        whaleGroup2 = new Group()
        life=new Group()

        gamer=createSprite(120,300,100,200);
        gamer.addImage(gamerIMG)
        gamer.scale=0.7



    }

    play(){
        player.health.hide()
        console.log(frameCount)
        drawSprites()
        player.scoreDis()
        gamer.setCollider("rectangle",0,0,110,300)
        gamer.debug=false;

        if(player.score<90){
        if(frameCount%40==0){
            var lifeSprite = createSprite(2100,Math.round(random(20,500)),50,50);
            lifeSprite.addImage(lifeIMG);
            lifeSprite.scale=0.4
            lifeSprite.velocityX=-9;
            lifeSprite.debug=false;
            life.add(lifeSprite)

        }
    }
    
    if(player.score>100){
        player.score=100
    }

        if(frameCount%15==0){
            var smallFish=createSprite(2100, Math.round(random(20, 530)), 100, 70);  
            smallFish.addImage(smallFishIMG)
            smallFish.scale=0.6;
            smallFish.velocityX=-9;
            smallFish.lifeTime=2000;
            smallFish.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup.add(smallFish);
        }
        if(frameCount%30==0){
            var smallFish2=createSprite(2100, Math.round(random(20, 530)), 100, 70);  
            smallFish2.addImage(smallFishIMG)
            smallFish2.scale=0.6;
            smallFish2.velocityX=-9;
            smallFish2.lifeTime=2000;
            smallFish2.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup2.add(smallFish2);
        }
        if(frameCount%30==0){
            var smallFish3=createSprite(2100, Math.round(random(20, 530)), 100, 70);  
            smallFish3.addImage(smallFishIMG)
            smallFish3.scale=0.6;
            smallFish3.velocityX=-9;
            smallFish3.lifeTime=2000;
            smallFish3.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup3.add(smallFish3);
        }
        
        if(frameCount%30==0){
            var smallFish4=createSprite(2100, Math.round(random(20, 530)), 100, 70);  
            smallFish4.addImage(smallFishIMG)
            smallFish4.scale=0.6;
            smallFish4.velocityX=-9;
            smallFish4.lifeTime=2000;
            smallFish4.setCollider("rectangle",0,0,200, 200);
            //smallFish.debug=true;
            smallFishGroup4.add(smallFish4);
        }
        
        if(frameCount%300==0){
            var bigFish=createSprite(2100, Math.round(random(20, 500)), 100, 70);  
            bigFish.addImage(bigFishIMG)
            bigFish.scale=2;
            bigFish.velocityX=-4;
            bigFish.lifeTime=2000;
            bigFish.setCollider("rectangle",0,0,190, 60);
            //bigFish.debug=true;
            bigFishGroup.add(bigFish);
            
        }
        if(frameCount%300==0){
            var bigFish2=createSprite(2100, Math.round(random(20, 500)), 100, 70);  
            bigFish2.addImage(bigFishIMG)
            bigFish2.scale=2;
            bigFish2.velocityX=-4;
            bigFish2.lifeTime=2000;
            bigFish2.setCollider("rectangle",0,0,190, 60);
            //bigFish.debug=true;
            bigFishGroup2.add(bigFish2);
            
        }
        
        if(frameCount%100==0){
            var whale=createSprite(2100, Math.round(random(20, 580)), 100, 70);  
            whale.addImage(whaleIMG)
            whale.scale=0.5;
            whale.velocityX=-4;
            whale.lifeTime=2000;
            whale.setCollider("rectangle",-10,-10,800, 150);
            //whale.debug=true;
            whaleGroup.add(whale);
            
        }
        if(frameCount%100==0){
            var whale2=createSprite(2100, Math.round(random(20, 580)), 100, 70);  
            whale2.addImage(whaleIMG)
            whale2.scale=0.5;
            whale2.velocityX=-4;
            whale2.lifeTime=2000;
            whale2.setCollider("rectangle",-10,-10,800, 150);
            //whale.debug=true;
            whaleGroup2.add(whale2);
            
        }

        if(gamer.isTouching(bigFishGroup)){
            console.log(player.score)
            player.updateScore(-15)
            bigFishGroup.destroyEach();
        }
        
        if(gamer.isTouching(bigFishGroup2)){
            player.updateScore(-25)
            bigFishGroup2.destroyEach();
        }

        if(gamer.isTouching(whaleGroup)){
            player.updateScore(-24)
            whaleGroup.destroyEach();
        }
        if(gamer.isTouching(whaleGroup2)){
            player.updateScore(-25);
            whaleGroup2.destroyEach();
        }

        if(gamer.isTouching(smallFishGroup)){
            console.log(player.score)
            player.updateScore(-8)
            smallFishGroup.destroyEach();
        }
        if(gamer.isTouching(smallFishGroup3)){
            console.log(player.score)
            player.updateScore(-16)
            smallFishGroup3.destroyEach();
        }
        if(gamer.isTouching(smallFishGroup4)){
            console.log(player.score)
            player.updateScore(-10)
            smallFishGroup4.destroyEach();
        }


        if(gamer.isTouching(edges)){
            gamer.bounceOff(edges)
        }

        if(keyDown ("down_arrow")){
            gamer.y=gamer.y+13
        }
    
        if(keyDown ("up_arrow")){
            gamer.y=gamer.y-13
        }

        if(keyDown ("right_arrow")){
            gamer.x=gamer.x+9
        }
    
        if(keyDown ("left_arrow")){
            gamer.x=gamer.x-9
        }

        if(keyDown ("space")){
            var hit=createSprite(gamer.x+51,gamer.y-38,7,5);
            hit.addImage(fireBallImage)
            hit.scale=0.02
            hit.velocityX=8;
            hit.debug=false;
            hit.setCollider("rectangle",0,0,7,5)
            hit.lifetime=350;
            fireGroup.add(hit)

        }
        if(gamer.isTouching(life)){
            if(player.score!=100){
                player.updateScore(15);
                life.destroyEach();
                
    document.getElementById("lifeGain").play()
                if(player.score>100){
                    player.score=100;
                }
                }
        }
        
        if(fireGroup.isTouching(smallFishGroup)){
            this.smallKill-=1
            fireGroup.destroyEach()
            if(player.score!=100){
                player.updateScore(2);
                }
        }
        if(fireGroup.isTouching(whaleGroup)){
            fireGroup.destroyEach();
            whaleGroup.destroyEach();
            
    document.getElementById("kill").play()
            if(player.score!=100){
                player.updateScore(5);
                }
        }
        if(fireGroup.isTouching(whaleGroup2)){
            fireGroup.destroyEach();
            whaleGroup2.destroyEach();
            
    document.getElementById("kill").play()
            if(player.score!=100){
                player.updateScore(5);
                }
        }
        if(fireGroup.isTouching(smallFishGroup3)){
            fireGroup.destroyEach();
            smallFishGroup3.destroyEach();
            if(player.score!=100){
                player.updateScore(1);
                }
        }
        if(fireGroup.isTouching(smallFishGroup4)){
            fireGroup.destroyEach();
            smallFishGroup4.destroyEach();
            if(player.score!=100){
                player.updateScore(1);
                }
        }
        if(fireGroup.isTouching(smallFishGroup2)){
            this.smallKill-=2
        }
        if(fireGroup.isTouching(bigFishGroup)){
            this.bigKill-=1
            fireGroup.destroyEach()
            
        }
        if(fireGroup.isTouching(bigFishGroup2)){
            this.bigKill-=1
            fireGroup.destroyEach()
        }
        if(this.smallKill<0){
            smallFishGroup2.destroyEach();
            fireGroup.destroyEach();
            if(player.score!=100){
                player.updateScore(3);
                }
        }
        
        if(this.smallKill<0){
            smallFishGroup.destroyEach()
            fireGroup.destroyEach()
            this.smallKill=3
            if(player.score!=100){
                player.updateScore(1);
                }
        }
    
        if(this.bigKill<0){
            bigFishGroup.destroyEach()
            fireGroup.destroyEach()
            this.bigKill=4
            
    document.getElementById("kill").play()
            if(player.score!=100){
            player.updateScore(7)
            }
        }
        if(player.score<20){
            
        player.health.show()
        }

        if(player.score<1){
            player.end()
        }

        if(frameCount>3000){
            player.win()
        }

    }
    end(){
        bigFishGroup.destroyEach();
        smallFishGroup.destroyEach();
        smallFishGroup2.destroyEach();
        fireGroup.destroyEach();
        clear();


    }
    
    win(){
        bigFishGroup.destroyEach();
        smallFishGroup.destroyEach();
        smallFishGroup2.destroyEach();
        fireGroup.destroyEach();
        clear();

    }

}
class venus_planet{
    constructor(){
        createCanvas(1500,700)
      background(venusBgImg)

      volcanoGroup = new Group();
      for(var i = 0; i<10; i++){
        var x,y
        x = random(1000, 300)
        y = random(700, 100)

         volcanosez = createSprite(x,y)
        volcanosez.addImage(volcanaosImg)
        volcanosez.scale = 0.25
        volcanoGroup.add(volcanosez)
      }
    
    }

    play(){

    }

    

}


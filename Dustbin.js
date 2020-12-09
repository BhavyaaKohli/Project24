class Dustbin {



}


box1 = Bodies.rectangle( 400,649,200,20, {isStatic:true} , bounce)
World.add(world,box1)

box2 = Bodies.rectangle(300,610,20,100, {isStatic:true} , bounce)
World.add(world,box1)


box3 = Bodies.rectangle(510,610,20,100, {isStatic:true} , bounce)
World.add(world,box1)

display()
{
    rectMode(CENTER) 
}
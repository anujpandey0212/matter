

 var Engine = Matter.Engine,
 Render = Matter.Render,
 Runner = Matter.Runner,
 Composites = Matter.Composites,
 MouseConstraint = Matter.MouseConstraint,
 Mouse = Matter.Mouse,
 Composite = Matter.Composite,
 Bodies = Matter.Bodies;

 // create engine
 var engine = Engine.create(),
     world = engine.world;

 // create renderer
 var render = Render.create({
     element: document.body,
     engine: engine,
     options: {
         width: window.innerWidth-25,
         height: window.innerHeight-25,
         showAngleIndicator: true,
         showCollisions: true
     }
 });

 Render.run(render);

 // create runner
 var runner = Runner.create();
 Runner.run(runner, engine);        
//add bodies
Composite.add(world, [
    // walls
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
]);

Composite.add(world, [
    Bodies.rectangle(200, 150, 400, 20, { isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: '#060a19' }}),
    Bodies.rectangle(500, 350, 650, 20, { isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: '#060a19' }}),
    Bodies.rectangle(300, 560, 600, 20, { isStatic: true, angle: Math.PI * 0.04, render: { fillStyle: '#060a19' }})
]);        

let angle = 0;

let kitten;

let cam;

function setup() {
	createCanvas(400, 300, WEBGL);
}

function preload(){
	kitten = loadImage('Zucc_8575f0_6576694.jpg');
}

function draw() {
	//ambientLight(255, 0, 0);
	let dx = mouseX - width/2;
	let dy = mouseY - height/2;
	let v = createVector(dx, dy, 0);
	v.div(100);
	ambientLight(255);
	background(175);

	rotateX(angle);
	rotateZ(angle * 0.3);
	rotateY(angle * 1.4);

	noStroke();

	texture(kitten);
	box(100);
	//torus(100, 10);
	//ambientMaterial(255);


	angle += 0.01;
}

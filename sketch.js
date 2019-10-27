let angle = 0;

function setup() {
	createCanvas(400, 300, WEBGL);
}

function draw() {

	let dx = mouseX - width/2;
	let dy = mouseY - height/2;
	let v = createVector(dx, dy, 0);
	v.normalize();
	directionalLight(255, 255, 0, v);
	//pointLight(255, 0, 0, mouseX -200, mouseY- 200, 200);

	background(175);

	noStroke();
	//normalMaterial();
	//fill(200, 0, 255);
	rotateX(angle);
	rotateZ(angle * 0.3);
	rotateY(angle * 1.4);
	//rect(0, 0, 150, 150);
	//translate(mouseX - width/2, mouseY-height/2);
	//translate(0, 0, mouseX);

	//pointLight(255, 0, 0, mouseX-200, mouseY-200, 0);
	ambientMaterial(255);
	torus(100, 10);

	angle += 0.01;
}

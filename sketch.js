let angle = 0;

let kitten;

let cam;

function setup() {
	createCanvas(400, 300, WEBGL);
}

function preload(){
	kitten = loadImage('assets/Zucc_8575f0_6576694.jpg');
}

function draw() {
	//orbitControl();
	//ambientLight(255, 0, 0);
	let dx = mouseX - width/2;
	let dy = mouseY - height/2;
	let v = createVector(dx, dy, 0);
	v.div(100);
	//ambientLight(255);
	background(0);

	/*let camx = random(-5, 5);
	let camy = random(-5, 5);
	let camz = random(-5, 5);
	camera(camx, camy, camz + (height/2) / tan(PI/6), camx, 0, 0, 0, 1, 0);*/

	//let fov = PI / 3;
	//let cameraZ = (height / 2.0) / tan(fov/2.0);
	//perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);

	pointLight(255, 255, 255, 0, -200, 200);

	for(let x = -200; x < 200; x += 50){
		push();
		translate(x, 0, x - 200);
		rotateX(angle);
		rotateY(angle * 0.3);
		rotateZ(angle * 1.2);
		ambientMaterial(255);
		box(25);
		pop();
	}

	ortho(-200, 200, 200, -200, -1000, 1000);

	/*var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );

	var controls = new THREE.OrbitControls( camera, renderer.domElement );*/

	/*texture(kitten);
	torus(100, 10);
	ambientMaterial(255);*/


	angle += 0.03;
}

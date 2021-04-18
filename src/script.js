import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import unitBox from './objects/unitBox.js';


//Object manipulation panel
const gui = new dat.GUI();

//Canvas
const canvasOne = document.querySelector('canvas.graphics');

//Scene
const scene = new THREE.Scene();

//axes reference
const axesHelper = new THREE.AxesHelper( 500 );
scene.add( axesHelper );


//add objects to scene
scene.add(unitBox);
unitBox.position.set(0.5, 0.5, 0.5); //since box length is 1 and position is center of box



//Lights
const pointLight1 = new THREE.PointLight(0xffffff, 1)
pointLight1.position.x = 5;
pointLight1.position.y = 5;
pointLight1.position.z = 5;
scene.add(pointLight1);



var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;


window.addEventListener('resize', () =>
    {
        // Update sizes
        windowWidth = window.innerWidth
        windowHeight = window.innerHeight

        // Update camera
        camera.aspect = windowWidth / windowHeight
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(windowWidth, windowHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


//Camera
const camera = new THREE.PerspectiveCamera(75, windowWidth/windowHeight, 0.1, 100);
camera.position.x = 5;
camera. position.y = 5;
camera.position.z = 15;
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvasOne,
    alpha: true
});
renderer.setSize(windowWidth, windowHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Actions
document.addEventListener('keydown', (event)=> {
    //left arrow key decreases X
    if(event.keyCode == '37') {
        camera.position.x--;
        console.log(camera.position.x);
    }
    //right arrow key increases X
    if(event.keyCode == '39') {
        camera.position.x++; 
        console.log(camera.position.x);
    }
    
    //down arrow key decreases Y
    if(event.keyCode == '40') {
        camera.position.y--;
        console.log(camera.position.y);
    }

    //up arrow key increases Y
    if(event.keyCode == '38'){
        camera.position.y++;
        console.log(camera.position.y);
    }

    //left control decreases Z
    if(event.keyCode == '17') {
        camera.position.z--;
        console.log(camera.position.z);
    }

    //spacebar increases Z
    if(event.keyCode == '32') {
        camera.position.z++;
        console.log(camera.position.z);
    }
});

var controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableDamping = true;

//Animation
const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // Update objects
    unitBox.rotation.x = .5 * elapsedTime;
    unitBox.rotation.y = .5 * elapsedTime;
    
    // Render
    renderer.render(scene, camera);
    
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}
tick()


console.log("Seeing this console.log means no errors");
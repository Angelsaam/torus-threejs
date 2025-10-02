import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;
controls.update();

const size = 10;
const divisions = 10;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

const light = new THREE.AmbientLight( 0xffffff, 2.5 ); // soft white light
scene.add( light );

// Load image
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/images/texturesdonut.jpg');
const texture2 = textureLoader.load('./assets/images/textureLava.jpg');


texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(7, 7);

// Torus 1
const geometry = new THREE.TorusGeometry(1.5, 0.5, 8, 50 ); 
const material = new THREE.MeshStandardMaterial( { color: 0xffffff, map: texture } ); 
const torus = new THREE.Mesh( geometry, material ); 
scene.add( torus );

// Torus 2
const geometry2 = new THREE.TorusGeometry(1.5, 0.5, 8, 50 ); 
const material2 = new THREE.MeshStandardMaterial( { color: 0xffffff, map: texture2 } ); 
const torus2 = new THREE.Mesh( geometry2, material2 ); 
scene.add( torus2 );

torus2.position.x = 5;

// Torus 3
const geometry3 = new THREE.TorusGeometry(1.5, 0.5, 8, 50 ); 
const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const torus3 = new THREE.Mesh( geometry3, material3 ); 
scene.add( torus3 );

torus3.position.x = -5;

function animate() {
  controls.update();
  renderer.render( scene, camera );

}
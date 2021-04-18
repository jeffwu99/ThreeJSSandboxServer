import * as THREE from 'three';
import '../textures/normalmap.jpg';

//textures
const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('normalmap.jpg');
//shapes

//object creation
const box = new THREE.BoxGeometry(1,1,1);
//materials
const boxMaterial = new THREE.MeshStandardMaterial();
boxMaterial.color = new THREE.Color('rgb(225, 198, 153)');
boxMaterial.normalMap = normalTexture;
// mesh
const unitBox = new THREE.Mesh(box, boxMaterial);


export default unitBox;
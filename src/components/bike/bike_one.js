import * as THREE from 'three';

// 1. Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Materials
const aluminumMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.8, roughness: 0.2 });
const steelMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 1.0 });

// 3. The Central Frame & Torsion Bar
const frameSpine = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 2), aluminumMat);
scene.add(frameSpine);

const torsionBar = new THREE.Group(); // Group allows us to rotate the whole assembly
const barGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 32);
const barMesh = new THREE.Mesh(barGeometry, steelMat);
barMesh.rotation.z = Math.PI / 2;
torsionBar.add(barMesh);
scene.add(torsionBar);

// 4. Single A-Arms (Swing Arms)
function createArm(side) {
    const armGroup = new THREE.Group();
    const armBody = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.1), aluminumMat);
    armBody.position.x = 0.4 * side;
    
    // Placeholder Wheel
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.02, 16, 100), steelMat);
    wheel.position.x = 0.8 * side;
    wheel.rotation.y = Math.PI / 2;
    
    armGroup.add(armBody);
    armGroup.add(wheel);
    return armGroup;
}

const leftArm = createArm(-1);
const rightArm = createArm(1);
torsionBar.add(leftArm);
torsionBar.add(rightArm);

// 5. Lighting & Positioning
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light, new THREE.AmbientLight(0x404040));
camera.position.set(2, 2, 4);
camera.lookAt(0, 0, 0);

// 6. Animation Logic (Simulating the Actuator)
let tiltAngle = 0;
function animate() {
    requestAnimationFrame(animate);
    
    // Simulating "Active Tilt" - The Torsion bar rotates, 
    // causing one wheel to rise and the other to fall
    tiltAngle = Math.sin(Date.now() * 0.002) * 0.3; 
    torsionBar.rotation.z = tiltAngle;
    
    renderer.render(scene, camera);
}
animate();
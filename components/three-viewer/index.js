import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class ThreeViewerComponent {
    // Снова принимаем готовый HTML-элемент (parent)
    constructor(parent, modelPath) {
        this.parent = parent;
        this.modelPath = modelPath;
    }

    render() {
        if (!this.parent) return; // Защита от ошибок

        const scene = new THREE.Scene();
        // Используем clientWidth родителя
        const camera = new THREE.PerspectiveCamera(75, this.parent.clientWidth / 400, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(this.parent.clientWidth, 400);

        // Вставляем канвас прямо в переданный элемент (как было до этого)
        this.parent.appendChild(renderer.domElement);

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        const loader = new GLTFLoader();
        loader.load(this.modelPath, (gltf) => {
            const model = gltf.scene;
            const box = new THREE.Box3().setFromObject(model);
            model.position.sub(box.getCenter(new THREE.Vector3()));
            scene.add(model);
        });

        camera.position.z = 5;
        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }
}

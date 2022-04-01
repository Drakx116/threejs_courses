import * as THREE from 'three';

export class App
{
  private readonly renderer: THREE.Renderer;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly cube: THREE.Mesh;

  constructor(
    renderer: THREE.Renderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    cube: THREE.Mesh
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.cube = cube;

    this.scene.add(this.cube);
  }

  run()
  {
    this.processFrame(0);
  }

  static create(): App
  {
    const [ width ,height ] = App.getScreenSize();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
    camera.position.z = 2;

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
      })
    );

    document.body.appendChild(renderer.domElement);

    const app = new App(renderer, scene, camera, cube);

    window.addEventListener('resize', app.onWindowResize.bind(app), false);

    return app;
  }

  private onWindowResize()
  {
    const [ width ,height ] = App.getScreenSize();

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.render();
  }

  private static getScreenSize()
  {
    return [ window.innerWidth, Math.max(1, window.innerHeight) ];
  }

  private render()
  {
    this.renderer.render(this.scene, this.camera);
  }

  private processFrame(time: Number)
  {
    requestAnimationFrame(this.processFrame.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.render();
  }
}

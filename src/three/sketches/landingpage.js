export default class LandingPageSketch {
    constructor() {
        this.sceneMain = new THREE.Scene();

        this.container = document.querySelector("#default-layout");
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.aspect = this.width / this.height;
        this.renderer = new THREE.WebGLRenderer({
            powerPreference: "high-performance",
            antialias: true,
        });
        this.dpr = Math.max(window.devicePixelRatio, 2);
        this.renderer.setPixelRatio(this.dpr);

        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xf9f9f9);
        this.renderer.outputEncoding = THREE.sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);
        this.cameraZ = 600;
        this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.01, 2000);
        this.camera.position.set(0, 0, this.cameraZ);
        this.camera.fov = 2 * Math.atan((this.height / 2) / this.cameraZ) * (180 / Math.PI);

        //orbit controls
        this.clock = new THREE.Clock();
        this.time = 0;
        this.materials = [];

        this.scrollPos = 0;
        this.previousScroll = 0;
        this.currentScroll = 0;

        window.removeEventListener("resize", this.resize);
        // window.removeEventListener("mousemove", this.mouseMove, false);
        window.removeEventListener("scroll", this.scroll);
        window.addEventListener("resize", this.resize);
        // window.addEventListener("mousemove", this.mouseMove, false);
        window.addEventListener("scroll", this.scroll);
    }
}
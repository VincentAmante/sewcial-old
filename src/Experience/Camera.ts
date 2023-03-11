import * as THREE from 'three'
import Experience from './Experience'
import { OrbitControls } from 'three/examples/jsm/controls/orbitcontrols'
import gsap from 'gsap'
import { PerspectiveCamera } from 'three'

export default class Camera {

    // * Defining some as being capable of being `null` or `undefined` erases typescript's worries that the values aren't initialised

    experience: Experience
    scene: THREE.Scene
    sizes: import("d:/Projects/sewcial/src/Experience/Utils/Sizes").default
    canvas: HTMLCanvasElement | null
    instance: any
    perspectiveCamera: THREE.PerspectiveCamera | undefined
    frustrum: number | undefined
    orthographicCamera: THREE.OrthographicCamera | undefined
    controls: OrbitControls | undefined
    cam: boolean | undefined

    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas
        console.log(this.experience, this.sizes, this.scene, this.canvas)
        this.setInstance()
        this.setControls()
    }


    setInstance(){
        // Switch between either perspective or ortho
        this.instance = this.createPerspectiveCamera()

        this.instance.position.x = -10
        this.instance.position.y = -6.8
        this.instance.position.z = -10

        this.instance
        console.log(this.instance.rotation)
        this.scene.add(this.instance)

        console.log('Camera instance')
        console.log(this.instance)
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new PerspectiveCamera(35, this.sizes.aspect, 0.1, 1000)
        return this.perspectiveCamera
    }

    createOrthographicCamera(){
        this.sizes.frustrum = 5
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        )
    }

    resize(){
        if (this.perspectiveCamera != null){
            this.perspectiveCamera.aspect = this.sizes.aspect
            this.perspectiveCamera.updateProjectionMatrix()   
        }
        
        console.log(this.instance.rotation)
        // this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2
        // this.orthographicCamera.right =  (this.sizes.aspect * this.sizes.frustrum) / 2
        // this.orthographicCamera.top = this.sizes.frustrum / 2
        // this.orthographicCamera.bottom = -this.sizes.frustrum / 2
    }

    setControls()
    {
        if (this.canvas === null) return;

        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.enablePan = false
        this.controls.rotateSpeed = 1.2
        this.controls.zoomSpeed = 0.8
        this.controls.target.z = -1
        this.controls.enableRotate = true
        this.controls.enableZoom = true

        // Set Limitations
        this.controls.minDistance = 7
        this.controls.maxDistance = 50
        this.controls.minAzimuthAngle = 0 
        this.controls.maxAzimuthAngle = Math.PI *1.9999
        this.controls.minPolarAngle = Math.PI *0.2
        this.controls.maxPolarAngle = Math.PI * 0.45
        this.cam = false
    }

    update(){
        if (this.controls === null || this.controls === undefined) return;
        this.controls.update()
    }
}
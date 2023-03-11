import { EventEmitter } from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import Experience from "../Experience";
import * as THREE from "three";

export default class Resources extends EventEmitter {
    experience: Experience;
    renderer: any;
    assets: any;
    items: {
        name?: string | undefined
    };
    queue: any;
    loaded: number;
    loaders: any;
    video: any;
    videoTexture: any;

    constructor(assets: any){
        super()
        this.experience = new Experience()
        this.renderer = this.experience.renderer
        this.assets = assets

        this.items = {}
        this.queue = this.assets.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders(){
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.dracoLoader = new DRACOLoader()
        this.loaders.dracoLoader.setDecoderPath('/Experience/draco/')
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
    }

    startLoading(){
        for (const asset of this.assets){
            if (asset.type === 'glbModel'){
                this.loaders.gltfLoader.load(asset.path, (file: any) => {
                    this.singleAssetLoaded(asset, file)
                })
            } else if (asset.type === 'videoTexture'){
                this.video = {}
                this.videoTexture = {}

                this.video[asset.name] = document.createElement('video')
                this.video[asset.name].src = asset.path
                this.video[asset.name].muted = true
                this.video[asset.name].playsInLine = true
                this.video[asset.name].autoplay = true
                this.video[asset.name].loop = true
                this.video[asset.name].play()

                this.videoTexture[asset.name] = new THREE.VideoTexture(
                    this.video[asset.name]
                )
                this.videoTexture[asset.name].flipY = true
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter
                this.videoTexture[asset.name].magFilter = THREE.NearestFilter
                this.videoTexture[asset.name].generateMipmaps = true
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding

                this.singleAssetLoaded(asset, this.videoTexture[asset.name])
            }
        }
    }

    singleAssetLoaded(asset: { name: string | undefined }, file: any){
        if (asset.name === undefined) return;
        this.items[asset.name as keyof typeof this.items] = file
        this.loaded++

        console.log(file)


        console.log('[ asset loading.. ]')
        if (this.loaded === this.queue){
            console.log('[ all assets Loaded ]')
            this.emit('assets-ready')
        }
    }
}
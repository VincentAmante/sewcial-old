import * as THREE from 'three'
import Experience from '../Experience'

export default class Room {
    experience: Experience
    scene: any
    resources: any
    room: any
    actualRoom: any

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene

        this.setModel();
    }

    setModel(){
        this.actualRoom.children.forEach((child: any) => {
            child.castShadow = true
            child.receiveShadow = true

            if (child instanceof THREE.Group){
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true
                    groupChild.receiveShadow = true
                })
            }
        })

        this.scene.add(this.actualRoom)
    }
}
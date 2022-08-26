import { randomUUID } from "node:crypto";
export class CharacterEntity {
    constructor(char){
        this.id = char.id ?? randomUUID();
        this.name = char.name;
        this.image = char.image;
        this.userId = userId;
    }

    getCharacter(){
        return{
            id: this.id,
            name: this.name,
            image: this.image,
            userId: this.userId,
        };
    }
}
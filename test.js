import { UserEntity } from "./entities/user.js";

const user = new UserEntity ({
    name: "Felipe",
    email: "testandoapi@mail.com",
    password: "senhasegura",
    image: "http://image.com",
    characters: [{
        id: '57098114-4855-4b50-b488-6a303c4de7d9',
        name: 'Tomas Shelby',
        image: 'htpp://imageShelby.com',
        userId: '217710c0-cb41-48e5-adf8-6ac4779d4f93'  
    }]
});

user.addCharacter({
    name: "Rick",
    image: "htpp://imageRick.com",
});

console.log(user.getUser());
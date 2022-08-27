import { UserRepositoryMongoDb } from "./database/repository/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/createUser.js";

const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);

const newUser = await createUserUseCase.execute({
    name: "Felipe",
    email: "testandoapi@mail.com",
    password: "senhasegura",
    image: "http://image.com",
});

console.log(newUser);
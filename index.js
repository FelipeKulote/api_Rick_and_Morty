import { MongoDbConnection } from "./database/repository/mongo/connection/connect.js";
import { UserRepositoryMongoDb } from "./database/repository/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/createUser.js";


const database = new MongoDbConnection()
await database.ConnectDb().catch((err) => {
  console.log(err);
})

const repository = new UserRepositoryMongoDb();
const createUserUseCase = new CreateUserUseCase(repository);

const newUser = await createUserUseCase.execute({
  name: "Felipe",
  email: "testandoapi@mail.com",
  password: "senhasegura",
  image: "http://image.com",
});

console.log(newUser);

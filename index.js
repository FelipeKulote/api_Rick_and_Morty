import { MongoDbConnection } from "./database/repository/mongo/connection/connect.js";
import { UserRepositoryMongoDb } from "./database/repository/userRepository.js";
import { CreateUserUseCase } from "./services/usecases/createUser.js";
import { FindUserByIdUseCase } from "./services/usecases/findUserById.js";
import { UpdateUserUseCase } from "./services/usecases/updateUser.js";

const database = new MongoDbConnection();
await database.ConnectDb().catch((err) => {
  console.log(err);
});

const repository = new UserRepositoryMongoDb();
// const createUserUseCase = new CreateUserUseCase(repository);

// const newUser = await createUserUseCase.execute({
//   name: "Felipe",
//   email: "testandoapi@mail.com",
//   password: "senhasegura",
//   image: "http://image.com",
// });

// console.log(newUser);

const findByIdUseCase = new FindUserByIdUseCase(repository);
const updateUserUseCase = new UpdateUserUseCase(repository, findByIdUseCase);

const userUpdated = await updateUserUseCase.execute(
  {
    name: "Felipe Augusto",
  },
  "14b7f330-7ed7-4be7-8367-ec4b76878025"
);

console.log(userUpdated);

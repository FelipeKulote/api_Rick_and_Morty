import { Controller } from "../controllers/controller.js";
import { UserRepositoryMongoDb } from "../database/repository/userRepository.js";
import { UserRoutes } from "../routes/userRoutes.js";
import { Services } from "../services/service.js";
import { CreateUserUseCase } from "../services/usecases/user/createUser.js";
import { DeleteUserUseCase } from "../services/usecases/user/deleteUser.js";
import { FindAllUsersUseCase } from "../services/usecases/user/findAllUsers.js";
import { FindUserByIdUseCase } from "../services/usecases/user/findUserById.js";
import { UpdateUserUseCase } from "../services/usecases/user/updateUser.js";

export function makeUserFactory(router) {
  const userRepository = new UserRepositoryMongoDb();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
  const updateUserUseCase = new UpdateUserUseCase(
    userRepository,
    findUserByIdUseCase
  );
  const findAllUsersUseCase = new FindAllUsersUseCase(userRepository);
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);

  const userService = new Services(
    createUserUseCase,
    updateUserUseCase,
    findAllUsersUseCase,
    findUserByIdUseCase,
    deleteUserUseCase
  );

  const userController = new Controller(userService);
  
  const userRoutes = new UserRoutes(userController, router);

  return userRoutes;
}

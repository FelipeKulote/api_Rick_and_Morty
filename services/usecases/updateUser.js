import { UserEntity } from "../../entities/user.js";

export class UpdateUserUseCase {
  constructor(userRepository, findUserById) {
    this.repository = userRepository;
    this.findUserById = findUserById;
  }

  async execute(userUpdated, userId) {
    const userToUpdate = await this.findUserById.execute(userId);
    const userModified = Object.assign(userToUpdate, userUpdated);
    const userValidated = new UserEntity(userModified);
    userValidated.validate();
    return await this.repository.updateUser(userValidated.getUser());
  }
}

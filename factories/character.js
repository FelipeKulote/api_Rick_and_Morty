import { CharacterRepositoryMongoDB } from "../database/repository/characterRepository.js";
import { UserRepositoryMongoDb } from "../database/repository/userRepository.js";
import { CreateCharacterUseCase } from "../services/usecases/character/createCharacter.js";
import { FindAllCharacterUseCase } from "../services/usecases/character/findAllCharacter.js";
import { FindCharacterByIdUseCase } from "../services/usecases/character/findCharacterById.js";
import { FindCharacterByNameUseCase } from "../services/usecases/character/findCharacterByName.js";
import { UpdateCharacterUseCase } from "../services/usecases/character/updateCharacter.js";
import { DeleteCharacterUseCase } from "../services/usecases/character/deleteCharacter.js";
import { FindUserByIdUseCase } from "../services/usecases/user/findUserById.js";
import { Services } from "../services/service.js";
import { CharacterController } from "../controllers/characterController.js";
import { CharacterRoutes } from "../routes/characterRoutes.js";

export function makeCharacterFactory(router) {
  const characterRepository = new CharacterRepositoryMongoDB();
  const userRepository = new UserRepositoryMongoDb();

  const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
  const findCharacterByIdUseCase = new FindCharacterByIdUseCase(
    characterRepository
  );
  const createCharacterUseCase = new CreateCharacterUseCase(
    characterRepository,
    findUserByIdUseCase
  );
  const updateCharacterUseCase = new UpdateCharacterUseCase(
    characterRepository,
    findCharacterByIdUseCase
  );
  const deleteCharacterUseCase = new DeleteCharacterUseCase(
    characterRepository
  );
  const findCharacterByNameUseCase = new FindCharacterByNameUseCase(
    characterRepository
  );
  const findAllCharactersUseCase = new FindAllCharacterUseCase(
    characterRepository
  );

  const characterService = new Services(
    createCharacterUseCase,
    updateCharacterUseCase,
    findAllCharactersUseCase,
    findCharacterByIdUseCase,
    deleteCharacterUseCase
  );

  const characterController = new CharacterController(
    characterService,
    findCharacterByNameUseCase
  );

  const characterRoutes = new CharacterRoutes(characterController, router);

  return characterRoutes;
}

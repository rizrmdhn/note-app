/* instanbul ignore file */

import { createContainer } from "instances-container";

// external agencies
import { nanoid } from "nanoid";
import Jwt from "@hapi/jwt";
import bcrypt from "bcrypt";
import Joi from "joi";
import pool from "./database/postgres/pool";

// Security service
import JwtTokenManager from "./security/JwtTokenManager";
import BcryptPasswordHash from "./security/BcryptPasswordHash";
import JoiInputValidator from "./security/JoiInputValidator";

// Security use case
import PasswordHash from "@/Applications/security/PasswordHash";
import InputValidator from "@/Applications/security/InputValidator";
import AuthenticationTokenManager from "@/Applications/security/AuthenticationTokenManager";

// User service
import UserRepository from "@/Domains/users/UserRepository";
import UserRepositoryPostgres from "./repository/UserRepositoryPostgres";

// User use case
import UserLoginUseCase from "@/Applications/use_case/users/UserLoginUseCase";
import UserRegisterUseCase from "@/Applications/use_case/users/UserRegisterUseCase";

// Creating container
const container = createContainer();

// Registering services and repositories
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
        {
          concrete: nanoid,
        },
      ],
    },
  },
  {
    key: PasswordHash.name,
    Class: BcryptPasswordHash,
    parameter: {
      dependencies: [
        {
          concrete: bcrypt,
        },
      ],
    },
  },
  {
    key: InputValidator.name,
    Class: JoiInputValidator,
    parameter: {
      dependencies: [
        {
          concrete: Joi,
        },
      ],
    },
  },
  {
    key: AuthenticationTokenManager.name,
    Class: JwtTokenManager,
    parameter: {
      dependencies: [
        {
          concrete: Jwt.token,
        },
      ],
    },
  },
]);

// Registering use cases
container.register([
  {
    key: UserLoginUseCase.name,
    Class: UserLoginUseCase,
    parameter: {
      injectType: "destructuring",
      dependencies: [
        {
          name: "userRepository",
          internal: UserRepository.name,
        },
        {
          name: "authenticationRepository",
          internal: UserRepository.name,
        },
        {
          name: "authenticationTokenManager",
          internal: AuthenticationTokenManager.name,
        },
        {
          name: "passwordHash",
          internal: PasswordHash.name,
        },
      ],
    },
  },
  {
    key: UserRegisterUseCase.name,
    Class: UserRegisterUseCase,
    parameter: {
      injectType: "destructuring",
      dependencies: [
        {
          name: "userRepository",
          internal: UserRepository.name,
        },
        {
          name: "passwordHash",
          internal: PasswordHash.name,
        },
        {
          name: "inputValidator",
          internal: InputValidator.name,
        },
      ],
    },
  },
]);

export default container;

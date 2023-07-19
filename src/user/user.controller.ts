import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController {

  // repository é responsável por lidar com o acesso e a persistência dos dados
  constructor(private userRepository: UserRepository) {}

  /**
   * Realiza a criação de um novo usuário
   * @param userData: dados do usuário
   */
  @Post('/new')
  async createUser(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);
    return userData
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }

}
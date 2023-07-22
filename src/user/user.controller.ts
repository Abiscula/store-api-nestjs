import { Body, Controller, Get, Post, Put, Param } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { ListUserDTO } from "./dto/ListUser.dto";
import { UpdateUserDTO } from "./dto/UpdateUser.dto";

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
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return { 
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso' 
    }
  }

  /**
   * @returns: Lista de usuários cadastrados
   */
  @Get()
  async listUsers() {
    const userList = await this.userRepository.list();
    return userList.map(
      user => new ListUserDTO(
        user.id,
        user.name
      )
    );
  }

  /***
   * Atualiza os dados do usuário
   */
  @Put('/update/:id')
  async updateUser(@Param('id') id: string, @Body() newUserData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newUserData);

    let newUser = {...updatedUser}
    delete newUser.password

    return {
      newUser,
      message: 'Usuário atualizado com sucesso!'
    }
  }

}
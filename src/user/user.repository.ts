import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
  private users: UserEntity[] = []

  /**
   * Realiza o "salvamento" do usuário
   * @param user: dados referente ao usuário cadastrado 
   */
  async save(user: UserEntity) {
    this.users.push(user);
  }

  /**
   * Lista todos os usuários cadastrados
   * @returns lista de usuários
   */
  async list() {
    return this.users;
  }

  /**
   * Partial<userEntity>: Permite somente alguns dados da entidade (transforma os valores da entidade em opcionais)
   * 
   * @param id: id do usuário
   * @param data: dados para atualização
   */
  async update(id: string, newUserData: Partial<UserEntity>) {
    const userExists = this.users.find(
      savedUser => savedUser.id === id
    );
    if(!userExists) {
      throw new Error('Usuário não encontrado')
    }

    Object.entries(newUserData).forEach(([key, value]) => {
      if(key === id) { // impede a atualização do id
        return
      }
      userExists[key] = value;
    })

    return userExists;
  }
  
  /**
   * Verifica se o usuário já existe no banco de dados
   * @param email: email que será verificado
   * @returns true ou false
   */
  findUserByEmail(email: string): boolean {
    const hasUser = this.users.findIndex(user => user.email === email)
    return hasUser !== -1;
  }

}
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
  private users = []

  /**
   * Realiza o "salvamento" do usuário
   * @param user: dados referente ao usuário cadastrado 
   */
  async save(user) {
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
   * Verifica se o usuário já existe no banco de dados
   * @param email: email que será verificado
   * @returns true ou false
   */
  findUserByEmail(email: string): boolean {
    const hasUser = this.users.findIndex(user => user.email === email)
    return hasUser !== -1;
  }
}
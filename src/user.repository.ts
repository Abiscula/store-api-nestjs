
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
}
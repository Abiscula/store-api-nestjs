import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
  private products = []

  /**
   * Realiza o "salvamento" do produto
   * @param product: dados referente ao produto cadastrado 
   */
  async save(product) {
    this.products.push(product);
  }

  /**
   * Lista todos os produtos cadastrados
   * @returns lista de produtos
   */
  async list() {
    return this.products;
  }
}
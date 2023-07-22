import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = []

  /**
   * Realiza o "salvamento" do produto
   * @param product: dados referente ao produto cadastrado 
   */
  async save(product: ProductEntity) {
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
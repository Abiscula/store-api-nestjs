import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./product.entity";
import { UpdateProductDTO } from "./dto/UpdateProduct.dto";

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
  

  async update(id: string, productData: UpdateProductDTO) {
    const dontChangeAttributes = ['id', 'usuarioId'];
    const product = this.findProductById(id);
    Object.entries(productData).forEach(([key, value]) => {
      if (dontChangeAttributes.includes(key)) {
        return;
      }
      product[key] = value;
    });

    return product;
  }


  private findProductById(id: string): ProductEntity {
    const userExists = this.products.find(
      savedUser => savedUser.id === id
    );
    if(!userExists) {
      throw new Error('Usuário não encontrado')
    }
  
    return userExists;
  }
}
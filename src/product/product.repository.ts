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
  
  /**
   * Atualiza o produto correspondente ao id informado
   * @param id identificador do produto
   * @param productData dados a serem atualizados
   * @returns produto atualizado
   */
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

  /**
   * Remove o produto correspondente ao id informado
   * @param id: id do produto que será removido
   * @returns: produto removido
   */
  async delete(id: string) {
    const removedProduct = this.findProductById(id);
    this.products = this.products.filter((product) => product.id !== id);
    return removedProduct;
  }

  /***
  * Método criado para encontrar o produto baseado no id informado.
  * Retorna um erro caso não encontre 
  */
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
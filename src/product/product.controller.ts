import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";
import { ProductEntity } from "./product.entity";
import { buildProductEntity } from "./utils/buildProductEntity";
import { UpdateProductDTO } from "./dto/UpdateProduct.dto";

@Controller('/products')
export class ProductController {

  constructor(private productRepository: ProductRepository) {}

  /**
   * Realiza a criação de um novo produto
   * @param productData: dados do produto
   */
  @Post('/new')
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity: ProductEntity = buildProductEntity(productData);
    this.productRepository.save(productEntity);
    
    return {
      id: productEntity.id,
      nome: productEntity.nome,
      descricao: productEntity.descricao,
      valor: productEntity.valor,
      categoria: productEntity.categoria,
      message: 'Produto adicionado com sucesso' 
    };
  }

  /**
   * Lista todos os produtos
   * @returns 
   */
  @Get()
  async listProducts() {
    return this.productRepository.list();
  }


  /**
   * Atualiza o produto com base no id informado
   * @param id: id do produto que será atualizado
   * @param newProductData: dados que serão atualizados
   * @returns produto atualizado
   */
  @Put('/update/:id')
  async updateProduct(@Param('id') id: string, @Body() newProductData: UpdateProductDTO) {
    const updatedProduct = await this.productRepository.update(id, newProductData);
    return {
      product: updatedProduct,
      message: 'Produto atualizado com sucesso!'
    }
  }

  @Delete('/delete/:id')
  async removeProduct(@Param('id') id: string) {
    const removedProduct = await this.productRepository.delete(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: removedProduct,
    };
  }

}
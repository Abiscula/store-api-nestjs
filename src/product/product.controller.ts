import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { CreateProductDTO } from "./dto/CreateProduct.dto";
import { ProductEntity } from "./product.entity";
import { buildProductEntity } from "./utils/buildProductEntity";

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
      nome: productEntity.nome,
      descricao: productEntity.descricao,
      valor: productEntity.valor,
      categoria: productEntity.categoria,
      message: 'Produto adicionado com sucesso' 
    };
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }

}
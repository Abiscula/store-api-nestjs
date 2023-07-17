import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";

@Controller('/products')
export class ProductController {

  constructor(private productRepository: ProductRepository) {}

  /**
   * Realiza a criação de um novo produto
   * @param productData: dados do produto
   */
  @Post('/new')
  async createProduct(@Body() productData) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }

}
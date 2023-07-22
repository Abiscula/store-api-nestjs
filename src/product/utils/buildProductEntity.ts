import { CreateProductDTO } from "../dto/CreateProduct.dto";
import { ProductEntity } from "../product.entity";

/**
 * Função responsável por construir a entidade de produto.
 * @param productData: dados do produto
 * @returns entidade de produto
 */
export function buildProductEntity(productData: CreateProductDTO): ProductEntity {
  const productEntity = new ProductEntity();
  
  productEntity.nome = productData.nome;
  productEntity.categoria = productData.categoria;
  productEntity.caracteristicas = productData.caracteristicas;
  productEntity.descricao = productData.descricao;
  productEntity.imagens = productData.imagens;
  productEntity.quantidadeDisponivel = productData.quantidadeDisponivel;
  productEntity.usuarioId = productData.usuarioId;
  productEntity.valor = productData.valor;
  productEntity.dataCriacao = productData.dataCriacao;
  productEntity.dataAtualizacao = productData.dataAtualizacao;

  return productEntity;
}
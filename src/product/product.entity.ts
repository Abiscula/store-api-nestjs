export class ProductEntity {

  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: Array<object>;
  imagens: Array<object>;
  categoria: string;
  dataCriacao: string;
  dataAtualizacao: string;
}
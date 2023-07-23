class AttributesProduct {
  nome: string;
  descricao: string;
}

class ImageProduct {
  url: string;
  descricao: string;
}

export class ProductEntity {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: AttributesProduct[];
  imagens: ImageProduct[];
  categoria: string;
  dataCriacao: string;
  dataAtualizacao: string;
}
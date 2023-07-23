export class AttributesProductDTO {
  nome: string;
  descricao: string;
}

export class ImageProductDTO {
  url: string;
  descricao: string;
}

export class ListProductDTO {
  id: string;
  usuarioId: string;
  nome: string;
  valor: number;
  quantidade: number;
  descricao: string;
  categoria: string;
  caracteristicas: AttributesProductDTO[];
  imagens: ImageProductDTO[];
}
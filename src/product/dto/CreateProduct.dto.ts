import { IsDateString, IsNotEmpty, MinLength, IsNumber, IsArray, isString, IsString } from "class-validator";


export class CreateProductDTO {

  @IsNotEmpty({ message: 'Nome não pode ser vazio' })  
  nome: string;

  @IsNumber(undefined, { message: 'Valor deve ser um número válido' })
  valor: number;
  
  @IsNotEmpty({ message: 'quantidade não pode ser vazia, nula ou indefinida' }) 
  quantidadeDisponivel: number;

  @MinLength(10,{ message: 'A descrição precisa ter 10 ou mais caracteres' })
  descricao: string;

  @IsArray({ message: 'Caracteristicas deve ser um array' })
  caracteristicas: Array<object>;

  @IsArray({ message: 'imagens deve ser um array' })
  imagens: Array<object>;

  @IsString()
  categoria: string;

  @IsDateString()
  dataCriacao: string;

  @IsDateString()
  dataAtualizacao: string;

}
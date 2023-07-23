import { IsDateString, IsNotEmpty, IsNumber, IsArray, IsString, IsUUID, Min, ArrayMinSize } from "class-validator";
import { AttributesProductDTO, ImageProductDTO } from "./ListProduct.dto";
import { Type } from "class-transformer";


export class CreateProductDTO {

  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  usuarioId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  quantidadeDisponivel: number;

  @IsString()
  descricao: string;

  @IsArray()
  @ArrayMinSize(3)
  @Type(() => AttributesProductDTO)
  caracteristicas: AttributesProductDTO[];

  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImageProductDTO)
  imagens: ImageProductDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  categoria: string;

  @IsDateString()
  dataCriacao: string;

  @IsDateString()
  dataAtualizacao: string;

}
import { Type } from "class-transformer";
import { IsNotEmpty,  IsNumber, IsArray, IsString, IsUUID, IsOptional, Min, ValidateNested, ArrayMinSize } from "class-validator";
import { AttributesProductDTO, ImageProductDTO } from "./ListProduct.dto";

export class UpdateProductDTO {

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  @IsOptional()
  valor: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()
  quantidadeDisponivel: number;

  @IsString()
  @IsOptional()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => AttributesProductDTO)
  @IsOptional()
  caracteristicas: AttributesProductDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImageProductDTO)
  @IsOptional()
  imagens: ImageProductDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  @IsOptional()
  categoria: string;
}
import { IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CreateUserDTO {

  @IsNotEmpty({ message: 'Nome não pode ser vazio'}) // valida se o valor é !== null/undefined/""
  name: string;

  @IsEmail(undefined, { message: 'E-mail deve ser no formato email@email.com'}) // valida se é um e-mail
  email: string;

  @MinLength(6, { message: 'A senha precisa ter 6 ou mais caracteres'}) // valida o número de caracteres
  password: string;
}
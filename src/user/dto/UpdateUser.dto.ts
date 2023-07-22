import { IsEmail, MinLength, IsNotEmpty, IsOptional } from "class-validator";
import { EmailIsUnique } from "../validation/email-is-unique.validator";

export class UpdateUserDTO {

  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsOptional() // Caso o usuário não informe nada não irá aplicar as validações (torna opcional)
  name: string;

  @IsEmail(undefined, { message: 'E-mail deve ser no formato email@email.com' })
  @EmailIsUnique({ message: 'E-mail já cadastrado' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter 6 ou mais caracteres' })
  @IsOptional()
  password: string;
}
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true }) // indica que é uma validação assincrona
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {

  constructor(private userRepository: UserRepository) {}

  /**
   * Validação assincrona para verificar a existência do usuário no db através do e-mail
   * @returns negação do valor obtido, pois, se o usuário for encontrado significa que aquele e-mail já está em uso
   * e portanto o cadastro não deve ocorrer.
   */
  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const hasUser = await this.userRepository.findUserByEmail(value); // verifica se existe usuário
    return !hasUser;
  }
}

/**
 * Função que realiza a criação do decorator personalizado que irá aplicar a validação de e-mail
 */
export const EmailIsUnique = (validationOptions: ValidationOptions) => {
  return (object: Object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: EmailIsUniqueValidator
    })
  }
}

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    const options: ValidationOptions = {
      ...validationOptions,
      message:
        validationOptions?.message ??
        `${propertyName.replace(
          /_/g,
          ' ',
        )} value must match the value of ${property.replace(/_/g, ' ')}! `,
    };

    registerDecorator({
      name: 'Match',
      target: object.constructor,
      propertyName,
      options: options,
      constraints: [property],
      validator: MatchConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'Match' })
export class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }
}

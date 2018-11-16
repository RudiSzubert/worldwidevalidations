export interface IValidator {
    format: string;
    name: string;
    label?: string;
    validate(input: string): boolean;
}
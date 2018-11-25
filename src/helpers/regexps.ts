export function onlyNumbers (input: string): boolean {
  return /^[0-9]*$/gm.test(input);
}
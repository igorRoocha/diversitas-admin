export class UtilsString {
  static isNotEmpty(value: string | undefined | null): boolean {
    return value !== undefined && value !== null && value.trim() !== '';
  }
}

export class StringHelper {
  static truncate(text: string): string {
    return `${text.slice(0, 30)}...`
  }
}
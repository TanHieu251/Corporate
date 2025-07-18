export class Until_check {
    public static hasValue(value: any): boolean {
      return !(value === undefined || value === null);
    }
  
    public static hasListValue(value: any): boolean {
      return (
        value !== undefined &&
        value !== null &&
        Array.isArray(value) &&
        value.length > 0
      );
    }
  
    public static hasValueString(value: any): boolean {
      return !(
        value === undefined ||
        value === null ||
        value === '' ||
        (typeof value === 'string' && (value.trim() === '' || value.trim().length === 0))
      );
    }
  }
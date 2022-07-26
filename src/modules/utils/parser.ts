export default class Parser {

  static validate<T>(value: string, message: string, action: () => T): T | undefined {
    try {
      return action();
    }
    catch (e) {
      if (e instanceof Error)
        console.log(`${message}\nValue = ${value}\n${e}`)
      return undefined
    }
  }

  public static GetValidUrl(value: string, message: string): URL | undefined {
    return Parser.validate<URL>(value, message, () => { return new URL(value); })
  }

  public static GetValidString(value: string, message: string, minLenght = 1, maxLenght = 128): string | undefined {
    return Parser.validate<string>(value, message, () => {
      if (value === undefined || value === '') {
        throw new Error('Value is empty');
      }
      if (value.length > maxLenght || value.length < minLenght) {
        throw new Error(`Value lenght must be in range [${minLenght},${maxLenght}]`)
      }
      return value;
    })
  }

  public static GetValidDate(value: string, message: string): Date | undefined {
    return Parser.validate<Date>(value, message, () => { return new Date(value); })
  }

  public static GetValidStringArray(value: string, message: string, separator = ',', minLenght = 1, maxLenght = 128): string[] | undefined {
    return Parser.validate<string[]>(value, message, () => {
      const array = value.split(separator).map((item) => item.trim());
      if (array.length == 0) {
        throw new Error('array is empty');
      }
      array.forEach(el => Parser.GetValidString(el, `${message}.${el}`, minLenght, maxLenght))
      return array
    })
  }

  public static GetValidPositiveInt(value: string, message: string): number | undefined {
    return Parser.validate<number>(value, message, () => {
      const clearValue = value.replace(/[&\\/\\#,+()$~%.'":*?<>{}^A-Za-z]/g, '');
      return Number.parseInt(clearValue)
    })
  }
  public static GetValidPositiveFloat(value: string, message: string): number | undefined {
    return Parser.validate<number>(value, message, () => {
      const clearValue = value.replace(/[&\\/\\#,+()$~%'":*?<>{}^A-Za-z]/g, '');
      return Number.parseFloat(clearValue)
    })
  }
}
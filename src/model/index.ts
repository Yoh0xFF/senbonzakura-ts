export * from '@root/model/ast.ts';
export * from '@root/model/token.ts';

export class InvalidExpression {
  public message: string;

  constructor(token: string | undefined, index: number) {
    this.message = `Invalid expression, unknow character '${token ?? ''}' at index ${index}`;
  }
}

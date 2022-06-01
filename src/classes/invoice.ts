import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    readonly details: string,
    readonly amount: number
  ) {}

  format = (): string => {
    return `${this.client} woes ${this.amount} for ${this.details}`;
  };
}

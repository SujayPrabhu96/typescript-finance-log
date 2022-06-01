import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) {}

  format = (): string => {
    return `${this.client} woes ${this.amount} for ${this.details}`;
  };
}

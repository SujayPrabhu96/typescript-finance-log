export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.client} woes ${this.amount} for ${this.details}`;
        };
    }
}

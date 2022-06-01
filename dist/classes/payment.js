export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.recipient} woes ${this.amount} for ${this.details}`;
        };
    }
}

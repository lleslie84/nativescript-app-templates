export class SignUpStep {
    results: Array<any>;
    saveable: boolean;
    identifier: string;

    constructor(identifier: string) {
        this.results = [];
        this.saveable = false;
        this.identifier = identifier;
    }
}

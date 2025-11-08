export class FewShotPrompt {
    constructor(examples) {
        this.examples = examples;
    }

    generatePrompt(input) {
        const prompt = this.examples.map(example => {
            return `Example: ${example.input}\nResponse: ${example.output}`;
        }).join('\n\n');

        return `${prompt}\n\nInput: ${input}\nResponse:`;
    }
}

export function createFewShotPrompt(examples) {
    return new FewShotPrompt(examples);
}
import { generatePrompt, FewShotPrompt } from './few_shot_prompt.js';

// Example usage of the few-shot prompting logic
const examples = [
    { input: "What is the capital of France?", output: "Paris" },
    { input: "What is the capital of Germany?", output: "Berlin" },
];

const prompt = generatePrompt(examples, "What is the capital of Italy?");
console.log(prompt);

// If you want to create an instance of FewShotPrompt
const fewShot = new FewShotPrompt(examples);
const result = fewShot.predict("What is the capital of Spain?");
console.log(result);
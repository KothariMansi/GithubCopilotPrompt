/**
 * Convert a string to dot.case
 *
 * Handles:
 * - camelCase / PascalCase / ALLCAPS
 * - kebab-case, snake_case, space separated, punctuation
 * - numbers
 *
 * Examples:
 *   toDotCase('helloWorld') -> 'hello.world'
 *   toDotCase('Hello World!') -> 'hello.world'
 *   toDotCase('version2Number') -> 'version.2.number'
 *
 * @param {string} input
 * @returns {string}
 */
function toDotCase(input) {
    if (typeof input !== 'string') return '';

    // Replace any non-alphanumeric chars with spaces to break words
    const cleaned = input.replace(/[^A-Za-z0-9]+/g, ' ').trim();

    if (cleaned.length === 0) return '';

    // Match words:
    // - sequences of uppercase that are followed by UpperLower (acronyms before a normal word)
    // - an optional single uppercase followed by lowercase letters (camel/Pascal words)
    // - numbers
    // - remaining uppercase sequences
    const words = cleaned.match(
        /[A-Z]+(?=[A-Z][a-z])|[A-Z]?[a-z]+|[0-9]+|[A-Z]+/g
    );

    if (!words) return '';

    return words.map(w => w.toLowerCase()).join('.');
}

module.exports = toDotCase;

// Quick manual tests when run directly
if (require.main === module) {
    const samples = [
        'helloWorld',
        'HelloWorld',
        'hello-world_example.test',
        'XMLHttpRequest',
        'version2Number',
        '  multiple   separators---and__spaces ',
        '',
        123, // non-string -> ''
    ];
    for (const s of samples) {
        console.log(JSON.stringify(s), '=>', toDotCase(s));
    }
}
// chain_prompt.js

/**
 * Convert a string to kebab-case:
 * - trims whitespace
 * - splits camelCase and consecutive-uppercase boundaries
 * - replaces spaces/underscores/invalid chars with hyphens
 * - collapses multiple hyphens
 * - lowercases the result
 */
function toKebabCase(input) {
    if (input == null) return '';

    // 1. Trim surrounding whitespace
    let s = String(input).trim();

    // 2. Split camelCase boundaries like "helloWorld" -> "hello World"
    s = s.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // 3. Split boundaries inside consecutive uppercase groups like "XMLHttp" -> "XML Http"
    s = s.replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1 $2');

    // 4. Replace spaces and underscores with a hyphen
    s = s.replace(/[\s_]+/g, '-');

    // 5. Replace any remaining non-alphanumeric/non-hyphen characters with a hyphen
    s = s.replace(/[^a-zA-Z0-9-]+/g, '-');

    // 6. Collapse multiple hyphens into one
    s = s.replace(/-+/g, '-');

    // 7. Remove leading/trailing hyphens
    s = s.replace(/^-|-$/g, '');

    // 8. Convert to lowercase and return
    return s.toLowerCase();
}

// Export for usage in other modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toKebabCase;
}

/* Test cases demonstrating behavior */
if (require && require.main === module) {
    console.log(toKebabCase('HelloWorld'));                // -> "hello-world"
    console.log(toKebabCase('hello_world'));               // -> "hello-world"
    console.log(toKebabCase('Hello world example'));       // -> "hello-world-example"
    console.log(toKebabCase('  multiple   Spaces_and___underscores  '));
                                                                                                                 // -> "multiple-spaces-and-underscores"
    console.log(toKebabCase('XMLHttpRequest'));            // -> "xml-http-request"
    console.log(toKebabCase('userIDValue'));               // -> "user-id-value"
}
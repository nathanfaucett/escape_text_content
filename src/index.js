var ESCAPE_REGEX = /[&><"']/g,
    ESCAPE_LOOKUP = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        "\"": "&quot;",
        "'": "&#x27;"
    };


module.exports = escapeTextContent;


function escapeTextContent(text) {
    return (text + "").replace(ESCAPE_REGEX, escaper);
}

function escaper(match) {
    return ESCAPE_LOOKUP[match];
}

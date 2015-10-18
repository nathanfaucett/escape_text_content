var tape = require("tape"),
    escapeTextContent = require("../src/index");


tape("escapeTextContent(string)", function(assert) {
    assert.equal(escapeTextContent("<div></div>"), "&lt;div&gt;&lt;/div&gt;", "should escape text content");
    assert.end();
});

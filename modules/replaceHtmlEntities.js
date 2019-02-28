
function replaceHtmlEntities(str) {
    var reg = new RegExp("<.[^<>]*>", "gi" );
    str = str.replace(reg, "" );
    return str;
}


module.exports = replaceHtmlEntities;

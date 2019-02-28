
function htmlentities(str) {
  return str
     .replace(/&/g, "&amp;")
     .replace(/</g, "&lt;")
     .replace(/>/g, "&gt;")
     .replace(/¢/g,"&cent;")
     .replace(/£/g,"&pound;")
     .replace(/€/g,"&euro;")
     .replace(/¥/g,"&yen;")
     .replace(/°/g,"&deg;")
     .replace(/¼/g,"&frac14;")
     .replace(/Œ/g,"&OElig;")
     .replace(/½/g,"&frac12;")
     .replace(/œ/g,"&oelig;")
     .replace(/¾/g,"&frac34;")
     .replace(/Ÿ/g,"&Yuml;")
     .replace(/¡/g,"&iexcl;")
     .replace(/«/g,"&laquo;")
     .replace(/»/g,"&raquo;")
     .replace(/¿/g,"&iquest;")
     .replace(/À/g,"&Agrave;")
     .replace(/Á/g,"&Aacute;")
     .replace(/Â/g,"&Acirc;")
     .replace(/Ã/g,"&Atilde;")
     .replace(/Ä/g,"&Auml;")
     .replace(/Å/g,"&Aring;")
     .replace(/Æ/g,"&AElig;")
     .replace(/Ç/g,"&Ccedil;")
     .replace(/È/g,"&Egrave;")
     .replace(/É/g,"&Eacute;")
     .replace(/Ê/g,"&Ecirc;")
     .replace(/Ë/g,"&Euml;")
     .replace(/Ì/g,"&Igrave;")
     .replace(/Í/g,"&Iacute;")
     .replace(/Î/g,"&Icirc;")
     .replace(/Ï/g,"&Iuml;")
     .replace(/Ð/g,"&ETH;")
     .replace(/Ñ/g,"&Ntilde;")
     .replace(/Ò/g,"&Ograve;")
     .replace(/Ó/g,"&Oacute;")
     .replace(/Ô/g,"&Ocirc;")
     .replace(/Õ/g,"&Otilde;")
     .replace(/Ö/g,"&Ouml;")
     .replace(/Ø/g,"&Oslash;")
     .replace(/Ù/g,"&Ugrave;")
     .replace(/Ú/g,"&Uacute;")
     .replace(/Û/g,"&Ucirc;")
     .replace(/Ü/g,"&Uuml;")
     .replace(/Ý/g,"&Yacute;")
     .replace(/Þ/g,"&THORN;")
     .replace(/ß/g,"&szlig;")
     .replace(/à/g,"&agrave;")
     .replace(/á/g,"&aacute;")
     .replace(/â/g,"&acirc;")
     .replace(/ã/g,"&atilde;")
     .replace(/ä/g,"&auml;")
     .replace(/å/g,"&aring;")
     .replace(/æ/g,"&aelig;")
     .replace(/ç/g,"&ccedil;")
     .replace(/è/g,"&egrave;")
     .replace(/é/g,"&eacute;")
     .replace(/ê/g,"&ecirc;")
     .replace(/ë/g,"&euml;")
     .replace(/ì/g,"&igrave;")
     .replace(/í/g,"&iacute;")
     .replace(/î/g,"&icirc;")
     .replace(/ï/g,"&iuml;")
     .replace(/ð/g,"&eth;")
     .replace(/ñ/g,"&ntilde;")
     .replace(/ò/g,"&ograve;")
     .replace(/ó/g,"&oacute;")
     .replace(/ô/g,"&ocirc;")
     .replace(/õ/g,"&otilde;")
     .replace(/ö/g,"&ouml;")
     .replace(/ø/g,"&oslash;")
     .replace(/ù/g,"&ugrave;")
     .replace(/ú/g,"&uacute;")
     .replace(/û/g,"&ucirc;")
     .replace(/ü/g,"&uuml;")
     .replace(/ý/g,"&yacute;")
     .replace(/þ/g,"&thorn;")
     .replace(/"/g, "&quot;")
     .replace(/'/g, "&#039;");
}

module.exports = htmlentities;
var ext = {


    getExtension : function (filename) {
        if (filename != "") {
            var ext = filename.split('.');
            ext = ext[ext.length - 1];
            ext = ext.toLowerCase();
            return ext;
        }
    },
    extensionAllowed : function (filename) {
        ext = this.getExtension(filename);

        var extTab = ["jpg", "gif", "png", "jpeg", "pdf", "txt", "odt", "doc", "mp3", "wav", "ogg"]

        if (extTab.indexOf(ext) !== -1) {

            return true;

        } else {

            return false;
        }
    }
}





module.exports = ext;

// Nodejs encryption with GCM
// Does not work with nodejs v0.10.31
// Part of https://github.com/chris-rock/node-crypto-examples

var crypto = require('crypto'),
  algorithm = 'aes-256-gcm',
  password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
  // do not use a global iv for production,
  // generate a new one for each encryption
  iv = '88iZ0O6vOoEa'


var encryptionUtil = {
    encrypt: function (text, callback) {
      var cipher = crypto.createCipheriv(algorithm, password, iv)
      var encrypted = cipher.update(text, 'utf8', 'hex')
      encrypted += cipher.final('hex');
      var tag = cipher.getAuthTag();
        //console.log(tag);
      return callback(encrypted);

    },

    decrypt : function (encrypted, callback) {
      var decipher = crypto.createDecipheriv(algorithm, password, iv)
      decipher.setAuthTag(encrypted.tag);
      var dec = decipher.update(encrypted.content, 'hex', 'utf8')
      dec += decipher.final('utf8');
      return callback(dec);
    },
    compare: function(decrypt, encryptedBdd, callback){

        decrypt = this.encrypt(decrypt, function(result){
            return result;
        });

        if(decrypt === encryptedBdd){
            callback(true);
        }
        else{
            callback(false);
        }
    }

}
module.exports = encryptionUtil;

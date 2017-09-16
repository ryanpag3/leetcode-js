// declare an object that will store our key-value pairs
var urls = {};

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const code = generateCode();
    urls[code] = longUrl;
    return 'http://tinyurl.com/' + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    var code = shortUrl.split('/');
    code = code[code.length-1];
    return urls[code];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 /**
  * Generate random key for the specified url
  */
  function generateCode() {
      const potential = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = [];
      for (let i = 0; i < 6; i++) {
          code.push(potential.charAt(Math.random() * potential.length - 1));
      }
    return code.join('');
  }
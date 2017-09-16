/**
 * 535. Encode and Decode TinyURL
 * URL: https://leetcode.com/problems/encode-and-decode-tinyurl/description/ 
 * -------------
 * | Rationale |
 * -------------
 * Due to the problem specs being rather vague with how to encode and decode the url
 * we can assume that a simple key-value hash is enough to solve this problem. If this
 * were an actual production environment, some sort of persistent storage would be 
 * necessary and saving the entire URL would be overkill to say the least. 
 */

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
  * @return {string}
  */
  function generateCode() {
      const potential = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = [];
      for (let i = 0; i < 6; i++) {
          code.push(potential.charAt(Math.random() * potential.length - 1));
      }
    return code.join('');
  }
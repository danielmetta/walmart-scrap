'use strict';
require('es6-promise').polyfill();
var request = require('request')
var cheerio = require('cheerio');

exports.product = function(url) {
  return new Promise(function(acept, error) {
    var options = {
      url: url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
      }
    };
    request(options, function(error, response, html) {
      if(!error) {
        var $ = cheerio.load(html),
        product = {};
        product.productSku = $('.wishlist-container').children('button').attr('data-sku');
        product.title = $('.product-title-header').children('h1[itemprop=name]').text();
        product.price = $('.product-price').attr('data-sellprice');
        product.image = $('.main-picture-wrapper').children('img').attr('src');
        acept(product);
      } else {
        error({ error:"Cannot get product" });
      }
    });
  });
};

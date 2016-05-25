# Módulo Web Scrap para produtos Walmart Brasil

O **walmart-scrap** é um módulo para consulta de informações de produtos do Walmart Brasil.

O módulo faz a consulta via get no site Walmart Brasil pela URL e retorna as informações de: Nome, Preço, Imagem e ProdutoId.

**npm install walmart-scrap --save**

## Exemplo prático product

```js

var wscrap = require('walmart-scrap');
var url = 'https://www.walmart.com.br/smart-tv-led-40-samsung-40j5300-full-hd-com-conversor-digital-2-hdmi-2-usb-wi-fi-integrado/3076114/pr';

wscrap.product(url).then(function(product) {
	console.log(product);
}, function(err){
	console.log(err);
});
```

### Objeto de Retorno

```js
{
  produtoId: 1207936,
  title: "Smart TV LED 40 Samsung 40J5300 Full HD com Conversor Digital 2 HDMI 2 USB Wi-Fi Integrado",
  price: "1799",
  thumbnail:"https://static.wmobjects.com.br/imgres/arquivos/ids/4657865-344-344/smart-tv-led-40--samsung-40j5300-full-hd-com-conversor-digital-2-hdmi-2-usb-wi-fi-integrado.jpg"
}
```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```

## Exemplo prático listProducts

```js

var wscrap = require('walmart-scrap');
var urls = [
	'https://www.walmart.com.br/smart-tv-led-40-samsung-40j5300-full-hd-com-conversor-digital-2-hdmi-2-usb-wi-fi-integrado/3076114/pr',
	'https://www.walmart.com.br/smart-tv-led-48-samsung-48j5500-full-hd-com-conversor-digital-3-hdmi-2-usb-wi-fi-integrado-funcao-game/3076137/pr'
];

wscrap.listProducts(urls).then(function(list) {
	console.log(list);
}, function(err){
	console.log(err);
});
```

### Objeto de Retorno

```js
{
  produtoId: 1207936,
  title: "Smart TV LED 40 Samsung 40J5300 Full HD com Conversor Digital 2 HDMI 2 USB Wi-Fi Integrado",
  price: "1799",
  thumbnail:"https://static.wmobjects.com.br/imgres/arquivos/ids/4657865-344-344/smart-tv-led-40--samsung-40j5300-full-hd-com-conversor-digital-2-hdmi-2-usb-wi-fi-integrado.jpg"
},
{
  produtoId: 1234806,
  title: "Smart TV LED 48 Samsung 48J5500 Full HD com Conversor Digital 3 HDMI 2 USB Wi-Fi Integrado Função Game",
  price: "2499",
  thumbnail:"https:////static.wmobjects.com.br/imgres/arquivos/ids/4527880-344-344/smart-tv-led-48--samsung-48j5500-full-hd-com-conversor-digital-3-hdmi-2-usb-wi-fi-integrado-funcao-game.jpg"
}

```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```

# Módulo Web Scrap para produtos Walmart Brasil

O **walmart-scrap** é um módulo para consulta de informações de produtos do Walmart Brasil.

O módulo faz a consulta via get no site Walmart Brasil pela URL e retorna as informações de: Nome, Preço, Imagem e ProdutoSku.

## Exemplo prático

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
  productSku: 1207936,
  title: "Smart TV LED 40 Samsung 40J5300 Full HD com Conversor Digital 2 HDMI 2 USB Wi-Fi Integrado",
  price: "1799",
  thumbnail:"https://static.wmobjects.com.br/imgres/arquivos/ids/4657865-344-344/smart-tv-led-40--samsung-40j5300-full-hd-com-conversor-digital-2-hdmi-2-usb-wi-fi-integrado.jpg"
}
```

### Objeto de erro

```js
 { error: 'Cannot get product' }
```

# Credit Card Brands

## Globals
* visa
* master
* amex
* dinersclub
* discover
* unionpay
* jcb
* forbrugsforeningen
* dankort

## Brazil
* ELO
* Hipercard
* Aura
* Visa Electron
* Maestro

```
npm i credircard-info
```

```javascript
var credircards = require('credircard-info');
var card = CredircardInfo('4514166365215946').getBrand();
// elo
```

### Test
```
mocha
```

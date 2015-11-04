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
npm i creditcard-info
```

```javascript
var creditcards = require('creditcard-info');
CreditcardInfo('4514166365215946').getBrand(); // elo
```

### Test
```
mocha
```

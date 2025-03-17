import cryptoController from '../../controller';

export default class Assignment4Table {

  constructor() {
    this.cryptoList = [];

    // init the crypto list and fill the table
    this.getCryptoList();

    // listen to cryptoUpdate event
    document.addEventListener('cryptoUpdate', this.getCryptoList.bind(this));
  }

  getCryptoList() {
    cryptoController.getCryptoList()
    .then((cryptoList) => {
      this.cryptoList = cryptoList;
      this.render();
    });
  }

  deleteCrypto(event) {
    event.preventDefault();
    const index = event.target.parentElement.getAttribute('data-id');
    cryptoController.deleteCrypto(this.cryptoList[index]).then((result) => {
      this.cryptoList = result;
      this.render();
    });
  }

  editCrypto(event) {
    event.preventDefault();
    const index = event.target.parentElement.getAttribute('data-id');
    const crypto = this.cryptoList[index];
    const CRYPTOEDIT = new CustomEvent('cryptoEdit', { detail: crypto });
    document.dispatchEvent(CRYPTOEDIT);
  }

  render() {
    const cryptoListElement = document.querySelector('#cryptolist tbody');
    // clear the table
    cryptoListElement.innerHTML = '';
    // fill the table
    this.cryptoList.forEach((crypto, index) => {
      const tdSymbolElement = document.createElement('td');
      tdSymbolElement.textContent = crypto.symbol;
      const tdQuantityElement = document.createElement('td');
      tdQuantityElement.textContent = crypto.quantity;
      const tdDeleteButtonElement = document.createElement('button');
      tdDeleteButtonElement.setAttribute('data-action', 'delete');
      tdDeleteButtonElement.textContent = 'Delete';
      tdDeleteButtonElement.addEventListener(
        'click',
        this.deleteCrypto.bind(this)
      );
      const tdEditButtonElement = document.createElement('button');
      tdEditButtonElement.setAttribute('data-action', 'edit');
      tdEditButtonElement.textContent = 'Edit';
      tdEditButtonElement.addEventListener('click', this.editCrypto.bind(this));

      const trElement = document.createElement('tr');
      trElement.setAttribute('data-id', index);
      trElement.appendChild(tdSymbolElement);
      trElement.appendChild(tdQuantityElement);
      trElement.appendChild(tdEditButtonElement);
      trElement.appendChild(tdDeleteButtonElement);
      cryptoListElement.appendChild(trElement);
    });
  }
}

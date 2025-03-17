import Crypto from '../../model/Crypto';
import cryptoController from '../../controller';

export default class Assignment4Form {
  constructor() {
    this.cryptoList = [];
    this.formType = 'add';
    this.clearForm = true;
    this.crypto = new Crypto();

    // listen for the form submit event
    document.querySelector('#cryptoForm').addEventListener('submit', this.readForm.bind(this));

    // listen for the cryptoEdit event originating from the table
    document.addEventListener('cryptoEdit', this.fillEditForm.bind(this));

    this.render();
  }

  /**
   * Read the form data and determine if it is an add or edit operation
   * @param {Event} event 
   */
  readForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const crypto = new Crypto ({
      symbol: formData.get('symbol'),
      quantity: Number(formData.get('quantity')),
    });

    if (this.formType === 'add') {
      this.addCrypto(crypto);
    } else {
      this.updateCrypto(crypto);
    }
  }

  addCrypto(crypto) {
    cryptoController.addCrypto(crypto)
    .then(() => {
      // dispatch event to update the table
      // and let the render method clear the form
      const CRYPTOUPDATE = new CustomEvent('cryptoUpdate');
      document.dispatchEvent(CRYPTOUPDATE);
      this.render();
    });
  }

  updateCrypto(crypto) {
    cryptoController.updateCrypto(crypto)
    .then(() => {
      // dispatch event to update the table
      // and let the render method clear the form
      const CRYPTOUPDATE = new CustomEvent('cryptoUpdate');
      document.dispatchEvent(CRYPTOUPDATE);
      this.formType = 'add';
      this.clearForm = true;
      this.render();
    });
  }

  fillEditForm(event) {
    event.preventDefault();
    this.crypto = new Crypto(event.detail);
    this.formType = 'edit';
    this.clearForm = false;
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const cryptoListElement = document.querySelector('#cryptoForm');
    cryptoListElement.querySelector('button').textContent = this.formType === 'add' ? 'Add' : 'Edit';

    if (this.clearForm) {
      cryptoListElement.reset();
    } else {
      cryptoListElement.symbol.value = this.crypto.symbol;
      cryptoListElement.quantity.value = this.crypto.quantity;
    }
  }
}
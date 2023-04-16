const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  square = [];
  constructor(type = true) {
    this.type = type;
  }

  generateSquare() {
    for (let i = 0; i < this.alpha.length; i++) {
      let row = [];
      for (let r = i; r < this.alpha.length; r++) {
        row.push(this.alpha[r]);
      }
      let j = 0;
      while (row.length < this.alpha.length) {
        row.push(this.alpha[j]);
        j += 1;
      }
      this.square.push(row);
    }
    return this.square;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.generateSquare();
    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        if (k >= key.length) {
          k = 0;
        }
        result.push(
          this.square[this.alpha.indexOf(message[i])][this.alpha.indexOf(key[k])]
        );
        k += 1;
      } else {
        result.push(message[i]);
      }
    }
    if (this.type) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }

  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!');
    }
    this.generateSquare();
    let result = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        if (k >= key.length) {
          k = 0;
        }
        result.push(
          this.alpha[this.square[this.alpha.indexOf(key[k])].indexOf(message[i])]
        );
        k += 1;
      } else {
        result.push(message[i]);
      }
    }
    if (this.type) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

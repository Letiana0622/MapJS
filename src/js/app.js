export default class ErrorRepository {
  
  constructor() {
    this.errors = new Map([
      [1, 'SyntaxError'],
      [2, 'ReferenceError'],
      [3, 'TypeError'],
      [4, 'RangeError'],
      [5, 'URIError'],
      [6, 'EvalError'],
    ])
  }

  translate(code) {
    if(this.errors.has(code)) {
      return this.errors.get(code)
    }
    else {
      throw new Error ('Unknown error')
    }
  }
}
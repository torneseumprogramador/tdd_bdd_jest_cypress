module.exports = class Cliente{
  constructor(_id=0, _nome="", _telefone="") {
    this.id = _id;
    this.nome = _nome;
    this.telefone = _telefone;
  }

  nomeUpercase(){
    return this.nome.toUpperCase()
  }

  static primeiro(){
    return new Cliente()
  }
  static todos(){
      return [
        new Cliente(1, "Danilo 1", "2341234"),
        new Cliente(2, "Danilo 2", "3223233"),
        new Cliente(3, "Danilo 3", "323232234"),
        new Cliente(4, "Danilo 4", "2343231234"),
        new Cliente(5, "Danilo 5", "241332234"),
        new Cliente(6, "Danilo 6", "2343231234"),
        new Cliente(7, "Danilo 7", "2341322323234"),
        new Cliente(8, "Danilo 8", "234331234"),
        new Cliente(9, "Danilo 9", "2341332234"),
        new Cliente(10, "Danilo 10", "232341234"),
      ]
  }
}
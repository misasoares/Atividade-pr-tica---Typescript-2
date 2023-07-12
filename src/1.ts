class Contador {
    private valor: number

    constructor(){
        this.valor = 0
    }

    public zerar(){
        this.valor = 0
    }

    public incrementar(){
        this.valor++
    }
    public retornarValor(){
        return this.valor
    }
}

export default Contador
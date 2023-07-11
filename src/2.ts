class Bola {
    
    constructor(public cor:string, public circunferencia:number, public mateiral:string) {  
    }

    public trocarCor(cor:string){
        this.cor = cor
    }
    public mostrarCor(){
       return this.cor
    }
}

export default Bola
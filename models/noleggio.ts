export class Noleggio {
    constructor(public id:number,
        public dataInizio: Date,
        public dataReso: Date,
        // public stato: string,
        public contrattoId: number,
        public clienteId: number,
        public noleggiatoreId: number,
        public vetturaId: number){}
}
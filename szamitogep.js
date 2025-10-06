export class Szamitogep {
    constructor(memoria = 0, allapot = false) {
        this._memoria = memoria
        this._allapot = allapot
    }
    kapcsol() {
        this._allapot = !this._allapot
    }
    
    get memoria() {
        return this._memoria
    }
    set memoria(_memoria) {
        this._memoria = _memoria
    }
    get allapot() {
        return this._allapot
    }
    set allapot(_allapot) {
        this._allapot = _allapot
    }
}
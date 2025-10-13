import {Szamitogep} from "./szamitogep.js";
let alapgep = new Szamitogep(1024, false);
let masgep = new Szamitogep(2048, false);

console.log(`Számítógép bekapcsol: ${alapgep.kapcsol()}`);
console.log(`800 mb: ${alapgep.programMasol(800)}`);
console.log(`Memória: ${alapgep.memoria} mb`);
console.log(`400 mb: ${alapgep.programMasol(400)}`);
console.log(`Számítógép allapot: ${alapgep.allapot}`);
console.log(`\nSzámítógép bekapcsolva: ${masgep.kapcsol()}`);
console.log(`1 mb: ${masgep.programMasol(1)}`);
console.log(`Memória: ${masgep.memoria} mb`);
console.log(`Állapot: ${masgep.allapot}`);
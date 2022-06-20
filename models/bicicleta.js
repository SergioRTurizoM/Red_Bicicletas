var Bicicleta = function (id, color, modelo, ubicación) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicación;
}

Bicicleta.prototype.toString = function(){
    return 'id: ' + this.id + " | color: " + this.color;
}


Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}

Bicicleta.findById = function(aBiciID){
    var aBici = Bicicleta.allBicis.find( x => x.id == aBiciID);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciID}`)
}

Bicicleta.removeById = function(aBiciId){
    for(var i=0; i<Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id== aBiciId){
            Bicicleta.allBicis.splice(i,1);
            break;
        }
    }
}

var a = new Bicicleta ( 1, 'rojo', 'urbana', [-34.6012424, -58.3861497]);
var b = new Bicicleta ( 2, 'blanca', 'urbana', [-34.596232, -58.3808287]);

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


var bicicletaSchema = new Schema ({
    code: Number,
    color: String,
    modelo: String,
    ubicacion: {
        type: [Number], index: { type: '2dsphere', sparse: true}
    }
});


bicicletaSchema.static.createInstance = function(code, color, modelo, ubicación) {
    return new this ({
        code: code,
        color: code,
        modelo: modelo,
        ubicacion: ubicacion
    });
};


bicicletaSchema.method.toString = function(){
    return 'code: ' + this.code + " | color: " + this.color;
};


bicicletaSchema.static.allBicis = function(cb) {
    return this.find({}, cb);
};

bicicletaSchema.static.add = function(aBici, cb) {
    this.create(aBici, cb);
};

bicicletaSchema.static.findByCode = function(aCode, cb) {
    return this.findByCode({code: aCode}, cb);
};

bicicletaSchema.static.removeByCode = function(aCode, cb) {
    return this.deleteCode({code: aCode}, cb);
};




module.exports = mongoose.model('Bicicleta', bicicletaSchema);


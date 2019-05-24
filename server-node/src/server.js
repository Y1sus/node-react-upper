const express = require('express');
const app = express();
const morgan = require('morgan');
const ruta = require('./routes/upper');
const cors = require('cors');

//=============middlewares===========
//Le indicamos a express que use los archivos estaticos del proyecto que se encuentran en la carpeta public
//app.use(express.static(__dirname + '/public'));
//morgan se utiliza para ver por consola lo que va llegando al servidor y con el parametro combined muestra datos mas completos
app.use(morgan('combined'));
//Se usa para recibir los datos de los formularios y entenderlos. La propiedad extended es para entender datos sencillos
app.use(express.urlencoded({extended:false}));
//el objeto json de express permite al server recibir objetos json
app.use(express.json());

app.use(cors());
//==================================

//==========configuraciones==============
//aqui se setea el puerto por defalut para poder utilizarlo mas adelante en cualquier parte de la aplicacion
// process.env.PORT se utiliza en caso de que exista un puerto definido en el sistema o la nube, lo use
app.set('port', process.env.PORT || 3030);
//simplemente para mostrar mas ordenada la respuesta en formato json
app.set('json spaces',2);
//=======================================

//==============routes==================
//le decimos a nuestra aplicacion que utilice la constante ruta
app.use('/api/textUpper',ruta);
//======================================

//#########Start server en el puerto 3030###########
app.listen(app.get('port'), () => {
    console.log(`Server en el puerto ${app.get('port')}`);

});
//##############################################

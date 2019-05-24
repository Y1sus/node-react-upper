const { Router } = require('express');
//router nos permite crear nuevas rutas, igual que antes pero ahora se crea por aparte
const router = Router();

//recibe in parametro desde la url
router.get('/:textoRecibido', (req, res) => {
  const { textoRecibido } = req.params;
  if (textoRecibido) {
    console.log(textoRecibido);
    const textoMayus = textoRecibido.toUpperCase();
    //respondemos con un objeto json 
    res.json({"upper":textoMayus});
  }else{
    res.status(500).json({error:"Hubo un error en el post"});
  }
});

module.exports = router;

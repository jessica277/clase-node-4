  const connection = mysql.createConnection({
  connection.connect();
  
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.json()) // for parsing application/json
  app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  
  app.get('/', (req, res) => {
    res.send("Bienvenido a la API de Rogelio Noris");
  @@ -53,6 +55,20 @@ app.get('/personajes/:id', (req, res) => {
    });
  });
  
  app.post('/personajes', (req, res) => {
    console.log("req", req.body);
    const nombre = req.body.nombre;
    const rol = req.body.rol;
    const descripcion = req.body.descripcion;
    connection.query(`INSERT INTO personajes (nombre, rol, descripcion) VALUES (?,?,?)`, [nombre,rol,descripcion] ,function (error, results, fields) {
      if(error) {
        res.status(400).json({ error: 'consulta no valida.'});
        return;
      }
      res.status(200).json({ success: true });
    });
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  }); 

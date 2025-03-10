const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('API Seguridad Cívica funcionando correctamente.');
});

// Ruta para obtener todos los usuarios (ejemplo con datos simulados)
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
        { id: 2, nombre: 'María González', email: 'maria@example.com' }
    ]);
});

// Ruta para obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const usuarios = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
        { id: 2, nombre: 'María González', email: 'maria@example.com' }
    ];
    
    const usuario = usuarios.find(u => u.id == req.params.id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

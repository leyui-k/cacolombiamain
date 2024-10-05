async function obtenerMiembros() {
    const response = await fetch('http://localhost:3000/miembros');
    const data = await response.json();
    document.getElementById('miembros').innerText = `${data.totalMembers} miembros`;
}

// Llamar a la función para obtener los miembros
obtenerMiembros();
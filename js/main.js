/*==================================================
                MAIN.JS COMPLETO
==================================================*/

const productos = [
    { id: 1, nombre: "Base Líquida Matte", categoria: "Maquillaje", precio: 329, descripcion: "Base de larga duración con acabado mate y cobertura media-alta. Ideal para piel grasa.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 2, nombre: "Labial Mate Larga Duración", categoria: "Maquillaje", precio: 189, descripcion: "Labial líquido de larga duración con acabado mate. No transfiere y mantiene el color por horas.", imagen: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 },
    { id: 3, nombre: "Paleta de Sombras Nude", categoria: "Maquillaje", precio: 399, descripcion: "Paleta con 12 tonos nude, desde mate hasta brillo. Perfecta para looks de día y noche.", imagen: "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=600&q=80", estrellas: 4.2 },
    { id: 4, nombre: "Máscara de Pestañas Volumen", categoria: "Maquillaje", precio: 219, descripcion: "Máscara que da volumen extremo y curvatura a las pestañas. Fórmula resistente al agua.", imagen: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=600&q=80", estrellas: 4.0 },
    { id: 5, nombre: "Delineador Líquido Precisión", categoria: "Maquillaje", precio: 159, descripcion: "Delineador líquido de punta fina para trazos precisos. Larga duración y resistente al agua.", imagen: "https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },
    { id: 6, nombre: "Rubor en Polvo", categoria: "Maquillaje", precio: 249, descripcion: "Rubor en polvo con pigmentación suave. Aporta un toque de color natural y duradero.", imagen: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80", estrellas: 4.1 },
    { id: 7, nombre: "Base en Polvo Compacta", categoria: "Maquillaje", precio: 279, descripcion: "Base en polvo de acabado natural. Controla el brillo y uniformiza el tono de la piel.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },
    { id: 8, nombre: "Fijador de Maquillaje", categoria: "Maquillaje", precio: 199, descripcion: "Spray fijador que mantiene el maquillaje intacto por horas. Sensación fresca y ligera.", imagen: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 9, nombre: "Crema Hidratante Facial", categoria: "Cuidado Facial", precio: 299, descripcion: "Crema hidratante con ácido hialurónico y vitamina E. Proporciona hidratación profunda.", imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 10, nombre: "Protector Solar SPF 50", categoria: "Cuidado Facial", precio: 349, descripcion: "Protector solar facial toque seco, no graso. Protege contra rayos UVA/UVB y previene manchas.", imagen: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80", estrellas: 4.9 },
    { id: 11, nombre: "Sérum de Vitamina C", categoria: "Cuidado Facial", precio: 499, descripcion: "Sérum antioxidante con vitamina C pura. Ilumina la piel, reduce manchas y previene el envejecimiento.", imagen: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 12, nombre: "Limpiador Facial en Gel", categoria: "Cuidado Facial", precio: 199, descripcion: "Gel limpiador suave que elimina impurezas y exceso de grasa sin resecar la piel.", imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },
    { id: 13, nombre: "Exfoliante Facial Suave", categoria: "Cuidado Facial", precio: 249, descripcion: "Exfoliante con partículas suaves que elimina células muertas y renueva la piel.", imagen: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80", estrellas: 4.2 },
    { id: 14, nombre: "Tónico Facial Equilibrante", categoria: "Cuidado Facial", precio: 159, descripcion: "Tónico que equilibra el pH de la piel y cierra los poros. Sensación refrescante.", imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80", estrellas: 4.0 },
    { id: 15, nombre: "Contorno de Ojos", categoria: "Cuidado Facial", precio: 279, descripcion: "Crema específica para el contorno de ojos. Reduce bolsas, ojeras y líneas de expresión.", imagen: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 16, nombre: "Mascarilla Hidratante", categoria: "Cuidado Facial", precio: 179, descripcion: "Mascarilla en crema con ácido hialurónico. Hidratación intensa en 10 minutos.", imagen: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },
    { id: 17, nombre: "Shampoo Sólido Nutritivo", categoria: "Cabello", precio: 149, descripcion: "Shampoo sólido ecológico con aceite de argán y coco. Limpia y nutre el cabello.", imagen: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },
    { id: 18, nombre: "Acondicionador Natural", categoria: "Cabello", precio: 169, descripcion: "Acondicionador con manteca de karité y aceite de jojoba. Desenreda y da brillo.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 4.1 },
    { id: 19, nombre: "Mascarilla Reparadora Capilar", categoria: "Cabello", precio: 259, descripcion: "Mascarilla intensiva con queratina y aceite de argán. Repara puntas abiertas y cabello dañado.", imagen: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 20, nombre: "Spray Fijador de Brillo", categoria: "Cabello", precio: 189, descripcion: "Spray fijador que da brillo y mantiene el peinado. Fijación media, sin efecto pegajoso.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 3.9 },
    { id: 21, nombre: "Aceite Capilar", categoria: "Cabello", precio: 229, descripcion: "Aceite nutritivo con argán y coco. Da brillo, suavidad y protege el cabello.", imagen: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },
    { id: 22, nombre: "Champú Anticaída", categoria: "Cabello", precio: 199, descripcion: "Champú que fortalece el cabello desde la raíz. Reduce la caída y estimula el crecimiento.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 4.0 },
    { id: 23, nombre: "Mousse Volumen", categoria: "Cabello", precio: 159, descripcion: "Mousse que da volumen y cuerpo al cabello. Fijación flexible y sin apelmazar.", imagen: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80", estrellas: 4.2 },
    { id: 24, nombre: "Tratamiento Capilar", categoria: "Cabello", precio: 299, descripcion: "Tratamiento intensivo con queratina líquida. Repara el cabello desde el interior.", imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 25, nombre: "Perfume Floral Eau de Parfum", categoria: "Perfumes", precio: 599, descripcion: "Fragancia floral con notas de rosa, jazmín y peonía. Envuelve con suavidad y elegancia.", imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 },
    { id: 26, nombre: "Perfume Amaderado de Lujo", categoria: "Perfumes", precio: 699, descripcion: "Aroma amaderado con notas de sándalo, cedro y vainilla. Perfecto para ocasiones especiales.", imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", estrellas: 4.9 },
    { id: 27, nombre: "Perfume Cítrico Fresco", categoria: "Perfumes", precio: 549, descripcion: "Fragancia fresca con notas de limón, naranja y bergamota. Ideal para el día a día.", imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", estrellas: 4.2 },
    { id: 28, nombre: "Perfume Dulce y Floral", categoria: "Perfumes", precio: 629, descripcion: "Combinación de flores blancas y frutas dulces como pera y durazno. Perfume juvenil y alegre.", imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },
    { id: 29, nombre: "Perfume Maderas Orientales", categoria: "Perfumes", precio: 749, descripcion: "Fragancia cálida con notas de oud, madera de gaiac y ámbar. Intensa y duradera.", imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 30, nombre: "Perfume Floral Acuático", categoria: "Perfumes", precio: 579, descripcion: "Fragancia acuática con notas de lirio, nenúfar y almizcle blanco. Fresca y elegante.", imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", estrellas: 4.1 },
    { id: 31, nombre: "Perfume Frutal", categoria: "Perfumes", precio: 499, descripcion: "Aroma frutal con notas de frutos rojos y mandarina. Energizante y juvenil.", imagen: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80", estrellas: 4.0 },
    { id: 32, nombre: "Perfume Especiado", categoria: "Perfumes", precio: 649, descripcion: "Fragancia especiada con canela, clavo y cardamomo. Cálida y envolvente.", imagen: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 }
];

function generarEstrellasHTML(puntuacion) {
    const total = 5;
    let html = '';
    const enteras = Math.floor(puntuacion);
    const decimal = puntuacion - enteras;
    for (let i = 0; i < total; i++) {
        if (i < enteras) html += '<i class="bi bi-star-fill"></i>';
        else if (i === enteras && decimal >= 0.5) html += '<i class="bi bi-star-half"></i>';
        else html += '<i class="bi bi-star"></i>';
    }
    return html;
}

function obtenerReseñas(productoId) {
    const data = localStorage.getItem(`reseñas_${productoId}`);
    return data ? JSON.parse(data) : [];
}

function guardarReseña(productoId, usuario, estrellas, comentario) {
    const reseñas = obtenerReseñas(productoId);
    reseñas.push({
        usuario: usuario || 'Anónimo',
        estrellas: parseInt(estrellas) || 5,
        comentario: comentario || '',
        fecha: new Date().toLocaleDateString('es-ES')
    });
    localStorage.setItem(`reseñas_${productoId}`, JSON.stringify(reseñas));
}

function cargarReseñas(productoId) {
    const container = document.getElementById('modalReseñasContainer');
    if (!container) return;
    const reseñas = obtenerReseñas(productoId);
    if (reseñas.length === 0) {
        container.innerHTML = '<p class="text-muted small">No hay reseñas aún. ¡Sé el primero en opinar!</p>';
        return;
    }
    let html = '';
    reseñas.forEach(r => {
        html += `
            <div class="reseña-item">
                <div class="d-flex justify-content-between align-items-center">
                    <strong>${r.usuario}</strong>
                    <span class="estrellas-reseña">${generarEstrellasHTML(r.estrellas)}</span>
                </div>
                <p class="mb-0 small">${r.comentario}</p>
                <span class="text-muted small">${r.fecha}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function obtenerCarrito() {
    const data = localStorage.getItem('carrito');
    return data ? JSON.parse(data) : [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito(carrito);
    mostrarToast('Producto agregado al carrito');
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito().filter(item => item.id !== id);
    guardarCarrito(carrito);
}

function vaciarCarrito() {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
        localStorage.removeItem('carrito');
        actualizarContadorCarrito();
    }
}

function cambiarCantidad(id, delta) {
    const carrito = obtenerCarrito();
    const item = carrito.find(p => p.id === id);
    if (!item) return;
    const nuevaCant = item.cantidad + delta;
    if (nuevaCant <= 0) {
        eliminarDelCarrito(id);
        return;
    }
    item.cantidad = nuevaCant;
    guardarCarrito(carrito);
}

function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.querySelectorAll('#carritoCount').forEach(el => el.textContent = total);
}

function mostrarToast(mensaje) {
    const toastEl = document.getElementById('toastCarrito');
    if (toastEl) {
        toastEl.querySelector('.toast-body').innerHTML = `<i class="bi bi-check-circle-fill me-2"></i> ${mensaje}`;
        new bootstrap.Toast(toastEl).show();
    }
}

let productoActualId = null;
let productoActual = null;

function abrirModalProducto(id) {
    productoActual = productos.find(p => p.id === id);
    if (!productoActual) return;
    productoActualId = id;

    document.getElementById('modalProductoNombre').textContent = productoActual.nombre;
    document.getElementById('modalProductoTitulo').textContent = productoActual.nombre;
    document.getElementById('modalProductoImagen').src = productoActual.imagen;
    document.getElementById('modalProductoImagen').alt = productoActual.nombre;
    document.getElementById('modalProductoPrecio').textContent = `$${productoActual.precio}`;
    document.getElementById('modalProductoDescripcion').textContent = productoActual.descripcion;
    document.getElementById('modalProductoCategoria').textContent = productoActual.categoria;
    document.getElementById('modalProductoEstrellas').innerHTML = generarEstrellasHTML(productoActual.estrellas);
    cargarReseñas(id);
    new bootstrap.Modal(document.getElementById('productoModal')).show();
}

function cargarProductosPorCategoria(categoria) {
    const container = document.getElementById('productosContainer');
    if (!container) return;
    const productosCat = productos.filter(p => p.categoria === categoria);
    if (productosCat.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-5"><i class="bi bi-emoji-frown" style="font-size:3rem;color:#ccc;"></i><h4 class="mt-3">No hay productos en esta categoría</h4></div>`;
        return;
    }
    let html = '';
    productosCat.forEach(p => {
        html += `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="product-card" data-id="${p.id}">
                    <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                    <div class="product-info">
                        <h5>${p.nombre}</h5>
                        <div class="stars">${generarEstrellasHTML(p.estrellas)} <span class="text-muted small">(${p.estrellas})</span></div>
                        <div class="price">$${p.precio}</div>
                        <p class="desc">${p.descripcion.substring(0, 60)}...</p>
                        <button class="btn btn-pink btn-sm w-100 ver-producto" data-id="${p.id}">Ver producto</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    document.querySelectorAll('.ver-producto').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            abrirModalProducto(parseInt(this.dataset.id));
        });
    });
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            abrirModalProducto(parseInt(this.dataset.id));
        });
    });
}

const fuse = new Fuse(productos, {
    keys: ['nombre', 'categoria', 'descripcion'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2
});

const searchInput = document.getElementById('busqueda');
const suggestionsContainer = document.getElementById('suggestions');

function mostrarSugerencias(results) {
    if (!suggestionsContainer) return;
    if (!results || results.length === 0) {
        suggestionsContainer.innerHTML = `<div class="p-3 text-muted text-center"><i class="bi bi-search"></i> No se encontraron productos</div>`;
        suggestionsContainer.style.display = 'block';
        return;
    }
    let html = '';
    results.slice(0, 8).forEach(result => {
        const item = result.item;
        html += `
            <div class="suggestion-item" data-id="${item.id}">
                <div>
                    <div class="suggestion-name">${item.nombre}</div>
                    <div class="suggestion-category">${item.categoria}</div>
                </div>
                <div class="suggestion-price">$${item.precio}</div>
            </div>
        `;
    });
    suggestionsContainer.innerHTML = html;
    suggestionsContainer.style.display = 'block';
    document.querySelectorAll('.suggestion-item').forEach(el => {
        el.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            searchInput.value = '';
            suggestionsContainer.style.display = 'none';
            abrirModalProducto(id);
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length < 2) {
            if (suggestionsContainer) suggestionsContainer.style.display = 'none';
            return;
        }
        mostrarSugerencias(fuse.search(query));
    });
}

const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput ? searchInput.value.trim() : '';
        if (query.length < 2) return;
        const results = fuse.search(query);
        if (results.length > 0) {
            abrirModalProducto(results[0].item.id);
            if (suggestionsContainer) suggestionsContainer.style.display = 'none';
        } else {
            mostrarSugerencias([]);
        }
    });
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-box') && suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
});
// =============================================
// MÓDULO DE VOZ
// =============================================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let reconocimiento;

if (SpeechRecognition) {
    reconocimiento = new SpeechRecognition();
    reconocimiento.lang = 'es-MX';
    reconocimiento.continuous = false;
    reconocimiento.interimResults = false;
}

async function activarFiltroRuido() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        const filter = audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 3000;
        source.connect(filter);
        filter.connect(audioContext.destination);
    } catch (error) {
        console.error('Error filtro de ruido:', error);
    }
}

function iniciarDictado(idCampo) {
    if (!reconocimiento) {
        alert('Tu navegador no soporta reconocimiento de voz.');
        return;
    }
    const campo = document.getElementById(idCampo);
    if (!campo) return;
    activarFiltroRuido();
    const boton = document.querySelector(`[id="btnDictar${idCampo.charAt(0).toUpperCase() + idCampo.slice(1)}"]`);
    if (boton) {
        boton.innerHTML = '<i class="bi bi-mic-fill"></i>';
        boton.style.color = '#e83e8c';
        boton.disabled = true;
    }
    reconocimiento.start();
    reconocimiento.onresult = function(event) {
        campo.value = event.results[0][0].transcript;
        actualizarBusquedaPorVoz(campo.value);
        reconocimiento.stop();
    };
    reconocimiento.onerror = function() {
        if (boton) {
            boton.innerHTML = '<i class="bi bi-mic"></i>';
            boton.style.color = '';
            boton.disabled = false;
        }
        alert('Error al reconocer voz. Intenta de nuevo.');
    };
    reconocimiento.onend = function() {
        if (boton) {
            boton.innerHTML = '<i class="bi bi-mic"></i>';
            boton.style.color = '';
            boton.disabled = false;
        }
    };
}

function actualizarBusquedaPorVoz(texto) {
    if (searchInput) {
        searchInput.value = texto;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[id^="btnDictar"]').forEach(function(boton) {
        boton.addEventListener('click', function() {
            const idCampo = this.id.replace('btnDictar', '').toLowerCase();
            iniciarDictado(idCampo);
        });
    });
});

// =============================================
// BÚSQUEDA POR IMAGEN / TOMAR FOTO
// =============================================
const btnImagen = document.getElementById('btnBuscarImagen');
const inputImagen = document.getElementById('inputImagen');

if (btnImagen && inputImagen) {
    btnImagen.addEventListener('click', () => inputImagen.click());
    inputImagen.addEventListener('change', function() {
        const file = this.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(ev) {
            const imgData = ev.target.result;
            const shuffled = [...productos].sort(() => 0.5 - Math.random());
            const posibles = shuffled.slice(0, 3);
            const htmlResultados = posibles.map(p => `
                <div class="d-flex align-items-center gap-3 mb-2 p-2 border rounded" style="cursor:pointer;" onclick="abrirModalProducto(${p.id})">
                    <img src="${p.imagen}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;">
                    <div class="flex-grow-1">
                        <div class="fw-semibold">${p.nombre}</div>
                        <small class="text-muted">${p.categoria}</small>
                    </div>
                    <span class="text-pink fw-bold">$${p.precio}</span>
                </div>
            `).join('');
            let modalExistente = document.getElementById('modalBusquedaImagen');
            if (modalExistente) modalExistente.remove();
            document.body.insertAdjacentHTML('beforeend', `
                <div class="modal fade" id="modalBusquedaImagen" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content" style="border-radius:20px;">
                            <div class="modal-header border-0">
                                <h5 class="modal-title"><i class="bi bi-camera me-2"></i> Búsqueda por foto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body text-center">
                                <img src="${imgData}" style="max-width:100%;max-height:180px;border-radius:12px;margin-bottom:16px;object-fit:contain;">
                                <p class="text-muted small mb-3">Posibles coincidencias:</p>
                                <div class="text-start">${htmlResultados}</div>
                                <p class="small text-muted mt-3 mb-0">* Simulación. Para IA real configura Google Vision u otra API.</p>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            const modal = new bootstrap.Modal(document.getElementById('modalBusquedaImagen'));
            modal.show();
            document.getElementById('modalBusquedaImagen').addEventListener('hidden.bs.modal', function() {
                this.remove();
            });
        };
        reader.readAsDataURL(file);
        this.value = '';
    });
}

// =============================================
// EVENTOS DEL MODAL
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const ratingInput = document.getElementById('ratingInput');
    const hiddenRating = document.getElementById('reseñaEstrellas');
    if (ratingInput) {
        const stars = ratingInput.querySelectorAll('i');
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.dataset.rating);
                hiddenRating.value = rating;
                stars.forEach(s => {
                    s.className = parseInt(s.dataset.rating) <= rating ? 'bi bi-star-fill' : 'bi bi-star';
                });
            });
            star.addEventListener('mouseenter', function() {
                const rating = parseInt(this.dataset.rating);
                stars.forEach(s => {
                    s.className = parseInt(s.dataset.rating) <= rating ? 'bi bi-star-fill' : 'bi bi-star';
                });
            });
            star.addEventListener('mouseleave', function() {
                const selected = parseInt(hiddenRating.value) || 0;
                stars.forEach(s => {
                    s.className = parseInt(s.dataset.rating) <= selected ? 'bi bi-star-fill' : 'bi bi-star';
                });
            });
        });
    }

    document.getElementById('formReseña')?.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!productoActualId) return;
        const usuario = document.getElementById('reseñaUsuario').value.trim() || 'Anónimo';
        const estrellas = parseInt(document.getElementById('reseñaEstrellas').value) || 5;
        const comentario = document.getElementById('reseñaComentario').value.trim();
        if (!comentario) {
            alert('Por favor escribe un comentario.');
            return;
        }
        guardarReseña(productoActualId, usuario, estrellas, comentario);
        cargarReseñas(productoActualId);
        this.reset();
        document.querySelectorAll('#ratingInput i').forEach(s => s.className = 'bi bi-star');
        document.getElementById('reseñaEstrellas').value = 0;
        alert('¡Reseña agregada!');
    });

    document.getElementById('btnAgregarCarrito')?.addEventListener('click', function() {
        if (!productoActual) return;
        agregarAlCarrito(productoActual);
    });

    document.getElementById('btnComprarAhora')?.addEventListener('click', function() {
        if (!productoActual) return;
        agregarAlCarrito(productoActual);
        alert(`🛒 Compra de ${productoActual.nombre} realizada con éxito. ¡Gracias!`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselBeauty');
    if (carousel) {
        new bootstrap.Carousel(carousel, { interval: 5000, pause: false, ride: 'carousel', wrap: true });
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show-animation');
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.product-card, .benefit, .category-card').forEach(el => {
        el.classList.add('hidden-animation');
        observer.observe(el);
    });
    actualizarContadorCarrito();
});
//holiiiii leo 
window.abrirModalProducto = abrirModalProducto;
window.cargarProductosPorCategoria = cargarProductosPorCategoria;
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.cambiarCantidad = cambiarCantidad;
window.vaciarCarrito = vaciarCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
window.generarEstrellasHTML = generarEstrellasHTML;
/*==================================================
        MAIN.JS - ÓPTICA VISIÓN IA
==================================================*/

const productos = [
    // ARMAZONES OFTÁLMICOS
    { id: 1, nombre: "Armazón Titanio Ligero", categoria: "Armazones Oftálmicos", precio: 1890, descripcion: "Armazón de titanio ultra ligero, hipoalergénico y resistente. Ideal para uso diario.", imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5041?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 },
    { id: 2, nombre: "Armazón Acetato Clásico", categoria: "Armazones Oftálmicos", precio: 1290, descripcion: "Diseño clásico en acetato de alta calidad. Cómodo y duradero.", imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 3, nombre: "Armazón Redondo Vintage", categoria: "Armazones Oftálmicos", precio: 1450, descripcion: "Estilo retro redondo. Perfecto para looks intelectuales y creativos.", imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 4, nombre: "Armazón Deportivo Flexible", categoria: "Armazones Oftálmicos", precio: 1590, descripcion: "Material TR90 flexible y resistente a impactos. Ideal para niños y adultos activos.", imagen: "https://images.unsplash.com/photo-1577803645773-f96470509667?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 5, nombre: "Armazón Cuadrado Moderno", categoria: "Armazones Oftálmicos", precio: 1390, descripcion: "Diseño angular contemporáneo. Aporta presencia y estilo profesional.", imagen: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },
    { id: 6, nombre: "Armazón Cat-Eye Elegante", categoria: "Armazones Oftálmicos", precio: 1690, descripcion: "Estilo cat-eye sofisticado. Ideal para realzar el rostro femenino.", imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80", estrellas: 4.9 },

    // LENTES DE SOL
    { id: 7, nombre: "Lentes de Sol Polarizados Classic", categoria: "Lentes de Sol", precio: 1490, descripcion: "Polarizados 100% UV400. Reducen el deslumbramiento y protegen tus ojos.", imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 8, nombre: "Lentes de Sol Aviador", categoria: "Lentes de Sol", precio: 1790, descripcion: "Estilo aviador icónico con lentes espejados. Protección total y look atemporal.", imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 },
    { id: 9, nombre: "Lentes de Sol Deportivos", categoria: "Lentes de Sol", precio: 1650, descripcion: "Diseño envolvente para deporte. Antivaho y máxima cobertura.", imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5041?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 10, nombre: "Lentes de Sol Oversize", categoria: "Lentes de Sol", precio: 1550, descripcion: "Diseño oversized de tendencia. Protección completa y estilo statement.", imagen: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 11, nombre: "Lentes de Sol Clip-On", categoria: "Lentes de Sol", precio: 890, descripcion: "Clip-on magnético polarizado. Convierte tus armazones en lentes de sol al instante.", imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },

    // LENTES DE CONTACTO
    { id: 12, nombre: "Lentes de Contacto Diarios (30 pz)", categoria: "Lentes de Contacto", precio: 690, descripcion: "Lentes diarios desechables de silicona hidrogel. Máxima comodidad y oxigenación.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 13, nombre: "Lentes de Contacto Mensuales", categoria: "Lentes de Contacto", precio: 890, descripcion: "Lentes mensuales de alta hidratación. Ideales para uso prolongado.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 14, nombre: "Lentes de Contacto de Color", categoria: "Lentes de Contacto", precio: 750, descripcion: "Lentes de color naturales. Disponibles en varios tonos para cambiar tu look.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },
    { id: 15, nombre: "Solución Multipropósito 360ml", categoria: "Lentes de Contacto", precio: 280, descripcion: "Solución limpiadora, desinfectante y lubricante para lentes de contacto.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },

    // FILTRO LUZ AZUL
    { id: 16, nombre: "Lentes Filtro Luz Azul Premium", categoria: "Filtro Luz Azul", precio: 1290, descripcion: "Bloquean hasta el 40% de luz azul dañina. Reducen fatiga visual digital.", imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5041?auto=format&fit=crop&w=600&q=80", estrellas: 4.9 },
    { id: 17, nombre: "Lentes Blue Light Office", categoria: "Filtro Luz Azul", precio: 990, descripcion: "Diseñados para trabajo de oficina y pantallas. Ligero y cómodo todo el día.", imagen: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 18, nombre: "Lentes Gamer Anti-Fatiga", categoria: "Filtro Luz Azul", precio: 1390, descripcion: "Especiales para gamers. Filtro luz azul + anti-reflejante avanzado.", imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 },
    { id: 19, nombre: "Clip-On Filtro Luz Azul", categoria: "Filtro Luz Azul", precio: 590, descripcion: "Clip magnético con filtro luz azul. Compatible con la mayoría de armazones.", imagen: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80", estrellas: 4.4 },

    // ACCESORIOS
    { id: 20, nombre: "Estuche Rígido Premium", categoria: "Accesorios", precio: 250, descripcion: "Estuche rígido con interior de microfibra. Protege tus lentes de golpes.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.5 },
    { id: 21, nombre: "Paño de Microfibra Pack x3", categoria: "Accesorios", precio: 180, descripcion: "Paños de microfibra de alta calidad. Limpieza sin rayones.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.6 },
    { id: 22, nombre: "Spray Limpiador Antirayaduras", categoria: "Accesorios", precio: 220, descripcion: "Spray especial para lentes. Limpia y protege el recubrimiento antirreflejante.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.7 },
    { id: 23, nombre: "Cordón Deportivo Ajustable", categoria: "Accesorios", precio: 150, descripcion: "Cordón deportivo con ajuste. Evita que se caigan tus lentes.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.3 },
    { id: 24, nombre: "Kit de Limpieza Completo", categoria: "Accesorios", precio: 350, descripcion: "Incluye spray, paños, destornillador y estuche. Todo lo necesario para el cuidado.", imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80", estrellas: 4.8 }
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
        fecha: new Date().toLocaleDateString('es-MX')
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
                    <span class="estrellas-reseña text-warning">${generarEstrellasHTML(r.estrellas)}</span>
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
    mostrarToast(`${producto.nombre} agregado al carrito`);
}

function eliminarDelCarrito(id) {
    let carrito = obtenerCarrito().filter(item => item.id !== id);
    guardarCarrito(carrito);
}

function vaciarCarrito() {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
        localStorage.removeItem('carrito');
        actualizarContadorCarrito();
        if (typeof renderizarCarrito === 'function') renderizarCarrito();
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
    document.getElementById('modalProductoPrecio').textContent = `$${productoActual.precio.toLocaleString('es-MX')}`;
    document.getElementById('modalProductoDescripcion').textContent = productoActual.descripcion;
    document.getElementById('modalProductoCategoria').textContent = productoActual.categoria;
    document.getElementById('modalProductoEstrellas').innerHTML = generarEstrellasHTML(productoActual.estrellas);
    cargarReseñas(id);
    new bootstrap.Modal(document.getElementById('productoModal')).show();
}

function cargarProductosPorCategoria(categoria) {
    const container = document.getElementById('productosContainer');
    if (!container) return;

    const productosCat = categoria === 'Todos' || !categoria
        ? productos
        : productos.filter(p => p.categoria === categoria);

    if (productosCat.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-emoji-frown" style="font-size:3rem;color:#ccc;"></i>
                <h4 class="mt-3">No hay productos en esta categoría</h4>
            </div>`;
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
                        <div class="stars text-warning">${generarEstrellasHTML(p.estrellas)} <span class="text-muted small">(${p.estrellas})</span></div>
                        <div class="price">$${p.precio.toLocaleString('es-MX')}</div>
                        <p class="desc">${p.descripcion.substring(0, 65)}...</p>
                        <button class="btn btn-primary btn-sm w-100 ver-producto" data-id="${p.id}">Ver producto</button>
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
    threshold: 0.35,
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
                <div class="suggestion-price">$${item.precio.toLocaleString('es-MX')}</div>
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

/* MÓDULO DE VOZ */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let reconocimiento;

if (SpeechRecognition) {
    reconocimiento = new SpeechRecognition();
    reconocimiento.lang = 'es-MX';
    reconocimiento.continuous = false;
    reconocimiento.interimResults = false;
}

function iniciarDictado(idCampo) {
    if (!reconocimiento) {
        alert('Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.');
        return;
    }
    const campo = document.getElementById(idCampo);
    if (!campo) return;

    const boton = document.getElementById('btnDictarBusqueda');
    if (boton) {
        boton.innerHTML = '<i class="bi bi-mic-fill"></i>';
        boton.style.color = '#0d6efd';
        boton.disabled = true;
    }

    reconocimiento.start();

    reconocimiento.onresult = function(event) {
        campo.value = event.results[0][0].transcript;
        campo.dispatchEvent(new Event('input', { bubbles: true }));
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

/* BÚSQUEDA POR IMAGEN */
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
            const posibles = [...productos]
                .filter(p => p.categoria.includes('Armazones') || p.categoria.includes('Lentes de Sol') || p.categoria.includes('Filtro'))
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);

            const htmlResultados = posibles.map(p => `
                <div class="d-flex align-items-center gap-3 mb-2 p-2 border rounded" style="cursor:pointer;" onclick="abrirModalProducto(${p.id})">
                    <img src="${p.imagen}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;">
                    <div class="flex-grow-1">
                        <div class="fw-semibold">${p.nombre}</div>
                        <small class="text-muted">${p.categoria}</small>
                    </div>
                    <span class="text-primary fw-bold">$${p.precio.toLocaleString('es-MX')}</span>
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
                                <p class="text-muted small mb-3">Posibles coincidencias según tu foto:</p>
                                <div class="text-start">${htmlResultados}</div>
                                <p class="small text-muted mt-3 mb-0">* Simulación de IA. En producción se usaría Vision API.</p>
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

/* EVENTOS */
document.addEventListener('DOMContentLoaded', function() {
    // Rating estrellas
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
        alert(`🛒 Compra de "${productoActual.nombre}" realizada con éxito.\n¡Gracias por confiar en VisiónIA!`);
    });

    // Botón de voz
    document.getElementById('btnDictarBusqueda')?.addEventListener('click', function() {
        iniciarDictado('busqueda');
    });

    // Catálogo: cargar según URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    if (document.getElementById('productosContainer')) {
        if (categoria) {
            cargarProductosPorCategoria(categoria);
            // Actualizar título si existe
            const titulo = document.getElementById('categoriaTitulo');
            const desc = document.getElementById('categoriaDescripcion');
            if (titulo) titulo.textContent = categoria;
            if (desc) {
                const descripciones = {
                    'Armazones Oftálmicos': 'Armazones graduados de alta calidad y diseño moderno.',
                    'Lentes de Sol': 'Protección UV400 y estilo para todos los días.',
                    'Lentes de Contacto': 'Comodidad y nitidez para tu visión diaria.',
                    'Filtro Luz Azul': 'Protege tus ojos de la fatiga digital.',
                    'Accesorios': 'Todo lo que necesitas para cuidar tus lentes.'
                };
                desc.textContent = descripciones[categoria] || 'Encuentra los mejores productos para tu visión.';
            }
        } else {
            cargarProductosPorCategoria('Todos');
        }
    }

    actualizarContadorCarrito();
});

window.abrirModalProducto = abrirModalProducto;
window.cargarProductosPorCategoria = cargarProductosPorCategoria;
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.cambiarCantidad = cambiarCantidad;
window.vaciarCarrito = vaciarCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
window.generarEstrellasHTML = generarEstrellasHTML;
window.productos = productos;
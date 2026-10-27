# Víctor Iermito — sitio web

Maqueta interactiva de la web de Víctor Iermito, luthier de guitarras clásicas en Francia. Incluye español, francés e inglés.

## Ejecutar localmente

No requiere compilación ni instalación de paquetes. Con Python 3:

```sh
python3 -m http.server 8080 --directory dist
```

Abrir http://localhost:8080 en un navegador.

## Estructura

- `dist/index.html`: página base y contenido inicial.
- `dist/assets/update.js`: idiomas, rutas, catálogo, ficha de identidad y lector QR.
- `dist/assets/luxury.js`: presentación y textos de los modelos.
- `dist/assets/press.js`: trayectoria, prensa y proyectos.
- `dist/assets/refinement.js`: refinamientos actuales de contenido y organización.
- `dist/assets/*.css`: estilos, en orden de carga desde index.html.
- `dist/assets/real/`: fotografías del taller usadas en la maqueta.
- `dist/assets/jsQR.js`: biblioteca externa para leer QR desde la cámara.

El orden de carga de los scripts y estilos es significativo. Esta versión conserva la estructura de la maqueta para reproducir exactamente su comportamiento actual.

## Publicación

Publicar el contenido de `dist/` en un alojamiento estático con HTTPS. Las rutas internas usan fragmentos (`#/guitars`), por lo que no requieren reglas especiales de servidor. La cámara requiere HTTPS o localhost y permiso del visitante.

## Estado de la maqueta

- Catálogo: T-1, T-2, T-3, ECO, otros instrumentos y proyectos personalizados.
- Tu guitarra: escaneo QR y consulta por número de serie. Solo está incorporada la ficha de ejemplo 35290; todavía no existe conexión a una base de datos de todos los instrumentos.
- Las fotografías son provisionales: su correspondencia con cada modelo está pendiente de confirmar.
- Los enlaces de contacto abren Instagram; no hay formulario con servidor.
- Los textos históricos no representan disponibilidad actual de cursos o proyectos.
- El control de acceso del alojamiento de la maqueta es externo a estos archivos. Esta copia estática no incluye autenticación propia.

## Derechos

Los textos, fotografías y logotipos del taller no se ofrecen bajo una licencia de software libre por el hecho de publicarse este repositorio. `jsQR` es una dependencia de terceros; conservar su licencia al distribuir el proyecto.

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then((register) => {
           Notification.requestPermission()
           .then((resp) => register.showNotification('Gracias por descargar mi portafolio :D'));
        });

}

if(window.caches) {
    // Creando el cache
    caches.open('prueba1').then((cache) => {
        cache.addAll([
            '/index.html',
            '/assets/img/about3.png',
            '/assets/img/perfil2.png',
            '/assets/img/work1.jpg',
            '/assets/img/work2.jpg',
            '/assets/img/work3.jpg',
            '/assets/img/work4.jpg',
            '/assets/img/work5.jpg',
            '/assets/img/work6.jpg',
            '/assets/img/work7.jpg',
            '/assets/scss/styles.scss',
        ]);
    })
}
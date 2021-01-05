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
        //cache.add('/pages/offline.html');
        cache.addAll([
            '/index.html',
            '/assets/img/about3.png',
            '/assets/img/perfil2.png',
            '/assets/img/work1.png',
            '/assets/img/work2.png',
            '/assets/img/work3.png',
            '/assets/img/work4.png',
            '/assets/img/work5.png',
            '/assets/img/work6.png',
            '/assets/img/work7.png',
            '/assets/scss/styles.css',
        ]).then(() => {
            cache.put('index.html', new Response('Hola Mundo'));
        });

        cache.match('/index.html').then((resp) => {
            resp.text().then(console.log)
        });
    })
    // Comprobando que existe el cache
    caches.has('prueba1').then(console.log);
    // Eliminado el cache
    //caches.delete('prueba1').then(console.log);
    caches.keys().then(console.log);

}
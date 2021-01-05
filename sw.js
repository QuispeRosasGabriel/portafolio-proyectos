self.addEventListener('fetch', (event) => {
    const offLineResp = fetch('/index.html');
 
     const resp = fetch(event.request)
         .catch(() => offLineResp);
 
     event.respondWith(resp);
 })
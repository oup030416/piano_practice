const CACHE = 'piano-practice-v1';
self.addEventListener('install', (e)=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest'])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request).then(resp=>{
      try{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy));
      }catch(_){}
      return resp;
    }).catch(()=>res))
  );
});

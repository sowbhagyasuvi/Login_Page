(function(){
    self.addEventListener('install', event => {
        console.log("Service worker installing................");
        self.skipWaiting();
    })
    self.addEventListener('activate',event => {
        console.log("service worker activating");
    })
    self.addEventListener('fetch',event => {
        console.log("service worker fectching",event.request.url);
        
    })
})
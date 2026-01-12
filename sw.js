const CACHE_VERSION = 'playshelf-v3'
const CACHE_EXTERNAL = 'playshelf-external-v3'

const CORE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './supabase.js',
  './manifest.webmanifest'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION)
      await cache.addAll(CORE_ASSETS)
      await self.skipWaiting()
    })()
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION && key !== CACHE_EXTERNAL)
          .map((key) => caches.delete(key))
      )
      await self.clients.claim()
    })()
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  const isExternal = url.origin !== self.location.origin
  
  // Recursos externos (imagens RAWG, APIs, etc) - Stale-While-Revalidate
  if (isExternal) {
    const accept = request.headers.get('accept') || ''
    const isImage = accept.includes('image/') || url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg)/i)
    const isAPI = accept.includes('application/json') || url.pathname.includes('/api/')
    
    // Aplicar stale-while-revalidate apenas para imagens e APIs JSON
    if (isImage || isAPI) {
      event.respondWith(
        (async () => {
          const cache = await caches.open(CACHE_EXTERNAL)
          const cached = await cache.match(request)
          
          // Retorna cache imediatamente se disponível (resposta rápida)
          const networkPromise = fetch(request)
            .then((response) => {
              // Atualiza cache em background para próximo uso
              if (response && response.ok && response.status === 200) {
                cache.put(request, response.clone())
              }
              return response
            })
            .catch(() => null)
          
          if (cached) {
            // Retorna cache imediatamente, atualiza em background
            event.waitUntil(networkPromise)
            return cached
          }
          
          // Se não tem cache, espera pela rede
          const response = await networkPromise
          if (response) return response
          
          // Se falhou e tem cache antigo, retorna mesmo assim
          return cached || new Response('', { status: 504 })
        })()
      )
      return
    }
    
    // Para outros recursos externos, deixa passar direto (sem interceptação)
    return
  }

  // Recursos da mesma origem - estratégias existentes
  const accept = request.headers.get('accept') || ''
  const isHtml = request.mode === 'navigate' || accept.includes('text/html')
  const isCoreAsset = url.pathname.endsWith('.js') || url.pathname.endsWith('.css') || url.pathname.endsWith('.webmanifest')

  if (isHtml) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_VERSION)
        try {
          const response = await fetch(request)
          if (response && response.ok) cache.put(request, response.clone())
          return response
        } catch (err) {
          const cached = await cache.match(request)
          if (cached) return cached
          const fallback = await cache.match('./index.html')
          if (fallback) return fallback
          throw err
        }
      })()
    )
    return
  }

  if (isCoreAsset) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_VERSION)
        const cached = await cache.match(request)
        const networkPromise = fetch(request)
          .then((response) => {
            if (response && response.ok) cache.put(request, response.clone())
            return response
          })
          .catch(() => null)
        if (cached) {
          event.waitUntil(networkPromise)
          return cached
        }
        const response = await networkPromise
        if (response) return response
        const fallback = await cache.match('./index.html')
        if (fallback) return fallback
        return new Response('', { status: 504 })
      })()
    )
    return
  }
})



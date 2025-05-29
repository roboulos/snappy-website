// Worker script for serving static assets
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Default to index.html for root path
    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }
    
    // Try to serve the requested asset
    try {
      return await env.ASSETS.fetch(new Request(url.toString(), request));
    } catch (e) {
      // Return 404 if asset not found
      return new Response('Not Found', { status: 404 });
    }
  },
};
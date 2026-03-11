/**
 * Google Analytics 4 (GA4) — only runs when VITE_GA_MEASUREMENT_ID is set.
 * Set in .env or Cloudflare Pages env: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    send_page_view: true,
    anonymize_ip: true,
  });
}

export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && window.gtag && GA_ID) {
    window.gtag('event', name, params);
  }
}

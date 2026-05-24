// Page template helper - generates consistent inner pages
// Usage: include this + components.js on inner pages

function createPageSchema(opts) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": opts.title,
    "description": opts.desc,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://authorisedlaptopservicelucknow.com/#business",
      "name": "NexCore Laptop Service Lucknow",
      "telephone": "+919236336066",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-101, Ishawari Dayal Complex, Latouche Road",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226018",
        "addressCountry": "IN"
      }
    },
    "areaServed": {"@type": "City", "name": "Lucknow"},
    "offers": {"@type": "Offer", "priceCurrency": "INR", "price": opts.price || "299"}
  };
}

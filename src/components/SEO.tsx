import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  jsonLd?: object;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = 'https://kcgtours.gr/images/hero2.webp', 
  url = 'https://kcgtours.gr/',
  jsonLd 
}: SEOProps) => {
  useEffect(() => {
    // Title
    const baseTitle = 'KCG Tours | Kefalonia Tours & Cruises';
    const fullTitle = title ? `${title} | KCG Tours` : baseTitle;
    document.title = fullTitle;

    // Meta tags helper
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, true);
      updateMeta('twitter:description', description);
    }

    if (keywords) {
      updateMeta('keywords', keywords);
    }

    updateMeta('og:title', fullTitle, true);
    updateMeta('twitter:title', fullTitle);
    updateMeta('og:image', image, true);
    updateMeta('twitter:image', image);
    updateMeta('og:url', url, true);
    updateMeta('twitter:url', url);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // JSON-LD
    let script = document.querySelector('#json-ld');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    if (jsonLd) {
      script.textContent = JSON.stringify(jsonLd);
    } else {
      // Default Organization Schema for Home
      const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "KCG Tours",
        "url": "https://kcgtours.gr/",
        "logo": "https://kcgtours.gr/images/logo-new.png",
        "image": "https://kcgtours.gr/images/hero2.webp",
        "description": "Discover the best of Kefalonia with KCG Tours. Handpicked bus tours, boat cruises, and private excursions.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Argostoli",
          "addressRegion": "Kefalonia",
          "addressCountry": "GR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.1751,
          "longitude": 20.4852
        },
        "sameAs": [
          "https://www.facebook.com/kcgtours",
          "https://www.instagram.com/kcgtours"
        ]
      };
      script.textContent = JSON.stringify(defaultSchema);
    }

    return () => {
      // Restore defaults if needed when unmounting
      // Usually not strictly necessary for SPA navigation if other pages also use SEO component
    };
  }, [title, description, keywords, image, url, jsonLd]);

  return null;
};

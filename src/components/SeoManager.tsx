import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SEO, ROUTE_SEO, SITE_URL } from '../seo';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeSeo = ROUTE_SEO[pathname] || DEFAULT_SEO;
    const pageTitle = routeSeo.title;
    const pageDescription = routeSeo.description;
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const ogImage = routeSeo.image.startsWith('http') ? routeSeo.image : `${SITE_URL}${routeSeo.image}`;

    document.title = pageTitle;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', pageDescription);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('property', 'og:type', routeSeo.type || 'website');
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', pageTitle);
    upsertMeta('property', 'og:description', pageDescription);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'twitter:card', 'summary_large_image');
    upsertMeta('property', 'twitter:url', canonicalUrl);
    upsertMeta('property', 'twitter:title', pageTitle);
    upsertMeta('property', 'twitter:description', pageDescription);
    upsertMeta('property', 'twitter:image', ogImage);
    upsertLink('canonical', canonicalUrl);

    const scriptId = 'ld-hotel-json';
    let ldJson = document.getElementById(scriptId);
    if (!ldJson) {
      ldJson = document.createElement('script');
      ldJson.id = scriptId;
      ldJson.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldJson);
    }

    ldJson.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Hotel',
      name: 'Ashwem Beach Inn',
      url: SITE_URL,
      image: ogImage,
      description: pageDescription,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ashvem, North Goa',
        addressRegion: 'Goa',
        addressCountry: 'IN',
      },
      sameAs: ['https://wa.me/919075006116'],
    });
  }, [pathname]);

  return null;
}

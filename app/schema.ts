export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "VoltX Electric",
  image: "https://voltx.electric/og-image.jpg",
  "@id": "https://voltx.electric",
  url: "https://voltx.electric",
  telephone: "+1-800-555-1234",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Current Ave, Suite 100",
    addressLocality: "Austin", addressRegion: "TX", postalCode: "78701", addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00", closes: "23:59",
  }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1280" },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Electrical Services",
  provider: { "@type": "Electrician", name: "VoltX Electric" },
  areaServed: { "@type": "State", name: "Texas" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      "Residential Wiring", "Commercial Electrical", "Smart Home Installation",
      "Solar Integration", "EV Charger Installation", "Emergency Repairs",
      "Industrial Systems", "Maintenance Services",
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  },
};

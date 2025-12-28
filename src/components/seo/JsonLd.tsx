export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "PromptPilot",
        "alternateName": ["PromptPilot Extension", "PromptPilot Add-in", "Prompt Pilot"],
        "applicationCategory": "BrowserApplication",
        "operatingSystem": "Chrome, Edge, Brave, Opera",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "The ultimate browser extension and add-in for AI prompt engineering. Transform simple prompts into powerful instructions instantly.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "10"
        },
        "author": {
          "@type": "Person",
          "name": "Jeethu",
          "url": "https://www.linkedin.com/in/jeethula/"
        }
      },
      {
        "@type": "Organization",
        "name": "PromptPilot",
        "url": "https://promptpilot.tech",
        "logo": "https://promptpilot.tech/logo.png",
        "sameAs": [
          "https://github.com/Jeethula/PromptPilot",
          "https://www.linkedin.com/in/jeethula/"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

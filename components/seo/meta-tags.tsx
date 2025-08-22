import Head from "next/head";

interface MetaTagsProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
}

const MetaTags = ({ 
  title, 
  description, 
  canonical, 
  ogImage = "/images/og-default.jpg",
  ogType = "website",
  schema 
}: MetaTagsProps) => {
  const siteName = "Adsmagnify Academy";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = "https://adsmagnify.vercel.app";

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={`${baseUrl}${canonical || ""}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Adsmagnify Academy",
            "image": `${baseUrl}/images/logo.jpg`,
            "description": "AI-powered digital marketing courses in Mumbai with live projects and shadow internships.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "PIL Court, G12, near New Central Excise Building, New Marine Lines",
              "addressLocality": "Churchgate",
              "addressRegion": "Mumbai",
              "postalCode": "400020",
              "addressCountry": "IN"
            },
            "telephone": "+91 7700090236",
            "email": "info@adsmagnify.com",
            "url": baseUrl,
            "priceRange": "₹₹",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates", 
                "latitude": 18.9322,
                "longitude": 72.8264
              },
              "geoRadius": "50"
            },
            "openingHours": [
              "Mo-Su 09:00-18:00"
            ],
            "sameAs": [
              "https://facebook.com/adsmagnifyacademy",
              "https://instagram.com/adsmagnifyacademy",
              "https://linkedin.com/company/adsmagnifyacademy"
            ]
          })
        }}
      />
      
      {/* Additional Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default MetaTags;
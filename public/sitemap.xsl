<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <xsl:apply-templates select="sm:urlset" />
  </xsl:template>

  <xsl:template match="sm:urlset">
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sitemap | Grup de Suport</title>
        <style>
          :root { color-scheme: light; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: #243746; background: #f4f7f9; }
          body { margin: 0; padding: 40px 20px; }
          main { max-width: 1000px; margin: 0 auto; }
          h1 { margin: 0 0 8px; color: #176f9f; font-size: clamp(1.7rem, 4vw, 2.4rem); }
          p { margin: 0 0 24px; color: #526371; }
          .table-wrap { overflow-x: auto; border: 1px solid #dce5eb; border-radius: 12px; background: #fff; box-shadow: 0 8px 24px rgb(25 55 75 / 8%); }
          table { width: 100%; border-collapse: collapse; text-align: left; }
          th, td { padding: 14px 18px; border-bottom: 1px solid #e8eef2; vertical-align: top; }
          th { background: #edf4f7; color: #344b5a; font-size: .9rem; }
          tr:last-child td { border-bottom: 0; }
          a { color: #126b9c; overflow-wrap: anywhere; text-decoration-thickness: 1px; text-underline-offset: 3px; }
          a:hover { color: #084c72; }
          @media (max-width: 600px) { body { padding: 24px 12px; } th, td { padding: 12px; } }
        </style>
      </head>
      <body>
        <main>
          <h1>Sitemap de Grup de Suport</h1>
          <p>
            <xsl:value-of select="count(sm:url)" /> páginas públicas, con sus versiones disponibles en español y catalán.
          </p>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Página</th>
                  <th>Español</th>
                  <th>Català</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:url">
                  <tr>
                    <td>
                      <a href="{sm:loc}">
                        <xsl:value-of select="sm:loc" />
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="xhtml:link[@hreflang='es-ES']">
                          <a href="{xhtml:link[@hreflang='es-ES']/@href}">Ver página</a>
                        </xsl:when>
                        <xsl:otherwise>—</xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="xhtml:link[@hreflang='ca-ES']">
                          <a href="{xhtml:link[@hreflang='ca-ES']/@href}">Veure pàgina</a>
                        </xsl:when>
                        <xsl:otherwise>—</xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

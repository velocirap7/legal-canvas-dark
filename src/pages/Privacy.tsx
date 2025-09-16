import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            <p className="text-xl text-muted-foreground">
              Cómo recopilamos, usamos y protegemos tu información
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Protección de tu Privacidad</CardTitle>
              <CardDescription>
                Tu privacidad es importante para nosotros. Esta política explica cómo manejamos tu información personal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Información que Recopilamos</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Podemos recopilar los siguientes tipos de información:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Información de identificación personal (nombre, email, teléfono)</li>
                  <li>Información de navegación (IP, cookies, páginas visitadas)</li>
                  <li>Información técnica (navegador, sistema operativo, dispositivo)</li>
                  <li>Preferencias de usuario y configuraciones</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Cómo Usamos tu Información</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Proporcionar y mejorar nuestros servicios</li>
                  <li>Personalizar tu experiencia en el sitio</li>
                  <li>Comunicarnos contigo sobre actualizaciones y ofertas</li>
                  <li>Analizar el uso del sitio web para mejoras</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Cookies y Tecnologías Similares</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación, 
                  analizar el tráfico del sitio y personalizar el contenido. Puedes configurar tu navegador 
                  para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Compartir Información</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu 
                  consentimiento, excepto en los casos descritos en esta política o cuando sea requerido por ley.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Seguridad de Datos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de seguridad apropiadas para proteger tu información personal 
                  contra acceso, alteración, divulgación o destrucción no autorizada. Sin embargo, 
                  ningún método de transmisión por internet es 100% seguro.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Tus Derechos</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Acceder a tu información personal</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Limitar el procesamiento de tu información</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Contacto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, 
                  contáctanos a través de los medios proporcionados en nuestro sitio web.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
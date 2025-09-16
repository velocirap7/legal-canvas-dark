import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Términos de Servicio
            </h1>
            <p className="text-xl text-muted-foreground">
              Condiciones de uso de nuestros servicios
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">1. Aceptación de los Términos</CardTitle>
              <CardDescription>
                Al acceder y utilizar este sitio web, aceptas cumplir con estos términos de servicio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Uso del Sitio</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Este sitio web se proporciona para tu uso personal y no comercial. No puedes modificar, 
                  copiar, distribuir, transmitir, mostrar, realizar, reproducir, publicar, licenciar, 
                  crear trabajos derivados, transferir o vender cualquier contenido, software, productos o servicios.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Propiedad Intelectual</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, iconos, 
                  imágenes, clips de audio y software, es propiedad nuestra o de nuestros proveedores 
                  de contenido y está protegido por las leyes de derechos de autor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Limitación de Responsabilidad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  En ningún caso seremos responsables por daños directos, indirectos, incidentales, 
                  especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Modificaciones</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Contacto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes preguntas sobre estos términos de servicio, por favor contáctanos a través 
                  de los medios proporcionados en nuestro sitio web.
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

export default Terms;
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
              Condiciones de uso del bot de Discord
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Términos de Uso del Bot</CardTitle>
              <CardDescription>
                Condiciones para el uso del bot de Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Este bot está diseñado para ofrecer herramientas y funcionalidades dentro de servidores de Discord.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Al utilizar este bot, aceptas seguir las reglas de Discord y las establecidas por los administradores del servidor donde se encuentra instalado.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  No nos hacemos responsables por el mal uso de este bot por parte de terceros.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos actualizar estos términos sin previo aviso. Última actualización: julio 2025.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Última actualización: julio 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
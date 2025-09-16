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
              Información sobre el manejo de datos del bot
            </p>
          </div>

          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Política de Privacidad del Bot</CardTitle>
              <CardDescription>
                Información sobre el manejo de datos del bot de Discord
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Este bot no almacena información personal de los usuarios.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  El bot solo accede a datos necesarios para funcionar correctamente (como nombres de usuario, mensajes, IDs) y nunca los comparte con terceros.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes alguna duda o quieres solicitar eliminación de datos, puedes contactar al desarrollador del bot.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Última actualización: julio 2025.
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

export default Privacy;
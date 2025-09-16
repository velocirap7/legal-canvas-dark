import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Bienvenido a Mi Sitio Web
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una plataforma moderna y elegante diseñada con las mejores prácticas de desarrollo web.
              Explora nuestras políticas y términos de servicio.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <Link to="/terms">
                <FileText className="h-5 w-5 mr-2" />
                Ver Términos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
              <Link to="/privacy">
                <Shield className="h-5 w-5 mr-2" />
                Política de Privacidad
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Características Principales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diseño moderno con tema oscuro y navegación intuitiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Seguridad Garantizada</CardTitle>
                <CardDescription>
                  Políticas de privacidad claras y términos de servicio transparentes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tu información está protegida con los más altos estándares de seguridad.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Documentación Completa</CardTitle>
                <CardDescription>
                  Términos de servicio detallados y fáciles de entender
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Información clara sobre el uso de nuestros servicios y plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Diseño Moderno</CardTitle>
                <CardDescription>
                  Interfaz elegante con tema oscuro y navegación fluida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experiencia de usuario optimizada con animaciones suaves.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-4xl mx-auto shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl mb-4 text-foreground">
                ¿Listo para Comenzar?
              </CardTitle>
              <CardDescription className="text-lg">
                Explora nuestros términos de servicio y política de privacidad para conocer más
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/terms">
                    Leer Términos de Servicio
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/privacy">
                    Ver Política de Privacidad
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;

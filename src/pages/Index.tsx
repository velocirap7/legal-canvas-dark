import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, FileText, Bot, Settings, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import botLogo from "@/assets/bot-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <img src={botLogo} alt="Darkline♤ Logo" className="h-24 w-24 drop-shadow-glow" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Darkline♤
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un bot de Discord totalmente customizable con herramientas avanzadas para gestionar tu servidor.
              Configura cada aspecto desde Discord para adaptarlo a tus necesidades.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 text-lg shadow-glow">
              <a href="https://discord.com/oauth2/authorize?client_id=1026899679960645632&scope=bot" target="_blank" rel="noopener noreferrer">
                <Bot className="h-5 w-5 mr-2" />
                Añadir a Discord
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <Link to="/terms">
                <FileText className="h-5 w-5 mr-2" />
                Ver Términos
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
              Características del Bot
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Herramientas poderosas y configuración flexible para tu servidor de Discord
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Herramientas Avanzadas</CardTitle>
                <CardDescription>
                  Sistema de moderación automática y comandos personalizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestión completa del servidor con herramientas de moderación inteligente.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Totalmente Customizable</CardTitle>
                <CardDescription>
                  Configura cada aspecto del bot directamente desde Discord
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Adapta el bot a las necesidades específicas de tu servidor.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Interacción Inteligente</CardTitle>
                <CardDescription>
                  Respuestas automáticas y sistema de tickets avanzado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Herramientas de comunicación para mejorar la experiencia de usuario.
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
                ¿Listo para Usar el Bot?
              </CardTitle>
              <CardDescription className="text-lg">
                Consulta nuestros términos de servicio y política de privacidad para más información
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

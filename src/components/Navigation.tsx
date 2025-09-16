import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Términos de Servicio", path: "/terms", icon: FileText },
    { name: "Privacidad", path: "/privacy", icon: Shield },
  ];

  return (
    <>
      {/* Menu Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:border-primary transition-smooth"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-card border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mi Sitio Web
            </h2>
            <p className="text-muted-foreground mt-2">
              Navegación principal
            </p>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth hover:bg-primary/10 hover:text-primary ${
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
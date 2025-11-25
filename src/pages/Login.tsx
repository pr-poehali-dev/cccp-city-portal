import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === "admin" && password === "admin2025") {
      localStorage.setItem("isAdmin", "true");
      toast({
        title: "Вход выполнен",
        description: "Добро пожаловать, товарищ!",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный логин или пароль",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center border-4 border-secondary">
            <span className="text-5xl">☭</span>
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-wide mb-2">
            ЦК КПСС
          </h1>
          <p className="text-muted-foreground">
            Панель администрирования
          </p>
        </div>

        <Card className="p-8 border-2 border-primary">
          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-lg">
                  Логин
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-lg h-12"
                  placeholder="Введите логин"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-lg">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-lg h-12"
                  placeholder="Введите пароль"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg"
                size="lg"
              >
                <Icon name="LogIn" className="mr-2" size={20} />
                Войти
              </Button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Доступ только для уполномоченных должностных лиц
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground"
          >
            <Icon name="ArrowLeft" className="mr-2" size={16} />
            Вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

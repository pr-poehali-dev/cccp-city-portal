import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/666494e0-d9a2-4e40-82df-5aa3997e4927.png" 
                alt="Флаг ЦК КПСС" 
                className="w-16 h-16 object-cover rounded border-2 border-secondary"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground uppercase tracking-wider">
                  ЦК КПСС
                </h1>
                <p className="text-sm text-muted-foreground uppercase">
                  Центральный Комитет Коммунистической Партии Советского Союза
                </p>
              </div>
            </div>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <Icon name="Lock" className="mr-2" size={16} />
                Вход
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-primary border-b-2 border-secondary">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Главная
              </Button>
            </Link>
            <Link to="/leadership">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Руководство
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Новости
              </Button>
            </Link>
            <Link to="/lyubertsy">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Люберцы
              </Button>
            </Link>
            <Link to="/metro">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Метрополитен
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center border-4 border-secondary">
                <span className="text-7xl">☭</span>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-2xl">★</span>
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4 uppercase tracking-wide">
            Официальный Портал
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Добро пожаловать на официальный информационный портал 
            Центрального Комитета Коммунистической Партии Советского Союза
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/leadership">
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Users" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Руководство</h3>
              </div>
              <p className="text-muted-foreground">
                Структура власти и должностные лица партии
              </p>
            </Card>
          </Link>

          <Link to="/news">
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Newspaper" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Новости</h3>
              </div>
              <p className="text-muted-foreground">
                Последние постановления и официальные события
              </p>
            </Card>
          </Link>

          <Link to="/lyubertsy">
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Building2" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Люберцы</h3>
              </div>
              <p className="text-muted-foreground">
                Городской округ в стадии строительства
              </p>
            </Card>
          </Link>

          <Link to="/metro">
            <Card className="p-6 hover:border-primary transition-colors cursor-pointer h-full">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Train" className="text-primary" size={32} />
                <h3 className="text-2xl font-bold">Метрополитен</h3>
              </div>
              <p className="text-muted-foreground">
                Правила и информация о метро
              </p>
            </Card>
          </Link>

          <Card className="p-6 bg-primary/10 border-primary lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Server" className="text-secondary" size={32} />
              <h3 className="text-2xl font-bold">IP Сервера</h3>
            </div>
            <div className="bg-card p-4 rounded border border-border">
              <code className="text-lg font-mono text-secondary">3PM3511.aternos.me:51574</code>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Официальный игровой сервер ЦК КПСС
            </p>
          </Card>
        </div>

        <Card className="p-8 border-2 border-primary/50 bg-gradient-to-r from-card to-primary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">★</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Важное объявление</h3>
              <p className="text-lg leading-relaxed">
                Городской округ Люберцы находится в активной стадии строительства. 
                Приглашаем всех граждан следить за новостями о развитии города и метрополитена.
              </p>
            </div>
          </div>
        </Card>
      </main>

      <footer className="border-t-4 border-primary bg-card mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">☭</span>
              <div>
                <p className="font-bold">ЦК КПСС</p>
                <p className="text-sm text-muted-foreground">Официальный портал</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">
                © Центральный Комитет КПСС
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Lyubertsy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-4xl">☭</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground uppercase tracking-wider">
                  ЦК КПСС
                </h1>
                <p className="text-sm text-muted-foreground uppercase">
                  Центральный Комитет Коммунистической Партии Советского Союза
                </p>
              </div>
            </div>
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
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none border-b-4 border-secondary">
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
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 uppercase tracking-wide flex items-center gap-3">
            <Icon name="Building2" className="text-primary" size={40} />
            Городской Округ Люберцы
          </h2>
          <Badge className="text-lg px-4 py-2 bg-secondary hover:bg-secondary text-secondary-foreground">
            В стадии строительства
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="User" className="text-primary" size={32} />
              <h3 className="text-2xl font-bold uppercase">Глава Города</h3>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl border-4 border-secondary flex-shrink-0">
                👤
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">Карл Вагнер</h4>
                <Badge className="mb-4 bg-primary hover:bg-primary">
                  Главный Бригадир
                </Badge>
                <p className="text-lg text-muted-foreground">
                  Главный Бригадир городского округа Люберцы, отвечающий за координацию строительства и развитие города
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="HardHat" className="text-secondary" size={32} />
              <h3 className="text-2xl font-bold uppercase">Статус Строительства</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-primary" size={24} />
                <span className="text-lg">Утверждён генеральный план города</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="CheckCircle2" className="text-primary" size={24} />
                <span className="text-lg">Назначен Главный Бригадир</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Circle" className="text-muted-foreground" size={24} />
                <span className="text-lg text-muted-foreground">Возведение основных объектов</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Circle" className="text-muted-foreground" size={24} />
                <span className="text-lg text-muted-foreground">Инфраструктура и коммуникации</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            <Icon name="Camera" className="text-primary" size={28} />
            Фотографии Строительства
          </h3>
          <Card className="p-8 border-2 border-dashed text-center">
            <Icon name="Image" className="text-muted-foreground mx-auto mb-4" size={64} />
            <p className="text-xl text-muted-foreground mb-2">
              Фотографии строительства будут добавлены
            </p>
            <p className="text-sm text-muted-foreground">
              Следите за обновлениями на странице новостей
            </p>
          </Card>
        </div>

        <Card className="p-8 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🏗️</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">О Городе</h3>
              <p className="text-lg leading-relaxed mb-4">
                Люберцы - стратегически важный городской округ, находящийся в активной стадии строительства. 
                Город создаётся в соответствии с современными требованиями градостроительства и потребностями граждан.
              </p>
              <p className="text-lg leading-relaxed">
                Под руководством Главного Бригадира Карла Вагнера ведётся масштабная работа по возведению 
                жилых кварталов, общественных зданий и инфраструктурных объектов.
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

export default Lyubertsy;

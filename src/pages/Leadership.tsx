import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Leadership = () => {
  const highLeadership = [
    { name: "Сталин", role: "ГенСек ЦК КПСС", fullRole: "Генеральный Секретарь Центрального Комитета Коммунистической Партии Советского Союза" },
    { name: "Алексей", role: "1й Зам ГенСека ЦК КПСС", fullRole: "Первый Заместитель Генерального Секретаря ЦК КПСС" },
  ];

  const government = [
    { name: "Карл", role: "Главный Бригадир", fullRole: "Главный Бригадир городского округа Люберцы" },
    { name: "Денис", role: "Начальник Метрополитена", fullRole: "Начальник Метрополитена" },
    { name: "Блохин", role: "НарКом ТяжПрома", fullRole: "Народный Комиссар Тяжёлой Промышленности" },
    { name: "Илья", role: "Глава ГО Энгельс", fullRole: "Глава Городского Образования Энгельс" },
  ];

  const military = [
    { name: "Даня", role: "НарКом Армии", fullRole: "Народный Комиссар Армии" },
  ];

  const citizens = [
    { name: "Егор" },
    { name: "Седой" },
    { name: "Матвей" },
    { name: "Беляев" },
    { name: "ТВ" },
  ];

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
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none border-b-4 border-secondary">
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
            <Link to="/gallery">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Галерея
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 uppercase tracking-wide flex items-center gap-3">
            <Icon name="Users" className="text-primary" size={40} />
            Руководство Партии
          </h2>
          <p className="text-muted-foreground text-lg">
            Состав руководящих органов и должностных лиц
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            <span className="text-secondary text-3xl">★</span>
            Высшее Руководство ЦК КПСС
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highLeadership.map((leader, idx) => (
              <Card key={idx} className="p-8 border-2 border-primary hover:border-secondary transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 flex items-center justify-center border-4 border-secondary flex-shrink-0 relative">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.3),transparent)]" />
                    <span className="text-5xl relative z-10">☭</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-2xl font-bold mb-2">{leader.name}</h4>
                    <Badge className="mb-3 bg-primary hover:bg-primary">
                      {leader.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.fullRole}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={28} />
            Правительство
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {government.map((leader, idx) => (
              <Card key={idx} className="p-6 border-2 hover:border-primary transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted via-muted/80 to-muted/60 flex items-center justify-center border-2 border-border flex-shrink-0">
                    <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M12 14c-6 0-8 4-8 6v2h16v-2c0-2-2-6-8-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold mb-2">{leader.name}</h4>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {leader.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.fullRole}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={28} />
            Армия
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {military.map((leader, idx) => (
              <Card key={idx} className="p-8 border-2 border-primary/50 hover:border-primary transition-colors bg-gradient-to-br from-card to-primary/5">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-2xl font-bold mb-2">{leader.name}</h4>
                    <Badge className="mb-3 bg-primary hover:bg-primary">
                      {leader.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leader.fullRole}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            Граждане
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {citizens.map((citizen, idx) => (
              <Card key={idx} className="p-4 text-center hover:border-primary transition-colors">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center border border-border">
                  <svg className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="8" r="3"/>
                    <path d="M12 14c-4 0-6 3-6 5v2h12v-2c0-2-2-5-6-5z"/>
                  </svg>
                </div>
                <h4 className="font-bold">{citizen.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">Гражданин</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-12 p-8 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">ℹ️</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Информация</h3>
              <p className="text-lg leading-relaxed">
                Все должностные лица назначаются решением Генерального Секретаря ЦК КПСС. 
                Структура власти регулярно обновляется в соответствии с потребностями государства.
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

export default Leadership;

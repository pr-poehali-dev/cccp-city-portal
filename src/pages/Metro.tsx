import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Metro = () => {
  const rules = [
    "Проход в метро разрешён только по действительным проездным документам",
    "Запрещается бегать по эскалаторам и платформам",
    "Необходимо соблюдать дистанцию от края платформы",
    "Запрещается курение на всей территории метрополитена",
    "Следует уступать места пожилым людям и инвалидам",
    "Запрещается провоз крупногабаритных грузов без разрешения",
    "Необходимо соблюдать тишину и порядок в вагонах",
    "При возникновении чрезвычайной ситуации следовать указаниям персонала"
  ];

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
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Люберцы
              </Button>
            </Link>
            <Link to="/metro">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none border-b-4 border-secondary">
                Метрополитен
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 uppercase tracking-wide flex items-center gap-3">
            <Icon name="Train" className="text-primary" size={40} />
            Метрополитен
          </h2>
          <p className="text-muted-foreground text-lg">
            Современная система метро для удобного перемещения граждан
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="UserCircle" className="text-primary" size={32} />
              <h3 className="text-2xl font-bold uppercase">Руководство</h3>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl border-4 border-secondary flex-shrink-0">
                👤
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">Денис</h4>
                <Badge className="mb-4 bg-primary hover:bg-primary">
                  Начальник Метрополитена
                </Badge>
                <p className="text-lg text-muted-foreground">
                  Отвечает за организацию работы, безопасность и развитие системы метрополитена
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Info" className="text-secondary" size={32} />
              <h3 className="text-2xl font-bold uppercase">Информация</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Режим работы</p>
                  <p className="text-muted-foreground">Уточняется администрацией</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Количество станций</p>
                  <p className="text-muted-foreground">В стадии развития</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Ticket" className="text-primary flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold">Стоимость проезда</p>
                  <p className="text-muted-foreground">Определяется руководством</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
            <Icon name="FileText" className="text-primary" size={28} />
            Правила Пользования Метрополитеном
          </h3>
          <Card className="p-8 border-2">
            <div className="space-y-4">
              {rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-lg pt-1">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">🚇</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">О Метрополитене</h3>
              <p className="text-lg leading-relaxed mb-4">
                Метрополитен является ключевым элементом транспортной инфраструктуры государства. 
                Система обеспечивает быстрое и комфортное перемещение граждан между различными районами.
              </p>
              <p className="text-lg leading-relaxed">
                Под руководством Начальника Метрополитена Дениса ведётся работа по расширению сети, 
                модернизации подвижного состава и повышению качества обслуживания пассажиров.
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

export default Metro;

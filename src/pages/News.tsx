import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const News = () => {
  const defaultNews = [
    {
      id: 1,
      date: "25.11.2025",
      title: "Начало строительства городского округа Люберцы",
      content: "Генеральный Секретарь ЦК КПСС товарищ Сталин подписал постановление о начале масштабного строительства городского округа Люберцы. Главным Бригадиром назначен товарищ Карл Вагнер.",
      type: "Постановление",
      author: "Сталин"
    },
    {
      id: 2,
      date: "24.11.2025",
      title: "Создание Метрополитена",
      content: "Принято решение о создании метрополитена для обеспечения транспортного сообщения. Начальником Метрополитена назначен товарищ Денис. Ведутся работы по разработке правил пользования.",
      type: "Новость",
      author: "ЦК КПСС"
    },
    {
      id: 3,
      date: "23.11.2025",
      title: "Формирование структуры власти",
      content: "Завершено формирование основной структуры управления государством. Назначены Народные Комиссары, главы городских образований и другие должностные лица.",
      type: "Объявление",
      author: "Сталин"
    }
  ];

  const [news, setNews] = useState(defaultNews);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const storedNews = localStorage.getItem("news");
    if (storedNews) {
      const parsedNews = JSON.parse(storedNews);
      setNews([...parsedNews, ...defaultNews]);
    }
  }, []);

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
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none border-b-4 border-secondary">
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
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 uppercase tracking-wide flex items-center gap-3">
            <Icon name="Newspaper" className="text-primary" size={40} />
            Новости и Постановления
          </h2>
          <p className="text-muted-foreground text-lg">
            Официальные новости, постановления и объявления
          </p>
        </div>

        {isAdmin && (
          <div className="mb-6">
            <Link to="/admin">
              <Button size="lg" className="w-full md:w-auto">
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить новость
              </Button>
            </Link>
          </div>
        )}

        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="p-8 border-2 hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary hover:bg-primary">
                    {item.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="User" size={16} />
                  {item.author}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.content}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">📢</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">Для администраторов</h3>
              <p className="text-lg leading-relaxed mb-4">
                Добавление новостей и постановлений доступно только для уполномоченных должностных лиц. 
                Система администрирования будет добавлена в следующих версиях портала.
              </p>
              <p className="text-sm text-muted-foreground">
                Все публикации должны быть согласованы с руководством ЦК КПСС
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

export default News;
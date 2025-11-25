import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const storedPhotos = localStorage.getItem("gallery");
    if (storedPhotos) {
      setPhotos(JSON.parse(storedPhotos));
    }
  }, []);

  const categories = Array.from(new Set(photos.map(p => p.category)));

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
            <Link to="/gallery">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none border-b-4 border-secondary">
                Галерея
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2 uppercase tracking-wide flex items-center gap-3">
            <Icon name="Images" className="text-primary" size={40} />
            Галерея Фотографий
          </h2>
          <p className="text-muted-foreground text-lg">
            Строительство, мероприятия и жизнь государства
          </p>
        </div>

        {isAdmin && (
          <div className="mb-8">
            <Link to="/admin">
              <Button size="lg">
                <Icon name="Plus" className="mr-2" size={20} />
                Добавить фотографию
              </Button>
            </Link>
          </div>
        )}

        {photos.length === 0 ? (
          <Card className="p-12 border-2 border-dashed text-center">
            <Icon name="ImageOff" className="text-muted-foreground mx-auto mb-4" size={64} />
            <h3 className="text-2xl font-bold mb-2">Галерея пуста</h3>
            <p className="text-muted-foreground mb-4">
              Фотографии строительства и мероприятий будут добавлены администраторами
            </p>
            {isAdmin && (
              <Link to="/admin">
                <Button>
                  <Icon name="Plus" className="mr-2" size={18} />
                  Добавить первую фотографию
                </Button>
              </Link>
            )}
          </Card>
        ) : (
          <>
            {categories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 uppercase flex items-center gap-2">
                  <Badge className="bg-primary hover:bg-primary">{category}</Badge>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos
                    .filter((photo) => photo.category === category)
                    .map((photo) => (
                      <Card key={photo.id} className="overflow-hidden border-2 hover:border-primary transition-colors">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <img
                            src={photo.url}
                            alt={photo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg">{photo.title}</h4>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {photo.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {photo.description}
                          </p>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </>
        )}

        <Card className="mt-12 p-8 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
          <div className="flex items-start gap-6">
            <div className="text-6xl">📸</div>
            <div>
              <h3 className="text-2xl font-bold mb-3 uppercase">О Галерее</h3>
              <p className="text-lg leading-relaxed">
                В галерее представлены фотографии строительства городов, проведения мероприятий, 
                открытия новых объектов и других важных событий в жизни государства. 
                Администраторы регулярно добавляют новые материалы.
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

export default Gallery;

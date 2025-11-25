import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [newsType, setNewsType] = useState("Новость");
  const [newsAuthor, setNewsAuthor] = useState("ЦК КПСС");

  const [photoUrl, setPhotoUrl] = useState("");
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoDescription, setPhotoDescription] = useState("");
  const [photoCategory, setPhotoCategory] = useState("Строительство");

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast({
      title: "Выход выполнен",
      description: "До свидания, товарищ!",
    });
    navigate("/");
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const news = JSON.parse(localStorage.getItem("news") || "[]");
    const newItem = {
      id: Date.now(),
      date: new Date().toLocaleDateString("ru-RU"),
      title: newsTitle,
      content: newsContent,
      type: newsType,
      author: newsAuthor
    };
    
    news.unshift(newItem);
    localStorage.setItem("news", JSON.stringify(news));
    
    toast({
      title: "Новость опубликована",
      description: "Материал успешно добавлен на портал",
    });
    
    setNewsTitle("");
    setNewsContent("");
    setNewsType("Новость");
    setNewsAuthor("ЦК КПСС");
  };

  const handlePhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const gallery = JSON.parse(localStorage.getItem("gallery") || "[]");
    const newPhoto = {
      id: Date.now(),
      url: photoUrl,
      title: photoTitle,
      description: photoDescription,
      date: new Date().toLocaleDateString("ru-RU"),
      category: photoCategory
    };
    
    gallery.unshift(newPhoto);
    localStorage.setItem("gallery", JSON.stringify(gallery));
    
    toast({
      title: "Фотография добавлена",
      description: "Изображение успешно добавлено в галерею",
    });
    
    setPhotoUrl("");
    setPhotoTitle("");
    setPhotoDescription("");
    setPhotoCategory("Строительство");
  };

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
                  Панель Администратора
                </h1>
                <p className="text-sm text-muted-foreground uppercase">
                  Управление контентом портала
                </p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="destructive">
              <Icon name="LogOut" className="mr-2" size={18} />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <nav className="bg-primary border-b-2 border-secondary">
        <div className="container mx-auto px-4">
          <div className="flex gap-1">
            <Link to="/">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                На главную
              </Button>
            </Link>
            <Link to="/news">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 rounded-none">
                Новости
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
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="news" className="text-lg">
                <Icon name="Newspaper" className="mr-2" size={20} />
                Добавить Новость
              </TabsTrigger>
              <TabsTrigger value="photo" className="text-lg">
                <Icon name="Image" className="mr-2" size={20} />
                Добавить Фото
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news">
              <Card className="p-8 border-2 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="FileEdit" className="text-primary" size={32} />
                  <h2 className="text-3xl font-bold uppercase">Новая Публикация</h2>
                </div>

                <form onSubmit={handleNewsSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="type" className="text-lg">
                        Тип материала
                      </Label>
                      <Select value={newsType} onValueChange={setNewsType}>
                        <SelectTrigger className="text-lg h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Постановление">Постановление</SelectItem>
                          <SelectItem value="Новость">Новость</SelectItem>
                          <SelectItem value="Объявление">Объявление</SelectItem>
                          <SelectItem value="Приказ">Приказ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="author" className="text-lg">
                        Автор
                      </Label>
                      <Input
                        id="author"
                        type="text"
                        value={newsAuthor}
                        onChange={(e) => setNewsAuthor(e.target.value)}
                        className="text-lg h-12"
                        placeholder="ЦК КПСС"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-lg">
                        Заголовок
                      </Label>
                      <Input
                        id="title"
                        type="text"
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        className="text-lg h-12"
                        placeholder="Введите заголовок"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="content" className="text-lg">
                        Содержание
                      </Label>
                      <Textarea
                        id="content"
                        value={newsContent}
                        onChange={(e) => setNewsContent(e.target.value)}
                        className="text-lg min-h-[200px]"
                        placeholder="Введите текст новости или постановления"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-12 text-lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Опубликовать новость
                    </Button>
                  </div>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="photo">
              <Card className="p-8 border-2 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="ImagePlus" className="text-primary" size={32} />
                  <h2 className="text-3xl font-bold uppercase">Новая Фотография</h2>
                </div>

                <form onSubmit={handlePhotoSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-lg">
                        Категория
                      </Label>
                      <Select value={photoCategory} onValueChange={setPhotoCategory}>
                        <SelectTrigger className="text-lg h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Строительство">Строительство</SelectItem>
                          <SelectItem value="Мероприятия">Мероприятия</SelectItem>
                          <SelectItem value="Метрополитен">Метрополитен</SelectItem>
                          <SelectItem value="Армия">Армия</SelectItem>
                          <SelectItem value="Культура">Культура</SelectItem>
                          <SelectItem value="Другое">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photoUrl" className="text-lg">
                        URL изображения
                      </Label>
                      <Input
                        id="photoUrl"
                        type="url"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="text-lg h-12"
                        placeholder="https://example.com/image.jpg"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Вставьте прямую ссылку на изображение
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photoTitle" className="text-lg">
                        Название
                      </Label>
                      <Input
                        id="photoTitle"
                        type="text"
                        value={photoTitle}
                        onChange={(e) => setPhotoTitle(e.target.value)}
                        className="text-lg h-12"
                        placeholder="Строительство жилого квартала"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="photoDescription" className="text-lg">
                        Описание
                      </Label>
                      <Textarea
                        id="photoDescription"
                        value={photoDescription}
                        onChange={(e) => setPhotoDescription(e.target.value)}
                        className="text-lg min-h-[120px]"
                        placeholder="Краткое описание фотографии"
                        required
                      />
                    </div>

                    {photoUrl && (
                      <div className="space-y-2">
                        <Label className="text-lg">Предпросмотр</Label>
                        <div className="aspect-video bg-muted rounded border-2 border-border overflow-hidden">
                          <img
                            src={photoUrl}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23333' width='100' height='100'/%3E%3Ctext fill='%23666' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EНе удалось загрузить%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full h-12 text-lg">
                      <Icon name="Upload" className="mr-2" size={20} />
                      Добавить в галерею
                    </Button>
                  </div>
                </form>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 p-6 border-2 border-secondary/50 bg-gradient-to-r from-card to-secondary/5">
            <div className="flex items-start gap-4">
              <div className="text-4xl">ℹ️</div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Данные для входа</h3>
                <p className="text-muted-foreground mb-2">
                  Логин: <code className="bg-muted px-2 py-1 rounded">admin</code>
                </p>
                <p className="text-muted-foreground">
                  Пароль: <code className="bg-muted px-2 py-1 rounded">admin2025</code>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;

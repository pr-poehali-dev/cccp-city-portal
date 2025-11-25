import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Новость");
  const [author, setAuthor] = useState("ЦК КПСС");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const news = JSON.parse(localStorage.getItem("news") || "[]");
    const newItem = {
      id: Date.now(),
      date: new Date().toLocaleDateString("ru-RU"),
      title,
      content,
      type,
      author
    };
    
    news.unshift(newItem);
    localStorage.setItem("news", JSON.stringify(news));
    
    toast({
      title: "Новость опубликована",
      description: "Материал успешно добавлен на портал",
    });
    
    setTitle("");
    setContent("");
    setType("Новость");
    setAuthor("ЦК КПСС");
  };

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
                Просмотр новостей
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 border-2 border-primary">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="FileEdit" className="text-primary" size={32} />
              <h2 className="text-3xl font-bold uppercase">Добавить Новость</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-lg">
                    Тип материала
                  </Label>
                  <Select value={type} onValueChange={setType}>
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
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-lg min-h-[200px]"
                    placeholder="Введите текст новости или постановления"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Опубликовать
                </Button>
              </div>
            </form>
          </Card>

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

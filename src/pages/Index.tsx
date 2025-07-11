import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Rain Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: "2px",
              height: "20px",
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-300">
            ⚡ Gothic Services
          </h1>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-purple-300 transition-colors">
              Главная
            </a>
            <a
              href="#about"
              className="hover:text-purple-300 transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#services"
              className="hover:text-purple-300 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="hover:text-purple-300 transition-colors"
            >
              Связаться
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative"
      >
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Творческие услуги в цифровом мире
              </h2>
              <p className="text-xl text-gray-300">
                Анимация эмодзи, графический дизайн и другие креативные решения
                для Telegram
              </p>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Связаться в Telegram
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30"
              >
                Посмотреть услуги
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/f97bf2dd-d5a8-4453-b0cd-416a5c36cd23.jpg"
              alt="Gothic atmosphere"
              className="rounded-lg shadow-2xl border border-purple-500/30"
            />
            <div className="absolute -top-4 -right-4 text-6xl animate-pulse">
              ⚡
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-purple-300">Обо мне</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Погружен в мир цифрового творчества, создаю уникальные решения в
              готическом стиле
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-purple-500/30 text-white">
              <CardHeader>
                <Icon name="Zap" size={40} className="text-purple-400 mb-4" />
                <CardTitle className="text-purple-300">Креативность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Нестандартные решения для ваших задач в Telegram
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30 text-white">
              <CardHeader>
                <Icon name="Clock" size={40} className="text-purple-400 mb-4" />
                <CardTitle className="text-purple-300">Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Быстрое выполнение заказов без потери качества
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30 text-white">
              <CardHeader>
                <Icon name="Star" size={40} className="text-purple-400 mb-4" />
                <CardTitle className="text-purple-300">Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Внимание к деталям и готический стиль
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-purple-300">
              Мои услуги
            </h3>
            <p className="text-xl text-gray-300">
              Цифровые решения для вашего Telegram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30 text-white hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">🎭</div>
                <CardTitle className="text-purple-300">
                  Анимация эмодзи
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Создание уникальных анимированных эмодзи для Telegram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30 text-white hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">🎨</div>
                <CardTitle className="text-purple-300">
                  Графический дизайн
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Стикеры, аватарки и обложки в готическом стиле
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-black/50 border-purple-500/30 text-white hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle className="text-purple-300">Консультации</CardTitle>
                <CardDescription className="text-gray-300">
                  Помощь в настройке и оформлении каналов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8 text-purple-300">
            Связаться со мной
          </h3>
          <p className="text-xl text-gray-300 mb-12">
            Готов воплотить ваши идеи в готическом стиле
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/40 border-purple-500/30 text-white">
              <CardHeader>
                <Icon
                  name="MessageCircle"
                  size={40}
                  className="text-purple-400 mb-4 mx-auto"
                />
                <CardTitle className="text-purple-300">Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Основной способ связи</p>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  @elgenion
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30 text-white">
              <CardHeader>
                <Icon
                  name="Mail"
                  size={40}
                  className="text-purple-400 mb-4 mx-auto"
                />
                <CardTitle className="text-purple-300">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Для деловых предложений</p>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-900/30"
                >
                  email@example.com
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Gothic Services. Все права защищены.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

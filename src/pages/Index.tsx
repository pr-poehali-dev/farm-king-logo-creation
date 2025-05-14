
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Хедер с логотипом и навигацией */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="logo-container flex items-center">
            <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center relative">
              <div className="w-8 h-8 bg-[#FFD700] rounded-full absolute"></div>
              <Icon name="Wheat" className="w-5 h-5 text-white absolute" />
              <div className="w-12 h-12 border-2 border-[#1A237E] rounded-full absolute border-dashed animate-[spin_20s_linear_infinite]"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold font-montserrat text-[#1A237E]">
                Farm<span className="text-[#4CAF50]">King</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">localization</p>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 hover:text-[#4CAF50] transition-colors">Главная</a>
          <a href="#" className="text-gray-700 hover:text-[#4CAF50] transition-colors">Услуги</a>
          <a href="#" className="text-gray-700 hover:text-[#4CAF50] transition-colors">О нас</a>
          <a href="#" className="text-gray-700 hover:text-[#4CAF50] transition-colors">Контакты</a>
        </nav>
        
        <Button className="hidden md:flex bg-[#4CAF50] hover:bg-[#388E3C]">
          Связаться
        </Button>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="w-5 h-5" />
        </Button>
      </header>
      
      {/* Главный экран */}
      <main>
        <section className="container mx-auto py-12 px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-[#1A237E]">
              Локализация для <span className="text-[#4CAF50]">аграрного</span> бизнеса
            </h2>
            <p className="text-lg text-gray-700">
              Мы помогаем сельскохозяйственным компаниям выходить на международные рынки с адаптированными под местную специфику решениями.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4CAF50] hover:bg-[#388E3C]">
                Наши услуги
              </Button>
              <Button variant="outline" className="border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white">
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-[#FFD700]/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  {/* Большой логотип */}
                  <div className="w-full h-full bg-[#4CAF50] rounded-full flex items-center justify-center relative">
                    <div className="w-32 h-32 bg-[#FFD700] rounded-full absolute"></div>
                    <Icon name="Wheat" className="w-16 h-16 text-white absolute" />
                    <div className="w-full h-full border-4 border-[#1A237E] rounded-full absolute border-dashed animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-0 border-t-4 border-r-4 border-transparent border-[#1A237E] rounded-full animate-[spin_10s_linear_infinite]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция услуг */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center font-montserrat text-[#1A237E] mb-12">
              Наши <span className="text-[#4CAF50]">услуги</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Globe" className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Перевод документации</h3>
                  <p className="text-gray-600">Профессиональный перевод технической и юридической документации для аграрного сектора</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="MonitorSmartphone" className="w-8 h-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Локализация ПО</h3>
                  <p className="text-gray-600">Адаптация программного обеспечения для сельскохозяйственной техники и систем учета</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Languages" className="w-8 h-8 text-[#4CAF50]" fallback="BookOpen" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Культурная адаптация</h3>
                  <p className="text-gray-600">Подготовка бизнеса к выходу на новые рынки с учетом местной специфики и требований</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      {/* Подвал */}
      <footer className="bg-[#1A237E] text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative">
                <div className="w-6 h-6 bg-[#FFD700] rounded-full absolute"></div>
                <Icon name="Wheat" className="w-4 h-4 text-[#4CAF50] absolute" />
              </div>
              <div className="ml-2">
                <h2 className="text-lg font-bold font-montserrat">
                  Farm<span className="text-[#4CAF50]">King</span>
                </h2>
                <p className="text-xs text-gray-300 -mt-1">localization</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p>© 2025 FarmKing Localization. Все права защищены.</p>
            </div>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#4CAF50] transition-colors">
                <Icon name="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#4CAF50] transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#4CAF50] transition-colors">
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#4CAF50] transition-colors">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

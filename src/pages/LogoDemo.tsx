
import React from "react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LogoDemo = () => {
  const [size, setSize] = React.useState<"small" | "medium" | "large">("medium");
  const [background, setBackground] = React.useState<string>("bg-white");
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center">FarmKing Logo</h1>
        <p className="text-gray-600 text-center">Логотип для сервиса локализации в аграрном секторе</p>
      </header>
      
      <Tabs defaultValue="showcase" className="w-full max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="showcase">Демонстрация</TabsTrigger>
          <TabsTrigger value="variants">Варианты</TabsTrigger>
        </TabsList>
        
        <TabsContent value="showcase" className="mt-6">
          <div className={`${background} rounded-lg p-12 flex items-center justify-center transition-colors duration-300 min-h-[400px]`}>
            <Logo size={size} variant="withText" />
          </div>
          
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <Button 
              onClick={() => setBackground("bg-white")}
              variant={background === "bg-white" ? "default" : "outline"}
              className="min-w-32"
            >
              Белый фон
            </Button>
            <Button 
              onClick={() => setBackground("bg-gray-100")}
              variant={background === "bg-gray-100" ? "default" : "outline"}
              className="min-w-32"
            >
              Серый фон
            </Button>
            <Button 
              onClick={() => setBackground("bg-[#1A237E]")}
              variant={background === "bg-[#1A237E]" ? "default" : "outline"}
              className="min-w-32 text-white"
            >
              Тёмный фон
            </Button>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Select value={size} onValueChange={(value) => setSize(value as any)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Маленький</SelectItem>
                <SelectItem value="medium">Средний</SelectItem>
                <SelectItem value="large">Большой</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>
        
        <TabsContent value="variants" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Только логотип</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <Logo size="medium" variant="default" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>С текстом</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <Logo size="medium" variant="withText" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Маленький размер</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <Logo size="small" variant="withText" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Большой размер</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <Logo size="large" variant="withText" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LogoDemo;

import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Генерация по промпту",
    description: "Опишите интерфейс словами — ИИ создаст готовый UI-компонент или целую страницу мгновенно.",
  },
  {
    title: "Редактирование без кода",
    description: "Изменяйте цвета, тексты и структуру прямо в браузере — никакой IDE не нужно.",
  },
  {
    title: "Экспорт в продакшн",
    description: "Одна кнопка — и ваш интерфейс уже в облаке. React, HTML или Figma на выбор.",
  },
  {
    title: "Библиотека шаблонов",
    description: "Сотни готовых блоков для любого типа проекта — лендинг, дашборд, SaaS, мобильное приложение.",
  },
  {
    title: "Командный доступ",
    description: "Работайте над проектом вместе: общие проекты, комментарии и история изменений.",
  },
  {
    title: "Поддержка 24/7",
    description: "Живой чат, база знаний и персональный онбординг для новых пользователей.",
  },
]

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Возможности</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Всё, что нужно для создания интерфейсов
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              От первого промпта до готового продукта — без команды разработчиков и многомесячных сроков.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                  <div className="flex flex-col gap-1">
                    <p className="text-white font-open-sans-custom">{f.title}</p>
                    <p className="text-gray-300 text-sm font-open-sans-custom">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
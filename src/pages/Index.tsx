import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG = {
  title: "https://cdn.poehali.dev/projects/3d0911fd-919d-4564-b92e-a3121a72f3d0/files/de7b53d1-5473-4497-95f3-1b218a0ea1b4.jpg",
  problems: "https://cdn.poehali.dev/projects/3d0911fd-919d-4564-b92e-a3121a72f3d0/files/882236be-6d1a-4b7d-8c8d-24558c4789cb.jpg",
  psychologist: "https://cdn.poehali.dev/projects/3d0911fd-919d-4564-b92e-a3121a72f3d0/files/f6d033d6-aca5-4c56-94fc-be3b93f5b12f.jpg",
  methods: "https://cdn.poehali.dev/projects/3d0911fd-919d-4564-b92e-a3121a72f3d0/files/86d02d9c-6316-4521-86e4-397c8bb06608.jpg",
  network: "https://cdn.poehali.dev/projects/3d0911fd-919d-4564-b92e-a3121a72f3d0/files/e47f7a52-5da1-4b48-9c55-0eb16e58434c.jpg",
};

const slides = [
  {
    id: 1,
    label: "Титульный",
    gradient: "from-indigo-600 via-purple-600 to-pink-500",
    content: (
      <div className="flex flex-col items-center gap-4 text-center">
        <img src={IMG.title} alt="Школа" className="w-full h-44 object-cover rounded-2xl shadow-lg" />
        <div className="space-y-2">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Доклад · Социальная педагогика
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight drop-shadow">
            Карта типичных проблем обучающегося школы
          </h1>
          <p className="text-white/80 font-medium text-sm">Социальная защита ребёнка</p>
        </div>
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 grid grid-cols-3 gap-2 text-center">
          {[["Докладчик", "ФИО"], ["Группа", "Группа"], ["Год", "2026"]].map(([label, val]) => (
            <div key={label}>
              <p className="text-white/50 text-xs">{label}</p>
              <p className="text-white font-semibold text-sm">{val}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Введение",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    content: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Введение. Актуальность темы</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { icon: "School", bg: "bg-white/20", text: "Школа выполняет не только образовательную, но и важнейшую социальную функцию" },
            { icon: "Shield", bg: "bg-white/20", text: "Социальная защита — комплекс правовых, экономических и психолого-педагогических мер для обеспечения прав и благополучия ребёнка" },
            { icon: "Target", bg: "bg-white/20", text: "Цель: систематизировать проблемы и разработать карту алгоритма действий педагога и средств защиты" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3">
              <span className="mt-0.5 text-white shrink-0">
                <Icon name={item.icon} fallback="CircleAlert" size={18} />
              </span>
              <p className="text-sm text-white/90 leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-xs italic text-center">В основу положены труды ведущих специалистов социальной педагогики</p>
      </div>
    ),
  },
  {
    id: 3,
    label: "Проблемы",
    gradient: "from-rose-500 via-orange-500 to-yellow-400",
    content: (
      <div className="space-y-3">
        <img src={IMG.problems} alt="Проблемы детей" className="w-full h-36 object-cover rounded-2xl shadow-lg" />
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Типичные проблемы обучающихся</h2>
        <div className="grid grid-cols-1 gap-2">
          {[
            { icon: "Home", title: "Неблагополучие в семье", desc: "Конфликты, алкоголизм, насилие, асоциальный образ жизни родителей" },
            { icon: "Zap", title: "Асоциальное поведение", desc: "Агрессия, воровство, бродяжничество, пропуски, употребление ПАВ" },
            { icon: "Users", title: "Трудности социализации", desc: "Буллинг, школьная тревожность, замкнутость, дезадаптация" },
            { icon: "Heart", title: "Проблемы здоровья", desc: "Физические недостатки или хронические заболевания" },
            { icon: "EyeOff", title: "Безнадзорность", desc: "Ребёнок предоставлен сам себе из-за безответственности родителей" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2">
              <span className="mt-0.5 text-white shrink-0">
                <Icon name={item.icon} fallback="CircleAlert" size={15} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-white/70 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Алгоритм",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    content: (
      <div className="space-y-3">
        <img src={IMG.psychologist} alt="Педагог-психолог" className="w-full h-36 object-cover rounded-2xl shadow-lg" />
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Деятельность педагога-психолога</h2>
        <div className="space-y-2">
          {[
            { step: "1", title: "Диагностика", desc: "Наблюдение, беседы, сбор информации о семейной ситуации" },
            { step: "2", title: "Психолого-педагогическая поддержка", desc: "Ситуации успеха, эмпатия, вовлечение в коллективные дела" },
            { step: "3", title: "Взаимодействие с семьёй", desc: "Не обвинить, а предложить помощь и общую стратегию воспитания" },
            { step: "4", title: "Коррекция", desc: "Музыкотерапия (О.М. Фалетрова), игровые методы, тренинги" },
            { step: "5", title: "Мониторинг", desc: "Отслеживание динамики в поведении и успеваемости" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-3 py-2">
              <span className="shrink-0 w-6 h-6 rounded-full bg-white/30 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {item.step}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-white/70 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    label: "Методы",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    content: (
      <div className="space-y-3">
        <img src={IMG.methods} alt="Методы коррекции" className="w-full h-36 object-cover rounded-2xl shadow-lg" />
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Методы коррекционной работы</h2>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: "Trophy", title: "Ситуации успеха", desc: "Опора на сильные стороны ребёнка" },
            { icon: "Music", title: "Музыкотерапия", desc: "По методике О.М. Фалетровой" },
            { icon: "Gamepad2", title: "Игровые методы", desc: "Тренинги, снятие тревожности" },
            { icon: "Star", title: "Творческие дела", desc: "Кружки, секции, коллектив" },
          ].map((item, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 flex flex-col gap-1">
              <span className="text-white">
                <Icon name={item.icon} fallback="CircleAlert" size={20} />
              </span>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/70 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Средства",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    content: (
      <div className="space-y-3">
        <img src={IMG.network} alt="Система защиты" className="w-full h-32 object-cover rounded-2xl shadow-lg" />
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Средства социальной защиты</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Icon name="School" fallback="CircleAlert" size={16} className="text-white" />
              <p className="text-xs font-bold text-white uppercase tracking-wide">Внутришкольные</p>
            </div>
            {["ИОМ", "Тьюторское сопровождение", "Внутришкольный контроль", "Кружки и секции"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                <p className="text-xs text-white/80">{t}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Icon name="Globe" fallback="CircleAlert" size={16} className="text-white" />
              <p className="text-xs font-bold text-white uppercase tracking-wide">Внешние</p>
            </div>
            {["КДН и ЗП", "Органы опеки", "Центры реабилитации", "ПДН"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                <p className="text-xs text-white/80">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    label: "Этика",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    content: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Принципы профессиональной этики</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "Lock", title: "Конфиденциальность", desc: "Неразглашение информации о семье и ребёнке" },
            { icon: "HeartHandshake", title: "Без осуждения", desc: "Цель — помочь, а не обвинить родителей" },
            { icon: "Handshake", title: "Уважение", desc: "Принятие личности, партнёрские отношения" },
            { icon: "Eye", title: "Гуманизм", desc: "Эмпатия и приоритет благополучия ребёнка" },
          ].map((item, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-3 space-y-1">
              <span className="text-white">
                <Icon name={item.icon} fallback="CircleAlert" size={20} />
              </span>
              <p className="text-sm font-bold text-white">{item.title}</p>
              <p className="text-xs text-white/70 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
          <p className="text-sm text-white/90 italic">
            «Главное — соблюдение профессиональной этики во всей деятельности»
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    label: "Заключение",
    gradient: "from-teal-500 via-green-500 to-emerald-500",
    content: (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Заключение</h2>
        <div className="space-y-3">
          {[
            { icon: "Map", title: "Карта проблем", text: "Позволяет структурировать работу педагога и своевременно реагировать на трудности ребёнка" },
            { icon: "Layers", title: "Комплексный подход", text: "Диагностика + поддержка + диалог с семьёй + внешние ресурсы помощи" },
            { icon: "ShieldCheck", title: "Этика — основа", text: "Конфиденциальность и уважение к личности ребёнка" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3">
              <span className="mt-0.5 text-white shrink-0">
                <Icon name={item.icon} fallback="CircleAlert" size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="text-xs text-white/70 leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 9,
    label: "Литература",
    gradient: "from-slate-600 via-slate-700 to-slate-800",
    content: (
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-white text-center drop-shadow">Список использованной литературы</h2>
        <div className="space-y-2">
          {[
            "Басов Н.Ф. Социальная педагогика. — М.: Дашков и К°, 2020.",
            "Мардахаев Л.В. Социальная педагогика. — М.: ЮРАЙТ, 2021.",
            "Фалетрова О.М. Музыкотерапия как средство коррекции эмоционального состояния детей. — 2019.",
            "Олиференко Л.Я. Социально-педагогическая поддержка детей группы риска. — М., 2018.",
            "ФЗ № 124-ФЗ «Об основных гарантиях прав ребёнка в РФ» от 24.07.1998.",
          ].map((ref, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2">
              <span className="text-white/60 font-bold text-xs shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-xs text-white/80 leading-relaxed">{ref}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${slide.gradient} transition-all duration-500`}>
      <div className="max-w-lg mx-auto px-4 py-6 flex flex-col min-h-screen gap-4">

        {/* Навигация */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`text-xs px-2.5 py-1 rounded-full font-semibold border transition-all ${
                current === i
                  ? "bg-white text-gray-800 border-white shadow-lg"
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30"
              }`}
            >
              {s.id}. {s.label}
            </button>
          ))}
        </div>

        {/* Карточка слайда */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20">
            {slide.content}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between px-2">
          <button
            onClick={() => setCurrent((p) => Math.max(0, p - 1))}
            disabled={current === 0}
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <Icon name="ChevronLeft" size={16} />
            Назад
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
            disabled={current === slides.length - 1}
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Вперёд
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

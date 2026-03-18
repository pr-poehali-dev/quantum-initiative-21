import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { WaitlistWrapper, MeshGradient } from "@/components/waitlist";
import { ThemeSwitcher } from "@/components/waitlist/ThemeSwitcher";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    label: "Титульный лист",
    icon: "BookOpen",
    content: (
      <div className="space-y-3 text-center">
        <div className="inline-block bg-blue-500/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full border border-blue-400/20">
          Доклад · Социальная педагогика
        </div>
        <h1 className="text-xl sm:text-2xl font-semibold text-slate-12 leading-tight">
          Карта типичных проблем обучающегося школы
        </h1>
        <p className="text-base text-slate-10 font-medium">
          Социальная защита ребёнка
        </p>
        <div className="pt-3 border-t border-slate-6 text-sm text-slate-10 space-y-1">
          <p>Докладчик: <span className="text-slate-12 font-medium">ФИО</span></p>
          <p>Группа: <span className="text-slate-12 font-medium">Группа</span></p>
          <p>Год: <span className="text-slate-12 font-medium">2026</span></p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Введение",
    icon: "Lightbulb",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Введение. Актуальность темы</h2>
        <ul className="space-y-3">
          {[
            { icon: "School", text: "Школа выполняет не только образовательную, но и важнейшую социальную функцию" },
            { icon: "Shield", text: "Социальная защита — комплекс правовых, экономических и психолого-педагогических мер для обеспечения прав и благополучия ребёнка в трудной жизненной ситуации" },
            { icon: "Target", text: "Цель: систематизировать типичные проблемы и разработать карту алгоритма действий педагога и средств защиты" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 text-blue-400 shrink-0">
                <Icon name={item.icon} fallback="CircleAlert" size={16} />
              </span>
              <span className="text-sm text-slate-11 leading-snug">{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-9 italic text-center">В основу работы положены труды ведущих специалистов в области социальной педагогики</p>
      </div>
    ),
  },
  {
    id: 3,
    label: "Проблемы",
    icon: "AlertTriangle",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Типичные проблемы обучающихся</h2>
        <div className="grid grid-cols-1 gap-2">
          {[
            { icon: "Home", color: "text-red-400", title: "Неблагополучие в семье", desc: "Конфликты, алкоголизм, насилие, асоциальный образ жизни родителей" },
            { icon: "Zap", color: "text-orange-400", title: "Асоциальное поведение", desc: "Агрессия, воровство, бродяжничество, пропуски, употребление ПАВ" },
            { icon: "Users", color: "text-yellow-400", title: "Трудности социализации", desc: "Дезадаптация, школьная тревожность, буллинг, замкнутость, отсутствие друзей" },
            { icon: "Heart", color: "text-pink-400", title: "Проблемы здоровья", desc: "Физические недостатки или хронические заболевания, затрудняющие адаптацию" },
            { icon: "EyeOff", color: "text-purple-400", title: "Безнадзорность", desc: "Ребёнок предоставлен сам себе из-за занятости или безответственности родителей" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-3/50 rounded-lg px-3 py-2">
              <span className={`shrink-0 mt-0.5 ${item.color}`}>
                <Icon name={item.icon} fallback="CircleAlert" size={15} />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-12">{item.title}</p>
                <p className="text-xs text-slate-10 leading-snug">{item.desc}</p>
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
    icon: "GitBranch",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Деятельность педагога-психолога</h2>
        <div className="space-y-2">
          {[
            { step: "1", title: "Диагностика", desc: "Наблюдение, индивидуальные беседы (соблюдение этических норм), сбор информации о семейной ситуации" },
            { step: "2", title: "Психолого-педагогическая поддержка", desc: "Создание ситуаций успеха, проявление эмпатии, вовлечение в коллективные творческие дела" },
            { step: "3", title: "Взаимодействие с семьёй", desc: "Встречи с родителями: не обвинить, а предложить помощь и выработать общую стратегию воспитания" },
            { step: "4", title: "Коррекция", desc: "Музыкотерапия (О.М. Фалетрова), игровые методы и тренинги" },
            { step: "5", title: "Мониторинг", desc: "Постоянное отслеживание динамики изменений в поведении и успеваемости ребёнка" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {item.step}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-12">{item.title}</p>
                <p className="text-xs text-slate-10 leading-snug">{item.desc}</p>
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
    icon: "Palette",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Методы коррекционной работы</h2>
        <div className="space-y-3">
          {[
            { icon: "Trophy", color: "text-yellow-400", title: "Создание ситуаций успеха", desc: "Формирование позитивного самовосприятия, опора на сильные стороны ребёнка" },
            { icon: "Music", color: "text-purple-400", title: "Музыкотерапия", desc: "О.М. Фалетрова: высокая эффективность музыки как средства коррекции эмоционального состояния детей" },
            { icon: "Gamepad2", color: "text-blue-400", title: "Игровые методы и тренинги", desc: "Развитие коммуникативных навыков, снятие тревожности в безопасной среде" },
            { icon: "Star", color: "text-green-400", title: "Коллективные творческие дела", desc: "Вовлечение в кружки и секции для развития социальных связей" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-3/50 rounded-lg p-3 flex items-start gap-3">
              <span className={`mt-0.5 shrink-0 ${item.color}`}>
                <Icon name={item.icon} fallback="CircleAlert" size={15} />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-12">{item.title}</p>
                <p className="text-xs text-slate-10 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Средства",
    icon: "Building2",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Средства социальной защиты детства</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-blue-400/20 overflow-hidden">
            <div className="bg-blue-500/10 px-3 py-1.5 flex items-center gap-2">
              <Icon name="School" fallback="CircleAlert" size={14} className="text-blue-400" />
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Внутришкольные</p>
            </div>
            <ul className="px-3 py-2 space-y-1">
              {["Индивидуальный образовательный маршрут (ИОМ)", "Тьюторское сопровождение", "Постановка на внутришкольный контроль (учёт)", "Вовлечение в кружки и спортивные секции"].map((t, i) => (
                <li key={i} className="text-xs text-slate-11 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-green-400/20 overflow-hidden">
            <div className="bg-green-500/10 px-3 py-1.5 flex items-center gap-2">
              <Icon name="Globe" fallback="CircleAlert" size={14} className="text-green-400" />
              <p className="text-xs font-semibold text-green-400 uppercase tracking-wide">Внешние</p>
            </div>
            <ul className="px-3 py-2 space-y-1">
              {["Комиссия по делам несовершеннолетних (КДН и ЗП)", "Органы опеки и попечительства (при угрозе жизни)", "Центры социальной помощи и реабилитации", "Инспектор по делам несовершеннолетних (ПДН)"].map((t, i) => (
                <li key={i} className="text-xs text-slate-11 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    label: "Этика",
    icon: "Scale",
    content: (
      <div className="space-y-4 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Принципы профессиональной этики</h2>
        <div className="space-y-3">
          {[
            { icon: "Lock", color: "text-blue-400", title: "Конфиденциальность", desc: "Неразглашение информации о семье и ребёнке — основа доверительного контакта" },
            { icon: "HeartHandshake", color: "text-pink-400", title: "Недопустимость осуждения", desc: "Цель встречи с родителями — не обвинить, а предложить помощь и стратегию воспитания" },
            { icon: "Handshake", color: "text-green-400", title: "Уважение личности", desc: "Принятие обучающегося, партнёрские отношения, опора на ресурсы семьи" },
            { icon: "Eye", color: "text-purple-400", title: "Гуманизм", desc: "Эмпатия и приоритет благополучия ребёнка во всей профессиональной деятельности" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-3/50 rounded-lg p-3 flex items-start gap-3">
              <span className={`mt-0.5 shrink-0 ${item.color}`}>
                <Icon name={item.icon} fallback="CircleAlert" size={16} />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-12">{item.title}</p>
                <p className="text-xs text-slate-10 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 8,
    label: "Заключение",
    icon: "CheckCircle",
    content: (
      <div className="space-y-4 text-center">
        <h2 className="text-lg font-semibold text-slate-12">Заключение</h2>
        <div className="space-y-3">
          <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4 text-left">
            <p className="text-sm text-slate-11 leading-relaxed">
              Карта типичных проблем позволяет <span className="text-slate-12 font-medium">структурировать работу педагога</span> и своевременно реагировать на трудности ребёнка.
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-4 text-left">
            <p className="text-sm text-slate-11 leading-relaxed">
              Эффективность защиты зависит от <span className="text-slate-12 font-medium">комплексного подхода</span>: диагностики, поддержки, диалога с родителями и грамотного использования внешних ресурсов.
            </p>
          </div>
          <div className="bg-purple-500/10 border border-purple-400/20 rounded-xl p-4 text-left">
            <p className="text-sm text-slate-11 leading-relaxed">
              Главное — соблюдение профессиональной этики: <span className="text-slate-12 font-medium">конфиденциальности и уважения</span> к личности ребёнка.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    label: "Литература",
    icon: "BookMarked",
    content: (
      <div className="space-y-3 text-left">
        <h2 className="text-lg font-semibold text-slate-12 text-center">Список использованной литературы</h2>
        <ol className="space-y-2 list-none">
          {[
            "Басов Н.Ф. Социальная педагогика. — М.: Дашков и К°, 2020.",
            "Мардахаев Л.В. Социальная педагогика. — М.: ЮРАЙТ, 2021.",
            "Фалетрова О.М. Музыкотерапия в коррекционной работе с детьми. — 2019.",
            "Олиференко Л.Я. Социально-педагогическая поддержка детей группы риска. — М., 2018.",
            "Федеральный закон № 124-ФЗ «Об основных гарантиях прав ребёнка в РФ» от 24.07.1998.",
          ].map((ref, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-xs text-blue-400 font-bold shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-xs text-slate-11 leading-relaxed">{ref}</p>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12">
        <MeshGradient
          colors={["#1a3a8f", "#2563eb", "#0ea5e9", "#6366f1"]}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 0, width: "100%", height: "100%" }}
        />
        <div className="max-w-screen-sm mx-auto w-full relative z-[1] flex flex-col min-h-screen items-center justify-center py-8 px-5 gap-4">

          {/* Навигация по слайдам */}
          <div className="flex flex-wrap justify-center gap-1.5 w-full max-w-[500px]">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(i)}
                className={`text-xs px-2.5 py-1 rounded-full transition-all font-medium border ${
                  current === i
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-gray-1/60 text-slate-10 border-slate-6 hover:text-slate-12"
                }`}
              >
                {slide.id}. {slide.label}
              </button>
            ))}
          </div>

          {/* Карточка слайда */}
          <main className="flex justify-center w-full">
            <WaitlistWrapper
              logo={{ src: "/logo.svg", alt: "Доклад" }}
              hideCopyright={false}
              copyright="Зачёт по"
              copyrightLink={{ text: "Социальной педагогике", href: "#" }}
              showThemeSwitcher={true}
            >
              <div className="w-full min-h-[320px] flex flex-col justify-center">
                {slides[current].content}
              </div>

              {/* Кнопки prev/next */}
              <div className="flex items-center justify-between w-full pt-2">
                <button
                  onClick={() => setCurrent((p) => Math.max(0, p - 1))}
                  disabled={current === 0}
                  className="flex items-center gap-1.5 text-xs text-slate-10 hover:text-slate-12 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <Icon name="ChevronLeft" size={14} />
                  Назад
                </button>
                <span className="text-xs text-slate-9">
                  {current + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setCurrent((p) => Math.min(slides.length - 1, p + 1))}
                  disabled={current === slides.length - 1}
                  className="flex items-center gap-1.5 text-xs text-slate-10 hover:text-slate-12 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Вперёд
                  <Icon name="ChevronRight" size={14} />
                </button>
              </div>
            </WaitlistWrapper>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
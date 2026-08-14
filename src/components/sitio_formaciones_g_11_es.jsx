import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, BrainCircuit, Cloud, Code2, Database, ShieldCheck, TrendingUp, Sparkles, 
  Users, Calculator, Workflow, CheckCircle2, Compass, GraduationCap, Clock, Filter, 
  ChevronRight, Globe, Layers, Award, Target, HelpCircle, ExternalLink, ChevronDown, ChevronUp,
  Sun, Moon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formationsES, pathsES, filtersES } from '@/data/g11ContentES';
import logoOne from '@/assets/logo-one.png';
import logoAlura from '@/assets/logo-alura.png';

const ICON_MAP = {
  BrainCircuit,
  Database,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Users,
  Calculator,
  Compass,
  Code2,
  Workflow
};

function totalHours(items) {
  return items.reduce((sum, item) => sum + item.hours, 0);
}

export default function FormacionesG11SiteES() {
  const [isDark, setIsDark] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [expandedCourses, setExpandedCourses] = useState({});

  const toggleCourse = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const visibleFormations = useMemo(() => {
    if (activeFilter === 'Todas') return formationsES;
    return formationsES.filter((f) => {
      if (activeFilter === 'Generales' || activeFilter === 'Gerais') return f.category === 'Generales' || f.category === 'Gerais';
      if (activeFilter === 'Electivas' || activeFilter === 'Eletivas') return f.category === 'Electivas' || f.category === 'Eletivas';
      if (activeFilter === 'Estrategia' || activeFilter === 'Estratégia') return ['G1', 'G2', 'G3'].includes(f.code);
      if (activeFilter === 'Comercial') return ['T1', 'T2'].includes(f.code);
      if (activeFilter === 'Gestion' || activeFilter === 'Gestão') return ['T3', 'T4'].includes(f.code);
      return true;
    });
  }, [activeFilter]);

  const programHours = totalHours(formationsES);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white'
    }`}>
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <img src={logoOne} alt="Oracle Next Education" className="h-7 sm:h-9 object-contain" />
            <span className="h-5 w-px bg-slate-700"></span>
            <img src={logoAlura} alt="Alura Tech" className="h-6 sm:h-8 object-contain" />
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden md:inline-flex items-center rounded-full bg-indigo-950/80 px-3 py-1 text-xs font-semibold text-indigo-300 border border-indigo-800/50">
              IA · Negocios · Automatización · Gobernanza
            </span>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Theme"
              className="flex h-8 w-8 items-center justify-center rounded-lg border bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:text-amber-300 transition-all cursor-pointer"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-indigo-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative overflow-hidden py-12 sm:py-20 transition-colors ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
          : 'bg-gradient-to-b from-indigo-50/40 via-white to-slate-50'
      }`}>
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] pointer-events-none ${
          isDark ? 'from-indigo-900/20 via-transparent to-transparent' : 'from-indigo-200/30 via-transparent to-transparent'
        }`}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <div className={`inline-flex items-center space-x-2 rounded-full px-3.5 py-1.5 text-xs font-medium border mb-6 ${
                isDark 
                  ? 'bg-slate-800/80 text-indigo-300 border-slate-700/60' 
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}>
                <GraduationCap className={`h-4 w-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span>G11 - ONE AI FOR BUSINESS</span>
              </div>
              <h1 className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Elige tu ruta de aprendizaje para prepararte mejor para el challenge
              </h1>
              <p className={`mt-5 text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Las formaciones son conjuntos de cursos pensados para ayudarte a avanzar según tu perfil: mindset ejecutivo, análisis de datos, gobernanza, ventas, marketing, RR.HH. o finanzas y operaciones. Ninguna formación es obligatoria: el único contenido obligatorio será el challenge individual.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#orientacion">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30">
                    Descubrir mi ruta
                  </Button>
                </a>
                <a href="#catalogo">
                  <Button size="lg" variant="outline" className={
                    isDark 
                      ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white' 
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
                  }>
                    Ver formaciones
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero Right Stats Card */}
            <div className="lg:col-span-5">
              <div className={`rounded-2xl border p-6 shadow-2xl backdrop-blur-xl ${
                isDark ? 'border-slate-800 bg-slate-900/80' : 'border-slate-200 bg-white'
              }`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Formaciones</span>
                    <p className={`mt-1 text-3xl font-extrabold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>7</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Cursos sugeridos</span>
                    <p className={`mt-1 text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>21</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Carga total</span>
                    <p className={`mt-1 text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{programHours}h</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                    <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Obligatorio</span>
                    <p className={`mt-1 text-2xl font-extrabold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>1</p>
                    <span className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Challenge individual</span>
                  </div>
                </div>

                <div className={`mt-6 rounded-xl p-4 border ${
                  isDark ? 'bg-indigo-950/40 border-indigo-900/50' : 'bg-indigo-50/70 border-indigo-200'
                }`}>
                  <div className="flex items-start space-x-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <div>
                      <h4 className={`text-sm font-bold ${isDark ? 'text-indigo-200' : 'text-indigo-900'}`}>Cómo usar este sitio</h4>
                      <p className={`mt-1 text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Revisa primero la ruta recomendada para tu perfil. Después, elige la formación que más te ayude a construir tu proyecto y fortalecer tu portafolio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Orientación por Perfil */}
      <section id="orientacion" className={`py-16 sm:py-24 border-t border-b transition-colors ${
        isDark ? 'bg-slate-900/40 border-slate-800/60' : 'bg-slate-100/60 border-slate-200'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              ORIENTACIÓN POR PERFIL
            </span>
            <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
              ¿Cuál formación debería elegir?
            </h2>
            <p className={`mt-3 text-sm sm:text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              No necesitas hacer todo. Elige una secuencia realista según tu momento, tu área de interés y el tipo de proyecto que quieres crear para el challenge.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pathsES.map((path) => {
              const PathIcon = ICON_MAP[path.icon] || Compass;
              return (
                <div 
                  key={path.id}
                  className={`rounded-2xl border p-6 shadow-lg flex flex-col justify-between transition-all ${
                    isDark 
                      ? 'border-slate-800 bg-slate-900/90 hover:border-slate-700' 
                      : 'border-slate-200 bg-white hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isDark ? 'bg-indigo-950 text-indigo-400 border-indigo-800/50' : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                      }`}>
                        <PathIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {path.title}
                      </h3>
                    </div>

                    <div className="mt-6 space-y-2.5">
                      {path.steps.map((step, idx) => (
                        <div key={idx} className={`flex items-center space-x-3 rounded-lg px-3.5 py-2 border ${
                          isDark ? 'bg-slate-950/60 border-slate-800/60' : 'bg-slate-50 border-slate-200'
                        }`}>
                          <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                            isDark ? 'bg-indigo-900/80 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                          }`}>
                            {idx + 1}
                          </span>
                          <span className={`text-xs font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-6 grid grid-cols-4 gap-2 rounded-xl p-3 text-center border ${
                      isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-100 border-slate-200'
                    }`}>
                      <div>
                        <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Carga total</span>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{path.totalHours}h</span>
                      </div>
                      <div>
                        <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Semanal</span>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{path.weeklyHours}</span>
                      </div>
                      <div>
                        <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Duración</span>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{path.duration}</span>
                      </div>
                      <div>
                        <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Ritmo</span>
                        <span className={`text-sm font-bold ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>{path.intensity}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`mt-5 rounded-xl p-3.5 border ${
                    isDark ? 'bg-slate-950/40 border-slate-800/50' : 'bg-slate-50 border-slate-200/80'
                  }`}>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {path.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Challenge Individual */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border overflow-hidden shadow-xl ${
            isDark ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left dark column */}
              <div className="md:col-span-5 bg-slate-950 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between text-white">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50 mb-4">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
                    CONTENIDO OBLIGATORIO
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-white">
                    Challenge individual
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Este será el proyecto que cada estudiante deberá crear individualmente. Las formaciones funcionan como apoyo para llegar con más claridad, práctica y confianza.
                  </p>
                </div>
              </div>

              {/* Right reserved space placeholder */}
              <div className={`md:col-span-7 p-6 sm:p-8 flex items-center justify-center ${
                isDark ? 'bg-slate-900/40' : 'bg-slate-50'
              }`}>
                <div className={`w-full rounded-xl border-2 border-dashed p-8 text-center ${
                  isDark ? 'border-slate-700 bg-slate-950/30' : 'border-slate-300 bg-white'
                }`}>
                  <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    ESPACIO RESERVADO
                  </span>
                  <h4 className={`mt-2 text-lg font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Aquí se insertará la información del challenge
                  </h4>
                  <p className={`mt-2 text-xs max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Agrega más adelante el objetivo del proyecto, criterios de entrega, fechas, tecnologías sugeridas, rúbrica de evaluación y ejemplos de entregables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Catálogo de Formaciones */}
      <section id="catalogo" className={`py-16 sm:py-24 transition-colors ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <span className={`text-xs font-bold tracking-widest uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                CATÁLOGO DE FORMACIONES
              </span>
              <h2 className={`mt-2 text-3xl font-extrabold sm:text-4xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Explora los conjuntos de cursos disponibles
              </h2>
              <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Filtra por interés y revisa qué aprenderás, para quién está pensada cada formación y cómo puede ayudarte en tu proyecto.
              </p>
            </div>

            {/* Filters */}
            <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold mr-1 hidden sm:inline ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Filtrar:
              </span>
              {filtersES.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    activeFilter === filter.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : isDark
                        ? 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Formations list */}
          <div className="space-y-8">
            {visibleFormations.map((formation) => {
              const FormIcon = ICON_MAP[formation.icon] || BrainCircuit;
              return (
                <div 
                  key={formation.id}
                  className={`rounded-2xl border overflow-hidden shadow-xl transition-all ${
                    isDark 
                      ? 'border-slate-800 bg-slate-900/80 hover:border-slate-700' 
                      : 'border-slate-200 bg-white hover:border-indigo-300'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left formation overview */}
                    <div className={`lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r flex flex-col justify-between ${
                      isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50/80 border-slate-200'
                    }`}>
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                            isDark ? 'bg-indigo-950 text-indigo-400 border-indigo-800/50' : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                          }`}>
                            <FormIcon className="h-5 w-5" />
                          </div>
                          <span className={`rounded-full px-3 py-1 text-[11px] font-bold border ${
                            isDark ? 'bg-slate-800 text-indigo-300 border-slate-700' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                          }`}>
                            {formation.code}
                          </span>
                        </div>

                        <span className={`text-[11px] font-semibold tracking-wide uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                          {formation.badge}
                        </span>
                        <h3 className={`mt-1 text-2xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {formation.title}
                        </h3>

                        <p className={`mt-3 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {formation.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <div className={`rounded-xl px-4 py-2 border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                            <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Carga horaria</span>
                            <span className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{formation.hours}h</span>
                          </div>
                          <div className={`rounded-xl px-4 py-2 border ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                            <span className={`block text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Nivel sugerido</span>
                            <span className={`text-base font-bold ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>{formation.level}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`mt-6 pt-6 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                        <div className={`rounded-xl p-3.5 border ${
                          isDark ? 'bg-slate-950/60 border-slate-800/60' : 'bg-indigo-50/50 border-indigo-100'
                        }`}>
                          <span className={`block text-[11px] font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-indigo-900'}`}>
                            Recomendación:
                          </span>
                          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                            {formation.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right course list */}
                    <div className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                      isDark ? 'bg-slate-950/60' : 'bg-slate-50/40'
                    }`}>
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <BookOpen className={`h-4 w-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                          <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Cursos de la formación ({formation.courses.length})
                          </h4>
                        </div>

                        <div className="space-y-3">
                          {formation.courses.map((course, idx) => {
                            const courseId = `${formation.id}-${idx}`;
                            const isExpanded = expandedCourses[courseId];
                            return (
                              <div
                                key={idx}
                                className={`rounded-xl border overflow-hidden transition-all ${
                                  isDark 
                                    ? 'border-slate-800/80 bg-slate-900/90 hover:border-slate-700' 
                                    : 'border-slate-200 bg-white hover:border-indigo-300 shadow-sm'
                                }`}
                              >
                                <div
                                  onClick={() => toggleCourse(courseId)}
                                  className="flex items-center justify-between p-4 cursor-pointer select-none"
                                >
                                  <div className="flex items-start space-x-3 pr-2">
                                    <ChevronRight className={`h-4 w-4 shrink-0 mt-1 transition-transform ${isExpanded ? 'rotate-90' : ''} ${
                                      isDark ? 'text-indigo-400' : 'text-indigo-600'
                                    }`} />
                                    <div>
                                      <h5 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                                        {course.title}
                                      </h5>
                                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                                        <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold border ${
                                          isDark ? 'bg-indigo-950 text-indigo-300 border-indigo-900/50' : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                                        }`}>
                                          {course.hours}h
                                        </span>
                                        {course.tags.map((tag, tIdx) => (
                                          <span key={tIdx} className={`rounded px-1.5 py-0.5 text-[10px] border ${
                                            isDark ? 'bg-slate-800 text-slate-300 border-slate-700/50' : 'bg-slate-100 text-slate-600 border-slate-200'
                                          }`}>
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div className={isDark ? 'text-slate-400 hover:text-white shrink-0' : 'text-slate-400 hover:text-slate-900 shrink-0'}>
                                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                  </div>
                                </div>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className={`border-t p-4 ${
                                        isDark ? 'border-slate-800/80 bg-slate-950/80' : 'border-slate-200 bg-slate-50'
                                      }`}
                                    >
                                      <ul className="space-y-1.5">
                                        {course.content.map((bullet, bIdx) => (
                                          <li key={bIdx} className={`flex items-start space-x-2 text-xs ${
                                            isDark ? 'text-slate-300' : 'text-slate-700'
                                          }`}>
                                            <span className={`mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>•</span>
                                            <span>{bullet}</span>
                                          </li>
                                        ))}
                                      </ul>

                                      {/* Botón de curso deshabilitado temporalmente */}
                                      <button
                                        type="button"
                                        disabled
                                        aria-disabled="true"
                                        title="Enlace temporalmente deshabilitado"
                                        className={`mt-3 inline-flex items-center space-x-1.5 text-xs font-semibold opacity-50 cursor-not-allowed select-none transition-colors ${
                                          isDark ? 'text-slate-500 hover:text-slate-500' : 'text-slate-400 hover:text-slate-400'
                                        }`}
                                      >
                                        <span>Ver detalles del curso</span>
                                        <ExternalLink className="h-3 w-3" />
                                      </button>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Best for box */}
                      <div className={`mt-6 rounded-xl p-4 border ${
                        isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                      }`}>
                        <h5 className={`text-xs font-bold mb-1 ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                          ¿Para quién es mejor?
                        </h5>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {formation.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Final Advice */}
      <section className={`py-12 border-t transition-colors ${
        isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Consejo final para estudiantes</h3>
              <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                No elijas la formación más larga; elige la más útil para tu objetivo. Si estás empezando, prioriza G1 (Mindset). Si quieres optimizar ventas o contenidos, avanza a T1 o T2. Si deseas automatizar procesos o finanzas, suma T4.
              </p>
            </div>
            <div className={`md:col-span-4 rounded-xl p-4 border ${
              isDark ? 'bg-indigo-950/60 border-indigo-900/80' : 'bg-indigo-50 border-indigo-200'
            }`}>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                RECORDATORIO
              </span>
              <h4 className={`text-sm font-bold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Las formaciones no son obligatorias</h4>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Son rutas de apoyo para que llegues al challenge con más herramientas, ideas y confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-10 transition-colors ${
        isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img src={logoOne} alt="Oracle Next Education" className="h-7 object-contain" />
              <span className={`h-5 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}></span>
              <img src={logoAlura} alt="Alura Tech" className="h-6 object-contain" />
            </div>

            <div className="text-center md:text-right">
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>¿Tienes dudas sobre el programa?</p>
              <a href="mailto:contacto-one@aluracursos.com" className={`text-xs font-semibold hover:underline ${
                isDark ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                contacto-one@aluracursos.com
              </a>
            </div>
          </div>

          <div className={`mt-8 border-t pt-6 text-center text-xs ${
            isDark ? 'border-slate-900 text-slate-500' : 'border-slate-100 text-slate-400'
          }`}>
            © 2026 Oracle Next Education & Alura. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

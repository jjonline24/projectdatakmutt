import React, { useState, useEffect } from 'react';
import { BarChart3, Target, BookOpen, FileText, Database, Settings, Plus, TrendingUp, Users, Zap, ChevronRight, Search, Filter, Star, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function BusinessAnalysisHomepage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sample data for recent projects
  const recentProjects = [
    {
      id: 1,
      name: 'Q1 2024 Product Launch',
      status: 'active',
      progress: 75,
      frameworks: ['SWOT', 'BCG Matrix', 'Porter\'s Five Forces'],
      dueDate: '2024-03-15',
      insights: 12,
      actions: 8
    },
    {
      id: 2,
      name: 'Market Expansion Analysis',
      status: 'review',
      progress: 90,
      frameworks: ['Blue Ocean', 'Scenario Planning'],
      dueDate: '2024-02-28',
      insights: 18,
      actions: 15
    },
    {
      id: 3,
      name: 'Cost Optimization Initiative',
      status: 'planning',
      progress: 30,
      frameworks: ['Cost-Benefit', 'MECE Principle'],
      dueDate: '2024-04-10',
      insights: 5,
      actions: 3
    }
  ];

  // Framework categories
  const frameworkCategories = [
    {
      name: 'Strategic Positioning',
      icon: Target,
      color: 'from-amber-500 to-orange-600',
      frameworks: ['SWOT Analysis', 'Porter\'s Five Forces', 'Blue Ocean Strategy', 'BCG Matrix', 'Ansoff Matrix'],
      count: 5
    },
    {
      name: 'Problem Solving',
      icon: Zap,
      color: 'from-violet-500 to-purple-600',
      frameworks: ['Fishbone Diagram', 'Root Cause (5 Whys)', 'First Principles'],
      count: 3
    },
    {
      name: 'Decision & Prioritization',
      icon: CheckCircle2,
      color: 'from-emerald-500 to-teal-600',
      frameworks: ['Eisenhower Matrix', 'Decision Matrix', 'Cost-Benefit', 'Force Field'],
      count: 4
    },
    {
      name: 'Planning & Risk',
      icon: AlertCircle,
      color: 'from-rose-500 to-pink-600',
      frameworks: ['Scenario Planning', 'Pre-Mortem', 'Critical Path'],
      count: 3
    },
    {
      name: 'Execution Loops',
      icon: TrendingUp,
      color: 'from-cyan-500 to-blue-600',
      frameworks: ['OODA Loop', 'Six Hats', 'Lateral Thinking', 'Hypothesis Testing', 'MECE'],
      count: 5
    }
  ];

  // KPI Data
  const kpiData = [
    { label: 'Active Projects', value: '12', change: '+3', trend: 'up' },
    { label: 'Insights Generated', value: '847', change: '+124', trend: 'up' },
    { label: 'Actions Completed', value: '234', change: '+45', trend: 'up' },
    { label: 'Frameworks Used', value: '18', change: '+2', trend: 'up' }
  ];

  // Recommended frameworks based on user activity
  const recommendedFrameworks = [
    {
      name: 'SWOT Analysis',
      category: 'Strategic Positioning',
      useCase: 'Evaluate strengths, weaknesses, opportunities, and threats',
      difficulty: 'Beginner',
      time: '15-30 min',
      popular: true
    },
    {
      name: 'Porter\'s Five Forces',
      category: 'Strategic Positioning',
      useCase: 'Analyze competitive landscape and market dynamics',
      difficulty: 'Intermediate',
      time: '30-45 min',
      popular: true
    },
    {
      name: 'Blue Ocean Strategy',
      category: 'Strategic Positioning',
      useCase: 'Identify uncontested market spaces and innovation',
      difficulty: 'Advanced',
      time: '45-60 min',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-slate-800">
      {/* Top Navigation */}
      <nav className="border-b border-white/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-md">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Strategic Platform
                </h1>
                <p className="text-xs text-slate-500">Business Data Analysis</p>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="flex items-center gap-8">
              <NavItem icon={BarChart3} label="Dashboard" active />
              <NavItem icon={Target} label="Projects" badge={12} />
              <NavItem icon={BookOpen} label="Framework Library" badge="20" />
              <NavItem icon={FileText} label="Reports" />
              <NavItem icon={Database} label="Data Sources" />
              <NavItem icon={Settings} label="Settings" />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Project
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div 
          className={`mb-8 transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome back, Analyst
              </h2>
              <p className="text-slate-600 text-lg">
                Continue your strategic analysis and make data-driven decisions
              </p>
            </div>
            <div className="text-sm text-slate-500">
              <Clock className="w-4 h-4 inline mr-1" />
              Last login: Feb 5, 2024 • 10:30 AM
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {kpiData.map((kpi, index) => (
              <div
                key={index}
                className={`bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mounted ? 'slideUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-slate-600 text-sm font-medium">{kpi.label}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    kpi.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Recent Projects */}
          <div className="col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Recent Projects
                </h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-colors">
                  View all
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'active' ? 'bg-emerald-100 text-emerald-700' :
                            project.status === 'review' ? 'bg-blue-100 text-blue-700' :
                            'bg-slate-100 text-slate-700'
                          }`}>
                            {project.status}
                          </span>
                          <span>Due: {project.dueDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{project.progress}%</p>
                        <p className="text-xs text-slate-500">Complete</p>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-blue-100 rounded-full h-2 mb-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.frameworks.map((fw, i) => (
                          <span key={i} className="px-2 py-1 bg-white text-slate-700 rounded-lg text-xs border border-slate-200">
                            {fw}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-amber-500" />
                          {project.insights}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {project.actions}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Create New Project
              </button>
            </div>

            {/* Framework Categories */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  Framework Categories
                </h3>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <Search className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <Filter className="w-4 h-4 text-slate-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {frameworkCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-sm text-slate-500">{category.count} frameworks</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.frameworks.slice(0, 3).map((fw, i) => (
                          <span key={i} className="text-xs text-slate-600">
                            {fw}{i < 2 && category.frameworks.length > i + 1 ? ' •' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Recommended & Quick Actions */}
          <div className="col-span-4 space-y-6">
            {/* Recommended Frameworks */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500" />
                Recommended for You
              </h3>
              <div className="space-y-3">
                {recommendedFrameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {framework.name}
                      </h4>
                      {framework.popular && (
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{framework.useCase}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-1 bg-white text-slate-700 rounded-lg border border-slate-200">
                        {framework.difficulty}
                      </span>
                      <span className="text-slate-600 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {framework.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Browse All Frameworks
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                <QuickActionButton icon={Plus} label="New Analysis" color="blue" />
                <QuickActionButton icon={FileText} label="Generate Report" color="indigo" />
                <QuickActionButton icon={Database} label="Import Data" color="emerald" />
                <QuickActionButton icon={TrendingUp} label="View Insights" color="purple" />
              </div>
            </div>

            {/* Help & Resources */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Need Help Getting Started?
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Explore our library of 20 business frameworks and start making data-driven decisions today.
              </p>
              <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                View Getting Started Guide
              </button>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Navigation Item Component
function NavItem({ icon: Icon, label, active, badge }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 relative ${
        active
          ? 'bg-blue-100 text-blue-700 font-semibold'
          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{label}</span>
      {badge && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-sm">
          {badge}
        </span>
      )}
    </button>
  );
}

// Quick Action Button Component
function QuickActionButton({ icon: Icon, label, color }) {
  const colorMap = {
    blue: 'hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600',
    indigo: 'hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600',
    emerald: 'hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600',
    purple: 'hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600'
  };

  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 transition-all duration-300 ${colorMap[color]}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
      <ChevronRight className="w-4 h-4 ml-auto" />
    </button>
  );
}

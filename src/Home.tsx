import React from 'react';
import { Helmet } from 'react-helmet';
import { Rocket, Target, TrendingUp, Users, Globe, Building, Lightbulb, Award, CheckCircle, BarChart3, Network, Sparkles, DollarSign, Eye, Brain, Handshake, Scale, ChevronRight, Star, Shield } from 'lucide-react';

const IoMarketsVC: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative">
      <Helmet>
        <title>IoMarkets® Venture Capital Investment Fund</title>
        <meta name="title" content="IoMarkets® Venture Capital Investment Fund" />
        <meta name="description" content="IoMarkets® Venture Capital Investment Fund. Backing exceptional founders building transformative companies across the globe with breakthrough technologies." />
        <meta property="og:title" content="IoMarkets® Venture Capital Investment Fund" />
        <meta property="og:description" content="IoMarkets® Venture Capital Investment Fund. Backing exceptional founders building transformative companies across the globe with breakthrough technologies." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® Venture Capital Investment Fund" />
        <meta property="twitter:description" content="IoMarkets® Venture Capital Investment Fund. Backing exceptional founders building transformative companies across the globe with breakthrough technologies." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-blue-900/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA4MCAwIEwgMCAwIDAgODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 text-purple-400 text-sm font-medium mb-4">
                <Rocket className="w-4 h-4" />
                <span>Global Venture Capital</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Investing in</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  Innovative, Disruptive
                </span>
                <br />
                <span className="text-white">& Scalable Technologies</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                An all-stage, sector-agnostic venture capital firm backing exceptional founders building transformative companies across the globe. From Seed to Growth stage, we invest in breakthrough technologies that reshape industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
                  <Rocket className="w-5 h-5" />
                  Submit Your Pitch
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  For Entrepreneurs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-6 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-pink-400" />
              <span>Sector Agnostic</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>All-Stage Investing</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Hands-On Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy Deep Dive */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Investment Philosophy</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We partner with visionary founders who are building technologies that have the potential to fundamentally change how the world works
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Innovation-First",
                  description: "We invest in companies pushing the boundaries of what's possible, leveraging breakthrough technologies and novel approaches to solve meaningful problems at scale.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Scale,
                  title: "Disruptive Potential",
                  description: "We seek businesses that challenge incumbents and create new market categories through superior products, business models, or go-to-market strategies.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: TrendingUp,
                  title: "Scalability-Driven",
                  description: "We focus on ventures with capital-efficient unit economics, strong network effects, and the ability to rapidly expand across markets and customer segments.",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Stages */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">All-Stage Investment Approach</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We invest across the entire venture lifecycle, from earliest concepts to growth-stage scale-ups, adapting our support to each stage's unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  stage: "Seed",
                  investment: "$500K - $2M",
                  focus: "Product-market fit validation",
                  metrics: "Pre-revenue to $500K ARR",
                  icon: Lightbulb,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  stage: "Series A",
                  investment: "$2M - $10M",
                  focus: "Go-to-market acceleration",
                  metrics: "$500K - $3M ARR",
                  icon: Rocket,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  stage: "Series B/C",
                  investment: "$10M - $30M",
                  focus: "Market expansion & scaling",
                  metrics: "$3M - $20M ARR",
                  icon: TrendingUp,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  stage: "Growth",
                  investment: "$30M+",
                  focus: "Category leadership",
                  metrics: "$20M+ ARR",
                  icon: Award,
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((stage, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all group">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stage.stage}</div>
                  <div className="text-purple-400 font-semibold text-lg mb-4">{stage.investment}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{stage.focus}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BarChart3 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">{stage.metrics}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What We Look For</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                While we're sector-agnostic, we have specific criteria for the companies and founders we back
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Exceptional Founders",
                  points: [
                    "Obsessive problem-solvers with deep domain expertise",
                    "Proven ability to attract and retain world-class talent",
                    "Strong technical or go-to-market backgrounds",
                    "Resilience and adaptability through market cycles"
                  ]
                },
                {
                  icon: Target,
                  title: "Large Market Opportunity",
                  points: [
                    "Addressable markets of $1B+ with clear expansion paths",
                    "Secular tailwinds driving long-term growth",
                    "Opportunity to create or dominate new categories",
                    "Global scalability with limited geographic constraints"
                  ]
                },
                {
                  icon: Brain,
                  title: "Defensible Technology",
                  points: [
                    "Proprietary technology with 10x better performance",
                    "Network effects, data advantages, or switching costs",
                    "Patent protection or unique data/IP assets",
                    "Technical barriers that prevent easy replication"
                  ]
                },
                {
                  icon: DollarSign,
                  title: "Strong Unit Economics",
                  points: [
                    "Clear path to profitability with improving margins",
                    "Capital-efficient customer acquisition strategies",
                    "High lifetime value relative to acquisition cost (LTV/CAC > 3x)",
                    "Demonstrated early traction and revenue momentum"
                  ]
                }
              ].map((criteria, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <criteria.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{criteria.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {criteria.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value We Provide */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How We Support Our Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're hands-on partners who roll up our sleeves to help founders navigate critical challenges and capture opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Network,
                  title: "Network Access",
                  description: "Introductions to customers, partners, and follow-on investors across our extensive global network"
                },
                {
                  icon: Users,
                  title: "Talent Acquisition",
                  description: "Help recruiting executive leadership and building world-class teams through our talent network"
                },
                {
                  icon: Handshake,
                  title: "Go-to-Market",
                  description: "Strategic support on pricing, positioning, channel strategy, and customer acquisition"
                },
                {
                  icon: Globe,
                  title: "Global Expansion",
                  description: "Guidance on international market entry, local partnerships, and cross-border operations"
                },
                {
                  icon: DollarSign,
                  title: "Follow-On Capital",
                  description: "Continued funding in subsequent rounds and facilitation of syndicate partnerships"
                },
                {
                  icon: Shield,
                  title: "Strategic Guidance",
                  description: "Board-level advice on strategy, product roadmap, fundraising, and exit opportunities"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-indigo-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Track Record of Success</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results across multiple funds, sectors, and market cycles
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  number: "$1.5B",
                  label: "Assets Under Management",
                  color: "text-green-400"
                },
                {
                  icon: Building,
                  number: "200+",
                  label: "Portfolio Companies",
                  color: "text-purple-400"
                },
                {
                  icon: TrendingUp,
                  number: "4.2x",
                  label: "Average MOIC",
                  color: "text-blue-400"
                },
                {
                  icon: Star,
                  number: "35+",
                  label: "Successful Exits",
                  color: "text-pink-400"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4">
                    <div className={`w-14 h-14 rounded-full bg-gray-800/50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Portfolio Diversity</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our sector-agnostic approach spans cutting-edge technologies across industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { sector: "AI & Machine Learning", icon: "🤖" },
                { sector: "Fintech & Payments", icon: "💳" },
                { sector: "Healthcare Tech", icon: "🏥" },
                { sector: "Climate Tech", icon: "🌍" },
                { sector: "Enterprise SaaS", icon: "☁️" },
                { sector: "Consumer Tech", icon: "📱" },
                { sector: "Deep Tech", icon: "🔬" },
                { sector: "Cybersecurity", icon: "🔒" },
                { sector: "Biotech", icon: "🧬" },
                { sector: "Robotics", icon: "🦾" },
                { sector: "EdTech", icon: "📚" },
                { sector: "Logistics Tech", icon: "🚚" }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-white font-medium text-sm leading-tight">{item.sector}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-blue-900/40">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA4MCAwIEwgMCAwIDAgODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA0KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Something Extraordinary?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We're always looking for exceptional founders building innovative, disruptive, and scalable technologies.
              Share your vision with us and let's explore how we can partner to bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
                <Rocket className="w-5 h-5" />
                Submit Your Pitch Deck
              </button>
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                Meet the Team
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>48-Hour Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                <span>Confidential Review</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Global Portfolio Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsVC;

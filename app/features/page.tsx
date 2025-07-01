'use client'
import { useState } from 'react';
import { Code, Eye, Layers, Network, Users, Zap, CheckCircle, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const router = useRouter();

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI-Driven Full-Stack Code Generation",
      description: "Transform simple natural language prompts into complete, production-ready full-stack applications. From frontend components to backend logic and database schemas — our multi-bot system auto-generates clean, modular, and scalable code tailored to your vision.",
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Instant Design Previews",
      description: "Visualize your application before you build it. With real-time design rendering, Polybots allows you to preview the UI layout and components generated from your prompt. No more guesswork — see exactly what you'll get.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Component-Based Code Output",
      description: "Every section of the UI comes with its own well-structured, reusable component code. Whether you're using React, Next.js, or other modern frameworks, you'll receive exportable code components that integrate seamlessly.",
      gradient: "from-pink-500 to-red-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "System Architecture Auto-Diagramming",
      description: "Generate comprehensive system architecture diagrams with visual blueprints including service-level breakdowns, database interactions, API flows, and deployment layouts. Perfect for teams needing clarity and documentation.",
      gradient: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multibot Collaboration Engine",
      description: "Unlike traditional AI copilots, Polybots utilizes a coordinated system of specialized bots — each focused on UI/UX, backend logic, authentication, DevOps, and data modeling for higher accuracy and consistency.",
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50"
    }
  ];

  const benefits = [
    "First Access to Beta Features",
    "Shape the Future of Development",
    "Exclusive Launch Perks"
  ];

  const differentiators = [
    {
      title: "More than a Code Generator",
      description: "It's a multi-agent design and dev companion that understands structure, not just syntax."
    },
    {
      title: "Visual-First Thinking",
      description: "Preview interfaces as you build them. No abstract code-only output."
    },
    {
      title: "Built for Everyone",
      description: "Whether you're technical or not, Polybots helps you ideate, iterate, and launch faster."
    },
    {
      title: "Explainable Outputs",
      description: "Every line of code and diagram comes with AI-generated rationale."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section with integrated back button */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative container mx-auto px-4">
          {/* Left-aligned Back Button */}
          <div className="mb-8 flex justify-start">
            <Button variant="ghost" className="group text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 rounded-full px-6 py-2 backdrop-blur-sm cursor-pointer" onClick={() => router.push("/")}>              
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Home</span>              
            </Button>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium animate-pulse-glow">
              🚀 Revolutionary AI Development Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Features That Set Polybots Apart
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-slide-in">
              Transform your development workflow with AI-powered code generation, 
              instant previews, and collaborative intelligence that understands your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${feature.bgColor} hover:scale-105`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:animate-float`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <div className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Join Waitlist */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              🎯 Why Join the Launch Waitlist?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Be among the first to experience the future of AI-driven development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">✅ {benefit}</h3>
                <p className="opacity-90 text-sm">
                  {index === 0 && "Experience the full power of AI-driven app development before it goes public."}
                  {index === 1 && "Provide feedback, influence features, and join a community of tech pioneers."}
                  {index === 2 && "Enjoy extended free trial, priority support, and early integration access."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💡 What Makes Polybots Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just another AI tool — we're revolutionizing how software is conceived, designed, and built.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="group">
              <Card className="h-full border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 Ready to Build Smarter?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't just build apps — design, develop, and deploy intelligently with Polybots.
          </p>
          <p className="text-lg mb-12 opacity-80">
            🔗 Join our waitlist today and be part of the next wave in AI-led software engineering.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-[1.03]"
            onClick={() => router.push("/")}
          >
            Join Waitlist Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-4 text-sm opacity-75">
            <Zap className="w-4 h-4" />
            <span>No credit card required</span>
            <span>•</span>
            <span>Early access guaranteed</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

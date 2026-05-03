import React, { useState } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { SplitText } from './components/SplitText';
import { 
  Rocket, BarChart2, Layers, Shield, Zap, Globe, Activity, CheckCircle, ArrowRight
} from 'lucide-react';

export default function App() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState(0);

  const testimonials = [
    { name: "Sarah Jenkins", role: "CTO, TechFlow", text: "Slate has completely transformed how our engineering teams ship features." },
    { name: "Marcus Wright", role: "VP Product, Acme", text: "The intuitive design and speed make it the best tool we've ever used." },
    { name: "Elena Rostova", role: "Founder, Zenith", text: "We scaled from 10 to 100 employees without changing our workflow once." }
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      {/* 1. Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 256 256" fill="white">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-xl font-semibold tracking-wide">Slate</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
          <a href="#features" className="hover:opacity-100 transition-opacity">Features</a>
          <a href="#benefits" className="hover:opacity-100 transition-opacity">Benefits</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a>
        </div>
        <div>
          <button className="liquid-glass px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
            Start today
          </button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-black pb-20 pt-20">
        <VideoBackground 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260502_134830_926d2233-a9a6-45e9-aaa2-28ef8beecb24.mp4" 
          flip 
          className="z-0 opacity-80" 
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-start text-left pt-20 md:pt-32">
          <div className="hero-fade-up liquid-glass rounded-full px-4 py-1.5 text-xs font-medium tracking-wide mb-8 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Slate 2.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
            <SplitText text={
              <>
                Grow Your Team<br />
                Thriving
              </>
            } />
          </h1>
          
          <p className="hero-fade-up text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed" style={{ animationDelay: '0.4s' }}>
            The productivity platform designed to help teams move faster without losing context. Start building your future today.
          </p>
          
          <div className="hero-fade-up flex flex-col sm:flex-row items-center gap-4" style={{ animationDelay: '0.6s' }}>
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto liquid-glass px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors cursor-pointer">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* 3. "How We Keep You Ahead" Section (3D CardSection) */}
      <section className="section" id="features">
        <div className="container">
          <div className="header text-center flex flex-col items-center mb-16">
            <h1>How We Keep You Ahead&reg;</h1>
            <p className="mx-auto">Our unique architecture leverages predictive analytics and smart automation to accelerate your daily workflow.</p>
          </div>
          <div className="cards">
            {/* Orange Card */}
            <div className="card orange cursor-pointer">
              <div className="glass"></div>
              <div className="depth"></div>
              <div className="card-content">
                <div className="icon-box"><Rocket /></div>
                <h2>Velocity</h2>
                <p>Ship features three times faster with intelligent scaffolding.</p>
                <a href="#velocity">Learn more &rarr;</a>
              </div>
            </div>
            {/* Blue Card */}
            <div className="card blue cursor-pointer">
              <div className="glass"></div>
              <div className="depth"></div>
              <div className="card-content">
                <div className="icon-box"><Shield /></div>
                <h2>Security</h2>
                <p>Enterprise-grade encryption baked into every layer of the stack.</p>
                <a href="#security">Learn more &rarr;</a>
              </div>
            </div>
            {/* Green Card */}
            <div className="card green cursor-pointer">
              <div className="glass"></div>
              <div className="depth"></div>
              <div className="card-content">
                <div className="icon-box"><Activity /></div>
                <h2>Analytics</h2>
                <p>Deep insights into your team's productivity and health metrics.</p>
                <a href="#analytics">Learn more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-32 bg-black relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-center">Powerful by design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[ 
              { t: 'Global CDN', i: Globe }, 
              { t: 'Instant Deploys', i: Zap }, 
              { t: 'Serverless', i: Layers }, 
              { t: 'Monitoring', i: BarChart2 } 
            ].map((f, idx) => (
              <div key={idx} className="group relative h-64 rounded-[2rem] p-6 overflow-hidden flex flex-col liquid-glass cursor-pointer">
                <VideoBackground 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4" 
                  className="opacity-0 group-hover:opacity-40 transition-opacity duration-700" 
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-auto border border-white/5">
                    <f.i className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium">{f.t}</h3>
                  <p className="text-sm text-gray-400 mt-2">Built for teams that need to scale automatically without infrastructure overhead.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-32 bg-black relative z-10 px-4 sm:px-6 lg:px-10" id="benefits">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Work without limits</h2>
            <p className="text-lg text-gray-400 mb-10">
              Slate provides the foundational tools your business needs to grow rapidly.
            </p>
            <ul className="space-y-6">
              {[
                "Automated sprint planning and reporting",
                "Real-time collaboration across all boards",
                "Seamless integrations with GitHub and Slack",
                "Zero-config intelligent context switching"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-base md:text-lg text-gray-300">
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] md:h-[600px] rounded-[2.5rem] liquid-glass overflow-hidden p-8 flex flex-col justify-end">
            <VideoBackground 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_191657_800d4e1f-7ab3-41af-90b6-9bd3039eb294.mp4" 
              className="opacity-50" 
            />
            <div className="relative z-10 liquid-glass rounded-2xl p-6 border border-white/10">
              <div className="text-5xl md:text-6xl font-medium mb-2">99.9%</div>
              <div className="text-[#033500] text-sm md:text-base">Uptime SLA guarantee for Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 md:py-32 bg-black relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-center">Loved by top teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="relative h-80 rounded-[2rem] overflow-hidden liquid-glass p-8 flex flex-col cursor-crosshair group transition-transform duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredTestimonial(idx)}
              >
                <VideoBackground 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_111347_9cf2a2b0-2c10-475b-a132-147a046b4927.mp4" 
                  className={`transition-opacity duration-700 ${hoveredTestimonial === idx ? 'opacity-50' : 'opacity-0'}`} 
                />
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <p className="text-xl md:text-2xl font-medium leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-gray-400 text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Pricing Section */}
      <section className="py-24 md:py-32 bg-black relative z-10 px-4 sm:px-6 lg:px-10" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Simple pricing</h2>
            <p className="text-lg text-gray-400">Start for free, upgrade when you need more power.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Starter */}
            <div className="relative rounded-[2.5rem] py-12 px-8 overflow-hidden liquid-glass border border-white/10 group">
              <VideoBackground 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260407_043131_ebe2f0b5-9acc-4a4f-b2c1-7297f1a3beb9.mp4" 
                className="opacity-40" 
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-2">Starter</h3>
                <p className="text-gray-300 mb-8 h-12">Perfect for small teams finding their rhythm.</p>
                <div className="text-5xl font-bold mb-8">Free</div>
                <ul className="space-y-4 mb-10">
                  {['Up to 5 users', 'Basic analytics', '1 project', 'Community support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-gray-400" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Pro */}
            <div className="relative rounded-[2.5rem] py-12 px-8 overflow-hidden liquid-glass border border-orange-500/30 group">
              <VideoBackground 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260407_043131_ebe2f0b5-9acc-4a4f-b2c1-7297f1a3beb9.mp4" 
                className="opacity-40 mix-blend-screen" 
              />
              <div className="relative z-10">
                <div className="absolute top-0 right-0 bg-orange-500 text-xs font-bold px-3 py-1 rounded-full text-white">POPULAR</div>
                <h3 className="text-2xl font-medium mb-2">Pro</h3>
                <p className="text-gray-300 mb-8 h-12">Advanced features for growing organizations.</p>
                <div className="text-5xl font-bold mb-8">$29<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                <ul className="space-y-4 mb-10">
                  {['Unlimited users', 'Advanced predictive analytics', 'Unlimited projects', '24/7 Priority support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-orange-400" /> {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-orange-500 text-white py-4 rounded-full font-medium hover:bg-orange-600 transition-colors cursor-pointer">
                  Upgrade to Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-24 bg-black relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden liquid-glass py-24 md:py-32 px-4 text-center">
          <VideoBackground 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4" 
            className="opacity-40 scale-105" 
          />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">Ready to start building?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of progressive teams using Slate to manage their workflows.</p>
            <button className="bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 cursor-pointer">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Footer Section */}
      <footer className="bg-black text-gray-400 py-16 px-4 sm:px-6 lg:px-10 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="white">
                <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
              </svg>
              <span className="text-lg font-semibold tracking-wide text-white">Slate</span>
            </div>
            <p className="text-sm">Building the future of productivity, one block at a time.</p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Slate Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

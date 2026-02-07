"use client";

import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Facebook, Instagram, Linkedin, Menu, X, Mail, Phone, MapPin } from 'lucide-react';

export default function VinayakVentureWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ADD THIS LINE TO FIX THE ERROR
  const [activeSection, setActiveSection] = useState("home");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Form Handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    try {
      const res = await fetch("/.netlify/functions/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", contact:"", subject: "", message: "" });
      }
      setStatus(data.message);
    } catch {
      setStatus("Something went wrong. Please try again.");
      setSuccess(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#1E293B] font-sans selection:bg-[#28A745] selection:text-white text-slate-200">
      
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#1B212C] border-b border-white/5 px-6 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex  items-center gap-3 overflow-hidden">
            <img 
              src="lo1.png" 
              alt="Vinayak Venture Logo" 
              className="h-10 md:h-15 w-auto object-contain" 
            />
          </div>
          
          <div className="hidden md:flex gap-8 text-[13px] font-bold uppercase tracking-widest text-white/80">
            <a 
              href="#home" 
              onClick={() => setActiveSection("home")}
              className={`transition-all duration-300 border-b ${activeSection === "home" ? "text-[#28A745] border-[#28A745]" : "border-transparent hover:text-[#28A745]"}`}
            >
              Home
            </a>
            <a 
              href="#products" 
              onClick={() => setActiveSection("products")}
              className={`transition-all duration-300 border-b ${activeSection === "products" ? "text-[#28A745] border-[#28A745]" : "border-transparent hover:text-[#28A745]"}`}
            >
              Products
            </a>
            <a 
              href="#about" 
              onClick={() => setActiveSection("about")}
              className={`transition-all duration-300 border-b ${activeSection === "about" ? "text-[#28A745] border-[#28A745]" : "border-transparent hover:text-[#28A745]"}`}
            >
              About Us
            </a>
            <a 
              href="#specs" 
              onClick={() => setActiveSection("specs")}
              className={`transition-all duration-300 border-b ${activeSection === "specs" ? "text-[#28A745] border-[#28A745]" : "border-transparent hover:text-[#28A745]"}`}
            >
              Technical Specs
            </a>
            <a 
              href="#contact" 
              onClick={() => setActiveSection("contact")}
              className={`transition-all duration-300 border-b ${activeSection === "contact" ? "text-[#28A745] border-[#28A745]" : "border-transparent hover:text-[#28A745]"}`}
            >
              Contact
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1B212C] border-b border-white/5 p-6 flex flex-col gap-4 md:hidden">
            <a href="#home" onClick={() => {setIsMenuOpen(false); setActiveSection("home");}} className={`text-lg font-bold ${activeSection === "home" ? "text-[#28A745]" : ""}`}>Home</a>
            <a href="#products" onClick={() => {setIsMenuOpen(false); setActiveSection("products");}} className={`text-lg font-bold ${activeSection === "products" ? "text-[#28A745]" : ""}`}>Products</a>
            <a href="#about" onClick={() => {setIsMenuOpen(false); setActiveSection("about");}} className={`text-lg font-bold ${activeSection === "about" ? "text-[#28A745]" : ""}`}>About Us</a>
            <a href="#contact" onClick={() => {setIsMenuOpen(false); setActiveSection("contact");}} className={`text-lg font-bold text-[#28A745] ${activeSection === "contact" ? "text-[#28A745]" : ""}`}>Contact</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-24 overflow-hidden bg-[#1E293B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 p-8 md:p-12 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-[#28A745] text-white text-[10px] px-3 py-1 rounded-full font-bold mb-6 tracking-widest uppercase">
              Professional Packaging Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              PROTECTION IN <br />
              <span className="text-[#28A745] uppercase">EVERY LAYER.</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed mb-8">
              Industrial-grade stretch film solutions designed for secure wrapping, load stability, and dependable protection during transit and storage.
            </p>
            <div className="flex gap-4">
               <a href="#products" className="bg-[#28A745] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-green-600 transition-colors shadow-lg shadow-green-900/20">Explore Range</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[600px]">
            <div className="absolute inset-0 bg-[#334155] overflow-hidden" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              <img 
                src="image.png" 
                alt="Stretch Film Industrial" 
                className="w-full h-full object-cover opacity-60 "
              />
            </div>
          </div>
        </div>
      </section>

     {/* 3. ABOUT US */}
<section 
  id="about" 
  className="py-24 pt-12 bg-[#0F172A] px-6 scroll-mt-24"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">
          Who We Are
        </h2>
        <h3 className="text-4xl font-black text-white mb-6 uppercase">
          About Vinayak Venture
        </h3>
        <p className="text-slate-400 leading-relaxed mb-6">
          Vinayak Venture is a professional supplier of Industrial Stretch Film Packaging Solutions, supporting businesses with products built for strength, consistency, and efficiency. 
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="border-l-4 border-[#28A745] pl-4">
            <div className="text-2xl font-black text-white">Pan-India</div>
            <div className="text-xs uppercase font-bold text-slate-500">Supply Network</div>
          </div>
          <div className="border-l-4 border-[#28A745] pl-4">
            <div className="text-2xl font-black text-white">24/7</div>
            <div className="text-xs uppercase font-bold text-slate-500">Timely Support</div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img 
          src="wherehouse.jpg" 
          alt="Warehouse Operation" 
          className="rounded-2xl shadow-2xl opacity-70" 
        />
      </div>
    </div>
  </div>
</section>

      {/* 4. PRODUCT RANGE */}
      <section id="products"  className="py-24 pt-15 bg-[#0F172A] px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-sm font-black text-[#28A745] uppercase tracking-[0.3em] mb-4">Our Product Range</h1>
            <h3 className="text-4xl font-black text-white uppercase">Engineered for Reliability</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
  {[
    { title: "Machine Stretch Films", desc: "Standard transparent films suitable for heavy-duty machine wrapping.", image: "product/1.png" },
    { title: "Colored Stretch Films", desc: "Robust colored films for specific product identification and security.", image: "product/2.png" },
    { title: "Hand Stretch Films", desc: "High-performance transparent films designed for secure manual wrapping.", image: "product/3.png" },
    { title: "Pre-Stretched Film", desc: "Lightweight films designed for efficiency and reduced material usage.", image: "product/4.png" },
    { title: "Vented Stretch Film", desc: "Ideal for products needing airflow, such as fruits and vegetables.", image: "product/5.png" },
    { title: "Jumbo Rolls", desc: "High-volume, industrial-grade rolls for large-scale warehouse operations.", image: "product/6.jpg" },
  ].map((prod, i) => (
    <div key={i} className="group p-6 rounded-xl border border-white/5 bg-[#334155] hover:bg-[#28A745] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center max-w-sm mx-auto w-full">
      <div className="w-full aspect-square mb-6 bg-[#1E293B] rounded-lg flex items-center justify-center p-4 shadow-inner overflow-hidden">
        <img 
          src={prod.image} 
          alt={prod.title} 
          className="max-h-full object-contain transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" 
        />
      </div>
      <h4 className="text-xl font-black text-white group-hover:text-white mb-4 uppercase tracking-tight">{prod.title}</h4>
      <p className="text-slate-400 group-hover:text-white/80 text-sm leading-relaxed">{prod.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* 5. TECHNICAL SPECIFICATIONS */}
      <section id="specs" className="py-24 pt-35 bg-[#0F172A] text-white px-6 scroll-mt-24">
  <div className="max-w-7xl mx-auto">
    <div className="mb-12">
      <h2 className="text-[#28A745] font-black uppercase tracking-[0.2em] text-sm mb-2">Technical Specifications</h2>
      <h3 className="text-3xl font-black uppercase text-white">Industrial-Grade Performance</h3>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Table Side */}
      <div className="overflow-hidden rounded-xl border border-white/10 flex flex-col justify-center">
        <table className="w-full text-left text-sm h-full">
          <tbody className="divide-y divide-white/10">
            <tr className="bg-white/5">
              <td className="p-4 font-bold text-[#28A745] uppercase">Material</td>
              <td className="p-4 text-slate-300">LLDPE (Linear Low-Density Polyethylene)</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-[#28A745] uppercase">Thickness</td>
              <td className="p-4 text-slate-300">60 / 80 / 90 / 100 (15-25 microns)</td>
            </tr>
            <tr className="bg-white/5">
              <td className="p-4 font-bold text-[#28A745] uppercase">Stretch Capacity</td>
              <td className="p-4 text-slate-300">Up to 200% - 300%</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-[#28A745] uppercase">Load Capacity</td>
              <td className="p-4 text-slate-300">Up to 2600 lbs</td>
            </tr>
            <tr className="bg-white/5">
              <td className="p-4 font-bold text-[#28A745] uppercase">Cling Properties</td>
              <td className="p-4 text-slate-300">Single or Double Side Cling Available</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Image Side */}
      <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <img 
          src="p.png" // Aapne jo image save ki hai uska path yahan likhein
          alt="Premium Quality Stretch Film"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        />
        
      </div>
    </div>
  </div>
</section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-24 pt-38 bg-[#1E293B] px-6 md:px-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-[#334155] shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white/10">
            
            {/* Left Side: Info */}
            <div className="bg-[#0F172A] text-white p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#28A745]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic text-[#28A745]">Get in Touch</h2>
                <p className="text-slate-400 mb-10 font-medium leading-relaxed">
                  Have a question about our industrial stretch films or need a bulk quote? 
                  Our team is ready to provide you with the perfect packaging solution.
                </p>

                <div className="space-y-8 font-bold">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#28A745] transition-colors"><Mail size={18}/></div>
                    <p className="text-sm">
                      <a href="mailto:info.vinayakventure@gmail.com" className="hover:text-[#28A745] transition-colors">info.vinayakventure@gmail.com</a><br/><br />
                      <a href="mailto:vinayakventure03@gmail.com" className="hover:text-[#28A745] transition-colors">vinayakventure03@gmail.com</a>
                    
                    </p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#28A745] transition-colors"><Phone size={18}/></div>
                    <p className="text-lg">
                       <a href="tel:+91 87348 76743" className="hover:text-[#28A745] transition-colors">+91 99782 76368</a>&nbsp;|&nbsp;
                    
                      <a href="tel:+916354768985" className="hover:text-[#28A745] transition-colors">+91 63547 68985</a> 
                    
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#28A745] transition-colors"><MapPin size={18}/></div>
                    <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">
                       491-C/19, Chandan Complex, <br />
                       Opp. Himalaya Factory, G.I.D.C., <br />
                       Makarpura, Vadodara-390010.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-12 text-[#28A745] font-black text-xs tracking-[0.4em] uppercase">
                Total Solutions in Packaging
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-12">
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter italic">Inquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-white placeholder-slate-600"
                    placeholder="Full Name"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-white placeholder-slate-600"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Your Contact</label>
                    <input
                      type="text" name="contact" value={formData.contact} onChange={handleChange} required maxLength={13}
                      className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-white placeholder-slate-600"
                      placeholder="Your Contact "
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text" name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-white placeholder-slate-600"
                      placeholder="Bulk Inquiry"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    name="message" rows={4} value={formData.message} onChange={handleChange} required
                    className="w-full bg-[#1E293B] border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#28A745] focus:outline-none transition-all font-bold text-white resize-none placeholder-slate-600"
                    placeholder="Enter your requirements here..."
                  />
                </div>

                {status && (
                  <div className={`p-4 rounded-xl text-sm font-bold ${success ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}>
                    {status}
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  className="w-full bg-[#28A745] hover:bg-green-600 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
<footer className="bg-[#1B212C] text-slate-400 pt-20 pb-10 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-left">
      
      {/* Reduced space-y here from 8 to 4 */}
      <div className="space-y-4"> 
        <img 
          src="lo1.png" 
          alt="Vinayak Venture Logo" 
          className="h-30 w-auto object-contain" // Adjusted height for a cleaner look
        />
        <p className="text-[15px] leading-relaxed max-w-sm text-slate-400">
          At Vinayak Venture, we're the creators of premium packaging solutions that 
          protect your business. With quality as our canvas and reliability 
          as our brush.
        </p>
        
        {/* Social Icons with a small top margin to keep them separate from text */}
        <div className="flex gap-6 text-slate-400 pt-2">
          <a href="https://www.facebook.com/share/1AVrAw5xrX/" className="hover:text-white transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
          <a href="https://www.instagram.com/vinayak_.venture?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-white transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/company/111120977/admin/dashboard/" className="hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-8 text-[17px] tracking-tight">Useful Links</h4>
        <ul className="space-y-5 text-[15px]">
          <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#specs" className="hover:text-white transition-colors">Technical Specs</a></li>
          <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
        </ul>
      </div>

      <div className="space-y-8 font-bold">
       <h4 className="text-white font-bold mb-8 text-[17px] tracking-tight">Contact Us</h4>      
        <div className="flex items-start gap-4 group">
          
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-[#28A745] transition-colors"><MapPin size={18}/></div>
                    <h3 className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">
                       491-C/19, Chandan Complex, <br />
                       Opp. Himalaya Factory, G.I.D.C., <br />
                       Makarpura, Vadodara-390010.
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#28A745] transition-colors"><Mail size={18}/></div>
                    <p className="text-sm">
                      <a href="mailto:info.vinayakventure@gmail.com" className="hover:text-[#28A745] transition-colors">info.vinayakventure@gmail.com</a><br/><br />
                      <a href="mailto:vinayakventure03@gmail.com" className="hover:text-[#28A745] transition-colors">vinayakventure03@gmail.com</a>
                    
                    </p>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#28A745] transition-colors"><Phone size={18}/></div>
                    <p className="text-lg">
                       <a href="tel:+91 87348 76743" className="hover:text-[#28A745] transition-colors">+91 99782 76368</a> &nbsp;|&nbsp;
                        <a href="tel:+916354768985" className="hover:text-[#28A745] transition-colors">+91 63547 68985</a> 
                     
                    </p>
                  </div>
                  
                  
                </div>
    </div>

    <div className="pt-10 border-t border-white/5 text-center">
      <p className="text-[14px] font-medium text-slate-300">
        © 2026 Vinayak Venture | Developed with <span className="text-[#28A745]">🫶</span> by{" "}
        <a 
          href="https://www.techstrota.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#28A745] transition-colors"
        >
          Techstrota
        </a>{" "}
        | All Rights Reserved
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}
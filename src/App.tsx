import React from 'react';
import { ArrowRight, Factory, Hammer, HardHat, Package, Settings, Shield, PenTool as Tool, Wrench, Mail, BookOpen, Info, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

function ProductCard({ title, description, icon: Icon, link }: {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer" 
      className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-semibold">
        Learn More <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <img 
              src="https://ci3.googleusercontent.com/meips/ADKq_NbF6g6A4cbJREA1saU5Dn4IsLcBeNPYTjq0lnMGYP-gEmZkp8A1wlQ1E8hoRWjyuZ8w2uCdB-7MGLJ9ZMY6c743FCHxQJFseW78FNfbaC0zpIbK7lq12W-hAS9Jm-0eMvjIUg_49IZI7yK0vWnz1DB1e_vs5NxjQU0=s0-d-e1-ft#https://mcusercontent.com/3784c569cab021e647091e0c5/images/c8204f01-7e43-017b-5e2e-f5f263ee8146.png"
              alt="INVEX Steel Industry Solutions Banner"
              className="w-full object-contain rounded-lg shadow-md"
            />
            <img 
              src="https://ci3.googleusercontent.com/meips/ADKq_NZsZ9wV9rLw6HPa08r2dNAqdVk0DKJz_fYWpRdYcM1bp05qm3BVTrXG5XArOhplW2Js-VQazUxKO9e_vk_1AiN5ao40crC4t7P9k_r68wv--FMn7bi2DQXmT5B04MnW2SNqGAYmDDbcX0OHNWjqztUa-Em1VZ4_QG4=s0-d-e1-ft#https://mcusercontent.com/3784c569cab021e647091e0c5/images/50a8e678-92fb-3238-857b-5cc73a651ebb.png"
              alt="INVEX Steel Industry Solutions Features"
              className="w-full object-contain rounded-lg shadow-md"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured: OCTG Bar and Tube Solutions</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px] rounded-xl shadow-lg"
              src="https://www.youtube-nocookie.com/embed/qsw02FFoFIs?rel=0"
              title="OCTG Bar and Tube Solutions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="INVEX Solutions"
            description="Advanced inventory management and control systems for steel manufacturing."
            icon={Factory}
            link="https://invera.com/invex/"
          />
          
          <ProductCard
            title="Steel Bar Solutions"
            description="Comprehensive management solutions for steel bar manufacturing and processing."
            icon={Tool}
            link="https://invera.com/general-multi-line/"
          />
          
          <ProductCard
            title="OCTG Solutions"
            description="Specialized solutions for Oil Country Tubular Goods manufacturing and processing."
            icon={HardHat}
            link="https://invera.com/energy-octg/"
          />
          
          <ProductCard
            title="Tube Products"
            description="Advanced solutions for tube mill operations and management."
            icon={Package}
            link="https://invera.com/tubemill/"
          />
          
          <ProductCard
            title="Implementation Services"
            description="Out-of-the-box implementation solutions for seamless integration."
            icon={Settings}
            link="https://invera.com/implementation/"
          />
          
          <ProductCard
            title="Industry Standards"
            description="Solutions compliant with ASTM, ASME, and MIL standards."
            icon={Shield}
            link="https://invera.com/buildingproducts/"
          />
        </div>

        {/* Company Information Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Description */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Invera has been providing metal enterprise and metal-specific e-commerce solutions to the metal service center and processing industries since 1977. The metal software solution INVEX is fast and intuitive and can be implemented quickly requiring minimal, if any, software modifications.
                </p>
                <p>
                  INVEX is used by metal service centers, metal stockholders, plate processors, metal distributors, metal processors, steel toll processors, and steel tube mills that produce tubes from slit coils.
                </p>
                <p className="font-semibold">
                  Invera's commitment to the metals industry is endorsed by over 700 sites in North America, Europe and the Middle East at single-site and multi-site companies.
                </p>
              </div>
            </div>
            {/* Global Presence Map */}
            <div className="relative h-full min-h-[400px] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&w=1600&q=80"
                alt="Global Presence Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-6 rounded-lg shadow-lg max-w-md mx-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Global Presence</h3>
                  <p className="text-gray-600">
                    With over 700 installations across North America, Europe, and the Middle East, Invera provides comprehensive solutions to metal industry leaders worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://invera.com/blog/octg-bar-and-tube/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">OCTG Bar and Tube Blog</h3>
                <p className="text-sm text-gray-600">Read our detailed insights about OCTG solutions</p>
              </div>
            </a>

            <a 
              href="https://invera.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Info className="w-6 h-6 text-blue-600 mr-3" />
              <div>
                <h3 className="font-semibold text-gray-800">About Invera</h3>
                <p className="text-sm text-gray-600">Learn more about our company and solutions</p>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">About Invera</h4>
              <p className="text-gray-400 mb-4">
                Leading provider of advanced software solutions for the steel industry since 1976.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/invera" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/inverasoftware" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (514) 925-8558</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="mailto:info@invera.com" className="hover:text-white">info@invera.com</a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Montreal, Canada</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="https://invera.com/products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="https://invera.com/services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="https://invera.com/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="https://invera.com/careers" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and industry insights.</p>
              <a
                href="https://invera.com/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                © 2024 Invera. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a 
                  href="https://invera.us16.list-manage.com/vcard?u=3784c569cab021e647091e0c5&id=1aec67f0f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Add to Address Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
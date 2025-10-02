import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Halo! Saya tertarik dengan Kelas IDECA Shopee Affiliate. Bisa minta info lebih detail?");
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-3xl font-heading font-bold text-gradient-primary mb-4">
                IDECA
              </h3>
              <p className="text-background/80 leading-relaxed max-w-md">
                Platform pembelajaran #1 untuk ibu-ibu Indonesia yang ingin sukses di dunia digital marketing. 
                Dari nol sampai jadi Top Creator, kita dampingin sampai sukses!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleWhatsApp}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat WhatsApp
              </Button>
              <Button 
                onClick={() => scrollToSection('#harga')}
                variant="outline"
                className="border-background/20 text-background hover:bg-background/10"
              >
                Daftar Sekarang
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">Menu Cepat</h4>
            <ul className="space-y-2">
              {[
                { label: 'Materi Kelas', href: '#materi' },
                { label: 'Benefit', href: '#benefit' },
                { label: 'Pemateri', href: '#pemateri' },
                { label: 'Testimoni', href: '#testimoni' },
                { label: 'Harga & Promo', href: '#harga' },
                { label: 'FAQ', href: '#faq' }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-lg">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/70">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/70">admin@ideca.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Jl. Digital Marketing No. 123<br />
                  Jakarta Selatan, DKI Jakarta 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60 text-center md:text-left">
              <p>&copy; 2024 IDECA - Indonesia Digital Creator Academy. All rights reserved.</p>
              <p className="mt-1">
                Membantu ibu Indonesia sukses di era digital sejak 2020
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <button className="text-background/70 hover:text-background transition-colors">
                Kebijakan Privasi
              </button>
              <span className="text-background/40">•</span>
              <button className="text-background/70 hover:text-background transition-colors">
                Syarat & Ketentuan
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center bg-gradient-primary/10 rounded-2xl p-6 border border-primary/20">
          <p className="text-background/90 mb-3">
            <span className="font-semibold">Ready untuk jadi Top Creator Shopee?</span>
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="gradient-primary hover:shadow-lg transition-all duration-300 font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Konsultasi Gratis Sekarang
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
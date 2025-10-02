import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-3d-phone.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 pb-16 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
              Kuota terbatas • Akses rekaman seumur hidup
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-shadow">
                Cukup <span className="text-gradient-primary">HP & Waktu Luang</span>
                <br />
                Jadi Top Creator Shopee dalam{' '}
                <span className="text-gradient-primary">2 Minggu!</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Kelas online 2 hari via Zoom + Rekaman Eksklusif. 
                Praktik step-by-step—tanpa ribet. Simple banget buat pemula!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#harga')}
                className="gradient-primary hover:shadow-lg transition-all duration-300 font-medium group"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#materi')}
                className="border-2 hover:bg-primary/5 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Lihat Materi Kelas
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">500+</span> Ibu-ibu sudah bergabung
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-accent">⭐ 4.9/5</span> Rating kepuasan
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Smartphone with Shopee affiliate earnings floating with coins and percentage symbols"
                className="w-full h-auto animate-float hover-lift"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute top-8 right-8 w-full h-full bg-gradient-primary/10 rounded-2xl -z-20" />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
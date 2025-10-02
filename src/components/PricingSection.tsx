import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Gift, Zap, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  // Set target date - you can modify this
  const targetDate = new Date('2024-12-31T23:59:59');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const features = [
    "2 hari via Zoom + rekaman eksklusif",
    "Pendampingan seumur hidup",
    "Grup support 2 arah aktif",
    "Tools premium senilai Rp 1M+",
    "Template video & caption siap pakai",
    "Komunitas IDECA eksklusif",
    "Sertifikat resmi completion",
    "Bonus konsultasi 1-on-1"
  ];

  const handleRegister = () => {
    const message = encodeURIComponent(
      `Halo! Saya ingin mendaftar Kelas IDECA Shopee Affiliate dengan harga promo Rp 1.599.000. Mohon info selengkapnya.`
    );
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}&utm_source=landing&utm_campaign=ideca_affiliate&utm_medium=cta_pricing`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="harga" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Promo Terbatas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Investasi Terbaik untuk <span className="text-gradient-primary">Masa Depan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Harga spesial khusus launching dengan benefit lengkap seumur hidup
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className="glass-card border-2 border-primary/30 bg-primary/5 mb-12 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="h-6 w-6 text-primary animate-pulse" />
              <h3 className="text-xl font-heading font-bold">Promo Berakhir Dalam:</h3>
            </div>
            
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-3 mb-2">
                    <span className="text-2xl font-heading font-bold">
                      {String(value) || '00'}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card border-2 border-primary/30 hover-lift relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-primary text-primary-foreground px-6 py-2 rounded-b-lg font-semibold">
                🔥 PALING POPULER
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold">
                  Kelas IDECA Shopee Affiliate
                </h3>
                
                {/* Price */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg text-muted-foreground line-through">
                      Rp 2.999.000
                    </span>
                    <Badge className="bg-destructive text-destructive-foreground">
                      -47%
                    </Badge>
                  </div>
                  <div className="text-5xl font-heading font-bold text-gradient-primary">
                    Rp 1.599.000
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Investasi sekali, manfaat seumur hidup
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonus Highlight */}
              <Card className="bg-accent/10 border-accent/30 mb-6">
                <CardContent className="p-4 flex items-center gap-3">
                  <Gift className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-accent">
                      Bonus Early Bird (10 pendaftar pertama):
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sesi konsultasi 1-on-1 senilai Rp 500.000 - GRATIS!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <Button 
                onClick={handleRegister}
                size="lg" 
                className="w-full gradient-primary hover:shadow-lg transition-all duration-300 font-semibold text-lg py-6 group"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Amankan Kursimu Sekarang
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span>✅ Garansi 100%</span>
                <span>•</span>
                <span>🔒 Pembayaran Aman</span>
                <span>•</span>
                <span>⚡ Akses Instan</span>
              </div>

              {/* Refund Policy */}
              <p className="text-xs text-center text-muted-foreground mt-4 bg-muted/50 rounded-lg p-3">
                *Garansi refund 100% berlaku dalam 24 jam sebelum kelas dimulai. 
                Setelah akses materi diberikan, tidak dapat di-refund.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-6 bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-4 border text-sm">
            <span className="text-primary font-semibold">🔥 23 orang mendaftar hari ini</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-accent font-semibold">⚡ Kuota tersisa: 27 kursi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
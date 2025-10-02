import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Clock, Video, Users } from 'lucide-react';

const PainSolutionSection = () => {
  const painPoints = [
    {
      icon: ShoppingBag,
      pain: "Gak punya modal stok",
      solution: "Affiliate tanpa stok",
      description: "Jualan produk orang lain, dapet komisi tanpa ribet ngurusin stok barang"
    },
    {
      icon: Clock,
      pain: "Waktu terbatas",
      solution: "Template siap pakai",
      description: "Template video & caption udah disiapkan, tinggal edit dikit langsung posting"
    },
    {
      icon: Video,
      pain: "Takut ribet edit video",
      solution: "Cara simple banget",
      description: "Metode editing video gampang, bahkan pemula pun bisa langsung praktek"
    },
    {
      icon: Users,
      pain: "Medsos sepi engagement",
      solution: "Trik trafik organik",
      description: "Rahasia dapet ribuan viewer tanpa iklan berbayar, 100% organik"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Masalah Emak-emak <span className="text-gradient-primary">Terjawab!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua kendala yang bikin ragu buat mulai affiliate, 
            ada solusinya yang simple dan gak ribet!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="glass-card hover-lift border-0 group cursor-pointer"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-heading font-semibold text-destructive mb-1">
                        {item.pain}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-primary mx-auto rounded-full" />
                    </div>
                    
                    <h4 className="font-heading font-semibold text-accent text-lg">
                      ✓ {item.solution}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-primary">
            Semua solusinya bakal dipelajari step-by-step dalam 2 hari! 
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
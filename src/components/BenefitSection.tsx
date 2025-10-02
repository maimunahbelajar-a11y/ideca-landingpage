import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, LifeBuoy, Zap, Gift } from 'lucide-react';

const BenefitSection = () => {
  const benefits = [
    {
      icon: LifeBuoy,
      title: "Pendampingan Lifetime",
      description: "Support selamanya sampai sukses jadi Top Creator",
      highlight: true
    },
    {
      icon: Users,
      title: "Grup Support 2 Arah",
      description: "Komunitas solid saling dukung dan sharing tips",
      highlight: false
    },
    {
      icon: Zap,
      title: "Tools Premium",
      description: "Akses tools berbayar yang bikin kerja makin efisien",
      highlight: false
    },
    {
      icon: Gift,
      title: "Komunitas IDECA Eksklusif",
      description: "Network berkualitas dengan sesama Top Creator",
      highlight: true
    }
  ];

  return (
    <section id="benefit" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/20 text-accent border-accent/30">
            Benefit Eksklusif
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Yang Didapat <span className="text-gradient-primary">Selamanya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bukan cuma materinya, tapi support system komplet yang bikin kamu sukses jangka panjang
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className={`glass-card hover-lift border-0 relative overflow-hidden ${
                  benefit.highlight ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {benefit.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-semibold">
                    Premium
                  </div>
                )}
                
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
                    benefit.highlight ? 'gradient-primary' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      benefit.highlight ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-semibold text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <Card className="glass-card border-2 border-accent/30 bg-accent/5 hover-lift">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-accent mr-3" />
              <h3 className="text-2xl font-heading font-bold text-accent">
                Bonus Khusus Pendaftar Hari Ini!
              </h3>
            </div>
            <p className="text-lg mb-4">
              <span className="font-semibold">Template video + caption siap pakai</span> senilai Rp 500.000
            </p>
            <Badge className="bg-accent text-accent-foreground font-medium px-4 py-2">
              Terbatas untuk 50 pendaftar pertama
            </Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitSection;
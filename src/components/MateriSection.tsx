import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Play, Target, DollarSign, TrendingUp, Share2 } from 'lucide-react';

const MateriSection = () => {
  const materiDay1 = [
    {
      icon: Target,
      title: "Cara jadi Top Creator dalam 2 minggu",
      description: "Strategi khusus yang terbukti bikin akun naik pesat"
    },
    {
      icon: DollarSign,
      title: "Komisi tanpa sample",
      description: "Dapet komisi tanpa harus beli produknya dulu"
    },
    {
      icon: TrendingUp,
      title: "Bonus komisi 5% & komisi per 1000 tayang",
      description: "Double income dari setiap video yang viral"
    },
    {
      icon: Play,
      title: "Praktik bikin video yang disukai algoritma",
      description: "Tips rahasia bikin video yang mudah viral"
    }
  ];

  const materiDay2 = [
    {
      icon: Share2,
      title: "Ribuan trafik organik tanpa iklan",
      description: "Metode khusus dapet viewer banyak gratis"
    },
    {
      icon: Calendar,
      title: "Data pengunjung tersimpan 7 hari",
      description: "Sistem tracking yang bikin komisi makin optimal"
    },
    {
      icon: DollarSign,
      title: "FBMP affiliate & komisi sosmed terbesar",
      description: "Platform tambahan buat maksimalin penghasilan"
    },
    {
      icon: Target,
      title: "Tools pendukung metode siap pakai",
      description: "Software & template yang langsung bisa dipake"
    }
  ];

  return (
    <section id="materi" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Materi Lengkap 2 Hari
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Kurikulum <span className="text-gradient-primary">Step-by-Step</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari nol sampai jadi Top Creator Shopee, semua dipelajari dalam 2 hari intensive
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Day 1 */}
          <Card className="glass-card border-0 hover-lift">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-4 mx-auto">
                <span className="text-2xl font-heading font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-2xl font-heading font-bold">
                Hari 1: Shopee Video
              </h3>
              <p className="text-muted-foreground">
                Foundasi jadi Top Creator Shopee
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {materiDay1.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Day 2 */}
          <Card className="glass-card border-0 hover-lift">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-secondary mb-4 mx-auto">
                <span className="text-2xl font-heading font-bold text-secondary-foreground">2</span>
              </div>
              <h3 className="text-2xl font-heading font-bold">
                Hari 2: Social Media (Klik Sakti)
              </h3>
              <p className="text-muted-foreground">
                Maksimalkan penghasilan di semua platform
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {materiDay2.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">Timeline: 2 hari berturut-turut via Zoom</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MateriSection;
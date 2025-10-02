import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, TrendingUp } from 'lucide-react';

const PemateriSection = () => {
  const instructors = [
    {
      name: "Niwa",
      role: "Owner IDECA",
      achievement: "Founder & Top Mentor",
      description: "Ahli strategi affiliate marketing dengan track record membantu 1000+ orang sukses",
      badge: "Founder",
      specialty: "Shopee Affiliate Strategy"
    },
    {
      name: "Yurris", 
      role: "Senior Creator",
      achievement: "Top 1% Creator Shopee",
      description: "Expert dalam viral video content dan algoritma Shopee dengan pengalaman 3+ tahun",
      badge: "Expert",
      specialty: "Viral Content Creation"
    },
    {
      name: "Dony Annur",
      role: "Marketing Specialist", 
      achievement: "Social Media Growth Hacker",
      description: "Spesialis organic traffic yang berhasil generate jutaan viewer tanpa iklan",
      badge: "Specialist",
      specialty: "Organic Traffic Master"
    }
  ];

  return (
    <section id="pemateri" className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Pemateri Berpengalaman
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Belajar dari <span className="text-gradient-primary">Para Ahli</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Praktisi terbaik yang udah terbukti sukses dan siap berbagi semua rahasianya
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card key={index} className="glass-card border-0 hover-lift text-center group">
              <CardContent className="p-8 space-y-6">
                {/* Avatar */}
                <div className="relative mx-auto">
                  <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto group-hover:scale-105 transition-transform">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <Badge 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground"
                  >
                    {instructor.badge}
                  </Badge>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-heading font-bold">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {instructor.role}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {instructor.achievement}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instructor.description}
                  </p>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                      <TrendingUp className="h-3 w-3" />
                      {instructor.specialty}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 bg-background/80 backdrop-blur-sm rounded-2xl px-8 py-6 border">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Murid Sukses</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-accent">3+</div>
              <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-secondary">99%</div>
              <div className="text-sm text-muted-foreground">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PemateriSection;
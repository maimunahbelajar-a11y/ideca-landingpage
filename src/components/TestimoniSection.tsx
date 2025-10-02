import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimoniSection = () => {
  const testimonials = [
    {
      name: "Rina",
      age: "27 th",
      location: "Jakarta",
      message: "Sambil jagain anak, aku upload 3 video—minggu kedua komisi cair! Simple banget, gak ribet kayak yang aku bayangin.",
      achievement: "Komisi pertama Rp 850K",
      rating: 5
    },
    {
      name: "Ayuni", 
      age: "32 th",
      location: "Bandung",
      message: "Gak perlu stok barang, tapi hasilnya beneran ada. Paling suka bagian Klik Sakti, trafik langsung naik drastis!",
      achievement: "7 hari sudah cair Rp 1.2M",
      rating: 5
    },
    {
      name: "Sari",
      age: "29 th", 
      location: "Surabaya",
      message: "Template videonya keren banget, tinggal ganti produk aja. Sekarang udah jadi Top Creator di niche skincare!",
      achievement: "Viral 100K+ views",
      rating: 5
    },
    {
      name: "Devi",
      age: "25 th",
      location: "Yogya", 
      message: "Materinya detail tapi gampang diikuti. Support di grup juga aktif banget, jadi gak merasa sendirian.",
      achievement: "Konsisten profit Rp 2M/bulan",
      rating: 5
    },
    {
      name: "Putri",
      age: "31 th",
      location: "Medan",
      message: "Awalnya skeptis, tapi setelah ikut kelasnya langsung paham kenapa banyak yang sukses. Worth it banget!",
      achievement: "ROI 500% dalam 1 bulan",
      rating: 5
    },
    {
      name: "Maya",
      age: "28 th",
      location: "Makassar",
      message: "Pendampingan lifetime-nya beneran ada, gak cuma janji. Tim IDECA selalu siap bantu sampai kita bisa mandiri.",
      achievement: "Affiliate terbaik kategori fashion",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3, 
    currentIndex * 3 + 3
  );

  return (
    <section id="testimoni" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/20 text-accent border-accent/30">
            Testimoni Nyata
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Mereka <span className="text-gradient-primary">Sudah Buktikan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengar langsung dari ibu-ibu yang udah sukses jadi Top Creator
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <Card key={`${currentIndex}-${index}`} className="glass-card border-0 hover-lift">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/30" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm leading-relaxed italic">
                  "{testimonial.message}"
                </p>

                {/* Achievement */}
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-accent">
                    🎯 {testimonial.achievement}
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {testimonial.name}, {testimonial.age}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-8 bg-gradient-primary/5 rounded-2xl px-8 py-6 border border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Testimoni Positif</div>
            </div>
            <div className="w-px h-12 bg-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-accent">⭐ 4.9</div>
              <div className="text-sm text-muted-foreground">Rating Rata-rata</div>
            </div>
            <div className="w-px h-12 bg-primary/20" />
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Recommend ke Teman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
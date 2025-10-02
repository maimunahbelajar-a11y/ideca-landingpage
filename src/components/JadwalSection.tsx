import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const JadwalSection = () => {
  return (
    <section id="jadwal" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/20 text-primary border-primary/30">
            Jadwal Kelas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Waktunya <span className="text-gradient-primary">Mulai Belajar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jadwal fleksibel yang cocok untuk ibu-ibu sibuk. Weekend intensive untuk hasil maksimal.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Weekend Batch */}
          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  Batch Weekend
                </h3>
                <Badge className="bg-accent/20 text-accent">Paling Populer</Badge>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Sabtu - Minggu (2 hari berturut-turut)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>09:00 - 17:00 WIB (8 jam/hari)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Via Zoom (link dikirim H-1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Max 50 peserta per batch</span>
                </div>
              </div>

              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-sm font-medium text-primary">
                  🗓️ Batch Selanjutnya: 21-22 Desember 2024
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Weekday Batch */}
          <Card className="glass-card border-0 hover-lift">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  Batch Weekday
                </h3>
                <Badge className="bg-secondary/20 text-secondary">Flexible</Badge>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Selasa - Rabu (2 hari berturut-turut)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>10:00 - 18:00 WIB (8 jam/hari)</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Via Zoom (link dikirim H-1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>Max 30 peserta per batch</span>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-lg p-4">
                <p className="text-sm font-medium text-secondary">
                  🗓️ Batch Selanjutnya: 17-18 Desember 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="glass-card border-0 max-w-3xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-heading font-bold">
                Yang Perlu Disiapkan
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">📱 Perangkat</h4>
                  <p className="text-sm text-muted-foreground">
                    HP/laptop dengan internet stabil, aplikasi Zoom ter-install
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">📝 Persiapan</h4>
                  <p className="text-sm text-muted-foreground">
                    Akun Shopee aktif, siap praktek langsung selama kelas
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary">🎯 Mindset</h4>
                  <p className="text-sm text-muted-foreground">
                    Siap belajar intensif, komitmen praktek pasca kelas
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-4">
                <p className="text-sm">
                  <strong className="text-accent">Bonus:</strong> Peserta yang hadir tepat waktu dan aktif selama kelas 
                  akan mendapat template eksklusif senilai Rp 300.000!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JadwalSection;
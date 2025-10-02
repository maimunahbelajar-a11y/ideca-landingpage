import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';

const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah butuh modal untuk mulai affiliate?",
      answer: "Tidak butuh modal sama sekali! Ini affiliate marketing, jadi kamu jualan produk orang lain dan dapet komisi. Gak perlu stok barang, gak perlu packing-packing, yang penting HP dan koneksi internet aja."
    },
    {
      question: "Ada rekaman kelasnya gak?",
      answer: "Ada dong! Semua sesi Zoom bakal direkam dan kamu dapet akses seumur hidup. Jadi bisa diulang-ulang kapan aja sampai bener-bener paham. Plus bisa dishare ke suami kalau mau ikut belajar juga 😉"
    },
    {
      question: "Cocok gak buat pemula yang gaptek?",
      answer: "Sangat cocok! Materinya disusun step-by-step khusus buat pemula. Mulai dari dasar banget, cara bikin akun, upload video, sampai teknik advanced. Tim IDECA juga siap bantuin kalau ada yang bingung."
    },
    {
      question: "Gimana sistem garansinya?",
      answer: "Garansi refund 100% berlaku dalam 24 jam sebelum kelas dimulai. Kalau udah akses materi tapi merasa gak cocok, kita ada support system yang bakal bantuin sampai kamu sukses. Tujuan kita sama: bikin kamu berhasil!"
    },
    {
      question: "Bisa akses tools premiumnya selamanya?",
      answer: "Bisa banget! Tools premium, template, dan semua materi bisa diakses seumur hidup. Bahkan kalau ada update tools atau strategi baru, kamu tetep dapet akses gratis sebagai member IDECA."
    },
    {
      question: "Berapa lama bisa mulai dapet hasil?",
      answer: "Rata-rata member IDECA mulai dapet komisi pertama dalam 7-14 hari setelah kelas. Yang penting konsisten praktek sesuai materi dan aktif di grup support buat tanya-jawab."
    },
    {
      question: "Kelasnya kapan dan dimana?",
      answer: "Kelas via Zoom selama 2 hari berturut-turut (weekend). Jadwal pasti akan dikonfirmasi setelah pendaftaran. Flexible banget, bisa ikut sambil jagain anak atau sambil masak 😄"
    },
    {
      question: "Grup supportnya aktif gak?",
      answer: "Aktif banget! Ada grup Telegram khusus member IDECA yang aktif 24/7. Tim mentor dan sesama member saling support, sharing tips, dan celebrate success bareng-bareng. Feel like family!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-secondary/20 text-secondary border-secondary/30">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Pertanyaan yang <span className="text-gradient-primary">Sering Ditanya</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua keraguan dan pertanyaan kamu udah kita jawab di sini. Kalau masih ada yang belum clear, langsung aja tanya ke admin!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass-card border-0 rounded-xl px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-primary/5 rounded-2xl px-8 py-6 border border-primary/20">
            <h3 className="text-xl font-heading font-semibold">
              Masih ada pertanyaan lain?
            </h3>
            <p className="text-muted-foreground">
              Langsung chat admin untuk konsultasi gratis sebelum daftar
            </p>
            <button 
              onClick={() => {
                const message = encodeURIComponent("Halo! Saya mau tanya-tanya tentang Kelas IDECA Shopee Affiliate. Bisa dibantu?");
                window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
              }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💬 Tanya Admin Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
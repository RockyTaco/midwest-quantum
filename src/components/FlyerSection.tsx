import Image from "next/image";
import { Download, ExternalLink, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function FlyerSection({ className = "" }: { className?: string }) {
  return (
    <section className={`border-b border-border/60 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 xl:px-12 py-16 md:py-24">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:p-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-vivid/10 px-3 py-1 text-xs font-semibold text-vivid">
                  <Share2 className="size-3.5" />
                  Spread the Word
                </div>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                  Download &amp; Share the Official Event Flyer
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Help us bring the Midwest quantum community together. Download our official high-resolution flyer to print for campus bulletin boards, hand out at physics and CS club meetings, or share in your student Discord and Slack channels.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Sparkles className="size-4 text-vivid" />
                    High-res print ready (includes registration QR)
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Sparkles className="size-4 text-vivid" />
                    Official sponsor &amp; partner branding
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <a href="/midqwest_flyer.jpg" download="MidQWest_2026_Flyer.jpg">
                      <Download className="size-4 mr-2" />
                      Download Event Flyer (JPG)
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <a href="/midqwest_flyer.jpg" target="_blank" rel="noopener noreferrer">
                      View Full Size
                      <ExternalLink className="size-3.5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Flyer visual preview */}
              <div className="lg:col-span-5 flex justify-center">
                <a
                  href="/midqwest_flyer.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-2xl border border-border/80 bg-background shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-vivid/50"
                  aria-label="View MidQWest official flyer full size"
                >
                  <Image
                    src="/images/midqwest_flyer.jpg"
                    alt="MidQWest 2026 Official Hackathon Flyer"
                    width={791}
                    height={1024}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:brightness-[1.02]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end justify-center p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-md backdrop-blur-sm">
                      <ExternalLink className="size-3 text-vivid" />
                      Click to open full size
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

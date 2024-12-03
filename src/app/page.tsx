import { TextRevealCardPreview } from "@/components/acernity/text-reveal-card";
import BlurFade from "@/components/magicui/blur-fade";
import { FocusCardsDemo } from "@/components/acernity/focus-cards"
import { AnimatedModalGift } from "@/components/acernity/animated-modal-gift";
import { AnimatedModalHpv } from "@/components/acernity/animated-modal-hpv";
import { AnimatedModalPilates } from "@/components/acernity/animated-modal-pilates";
import { MarqueeDemo } from "@/components/magicui/marquee-demo";
import { AnimatedTestimonialsDemo } from "@/components/acernity/animated-testimonials-demo";
import { ImagesSliderDemo } from "@/components/acernity/image-slider-demo";
import { LayoutGridDemo } from "@/components/acernity/layout-grid-demo";

const BLUR_FADE_DELAY = 0.005;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      
      <section id="text-reveal">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY}>
              <TextRevealCardPreview/>
            </BlurFade>
        </div>
      </section>
      {/* <section id="testimonials">
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center text-center">

            </div>
          </BlurFade>
          <div>
            <BlurFade>
            <div className="flex flex-col items-center justify-center text-center">
              <AnimatedTestimonials testimonials={TESTIMONIALS_DATA}/>
            </div>
            </BlurFade>
          </div>
        </div>
      </section> */}
      <section id="animated-testimonials-demo">
        <AnimatedTestimonialsDemo/>
      </section>

      <section id="focus-card-demo">
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            </div>
          </BlurFade>
          <div>
            <BlurFade>
            <div className="flex flex-col items-center justify-center text-center">
              <FocusCardsDemo/>
            </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <div className="space-y-12 w-full py-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Claim your "totally free" gift*
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  *Terms and conditions apply. May require selling your soul, 
                  first-born child, or subscribing to yet another newsletter. 
                  But hey, who doesn&apos;t love a good deal?
                </p>
              </div>
            </div>
          </BlurFade>
        </div>

      <section id="animated-modal">
        <div className="flex space-x-2 justify-center -mt-[40px]">  {/* Adjust the pixel value as needed */}
          <AnimatedModalGift />
          <AnimatedModalHpv />
          <AnimatedModalPilates />
        </div>
      </section>
      
      <section id="image-slider-demo">
        <div className="flex flex-col items-center space-y-4 justify-center bg-dark pt-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
            From your best friend
          </h2>
          <ImagesSliderDemo/>
        </div>
      </section>
    </main>
  );
}

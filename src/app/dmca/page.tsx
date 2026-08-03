import { SplitTextReveal } from "@/components/site/motion";

export const metadata = { title: "DMCA Copyright Policy — genCART", description: "Details on how to submit copyright and DMCA take-down notices to genCART." };

export default function DmcaPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 pt-40 pb-20 space-y-12">
      <div className="space-y-4">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[var(--emerald-accent)]">Copyright</p>
        <SplitTextReveal text="DMCA Copyright Policy" className="font-display text-5xl lg:text-7xl font-bold tracking-tight" />
        <p className="text-xl text-muted-foreground leading-relaxed">
          How to file copyright notices with genCART. We respect intellectual property and respond promptly to legal claims.
        </p>
      </div>
      <div className="space-y-8 font-sans leading-relaxed text-foreground/80">
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Submitting a DMCA Notice</h3>
          <p>If you believe your copyrighted material is displayed on genCART in a way that constitutes copyright infringement, you may submit a formal notification under the Digital Millennium Copyright Act.</p>
          <p>Your notice must contain:</p>
          <ul className="list-disc list-inside pl-4 space-y-2 mt-2 text-sm text-muted-foreground">
            <li>An electronic or physical signature of the person authorized to act on behalf of the copyright owner.</li>
            <li>A description of the copyrighted work that you claim has been infringed.</li>
            <li>The precise URL on genCART containing the material you claim is infringing.</li>
            <li>Your contact details: email address, telephone number, and physical mailing address.</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-semibold text-foreground">Contact details</h3>
          <p>Please send all copyright notices to our legal team via: <span className="font-mono font-semibold text-foreground">legal@genCART.design</span></p>
        </div>
      </div>
    </article>
  );
}

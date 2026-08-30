import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="bg-white py-24 lg:py-15">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Contact Information */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#c89b57]">
              ----- CONTACT DETAILS -----
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#0B1F3A] sm:text-5xl">
              Connect With
              <br />
              Our Team.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-slate-600">
              Have a trading requirement, sourcing opportunity or business
              proposal? Reach out to our team directly.
            </p>

            {/* Details */}

            <div className="mt-12 space-y-8">

              {/* Email */}

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c89b57]/10">
                  <Mail className="h-5 w-5 text-[#c89b57]" />
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@agrosyne.com"
                    className="mt-2 block text-base font-semibold text-[#0B1F3A] transition hover:text-[#c89b57]"
                  >
                    info@agrosyne.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c89b57]/10">
                  <Phone className="h-5 w-5 text-[#c89b57]" />
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Phone
                  </p>

                  <a
                    href="tel:+910000000000"
                    className="mt-2 block text-base font-semibold text-[#0B1F3A] transition hover:text-[#c89b57]"
                  >
                    +91 82904 45443
                  </a>

                </div>

              </div>

              {/* Office */}

              <div className="flex items-start gap-5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c89b57]/10">
                  <MapPin className="h-5 w-5 text-[#c89b57]" />
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Office
                  </p>

                  <p className="mt-2 max-w-sm text-base font-semibold leading-7 text-[#0B1F3A]">
                    Plot no 3, Park House, Infront of Akashwani M.I. Road, Jaipur, Rajasthan - 302001
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">

            <div className="aspect-[16/10] w-full">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.479698391202!2d75.79338927450524!3d26.92000305977891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db34184be4b77%3A0xf06febedd3aafba5!2sAgrosyne%20Global%20Commodity%20Private%20Limited!5e0!3m2!1sen!2sin!4v1787734062338!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Agrosyne Global Commodity Private Limited Office Location"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
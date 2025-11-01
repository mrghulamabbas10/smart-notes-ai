import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    id: "premium",
    name: "Freemium",
    description:
      "Perfect for solo physicians and healthcare professionals. Get the most out of SmartNotes AI. Unlimited sessions mean more value, more freedom, and no restrictions on how often you streamline your clinical documentation.",
    price: "$0",
    period: "/month",
    features: [
      "Unlimited sessions in a month",
      "SOAP + Consult Notes",
      "CPT/ICD Diagnosis Codes with Reimbursement rates",
      "Multiple specialties Templates",
    ],
    ctaText: "Start Freemium Plan",
    featured: false,
    badge: null,
  },

  {
    id: "hospital",
    name: "Premium",
    description:
      "Perfect for solo physicians and healthcare professionals. Get the most out of SmartNotes AI. Unlimited sessions mean more value, more freedom, and no restrictions on how often you streamline your clinical documentation.",
    price: "$89",
    period: "/pricing",
    features: [
      "Unlimited Sessions",
      "SOAP + Consult Notes",
      "Automated CPT & ICD Billing",
      "EHR/EMR Integration",
      "Multiple Templates",
      "30-Day Free Trial",
    ],
    ctaText: "Start Premium Plan",
    featured: false,
    badge: null,
  },
  {
    id: "group",
    name: "Group & Hospital Practice",
    description:
      "For Clinics, Hospitals, and healthcare organizations — manage multiple users effortlessly with admin controls & enjoy unified billing that keeps your organization running smoothly.",
    price: "Custom",
    period: "/pricing",
    features: [
      "All Premium Features",
      "Multi-User Access",
      "Centralized Admin Controls",
      "Dedicated Support",
      "Discounted Price for Each User",
    ],
    ctaText: "Start your Practice Plan",
    featured: true,
    badge: "Upto 20% Off",
  },
];

export function Pricing() {
  return (
    <section
      className="w-full bg-[#EAF7FF] py-16 lg:py-[133px] px-6"
      id="pricing"
    >
      <div className="container mx-auto max-w-[1440px]">
        <div className="text-center mb-5 lg:mb-2">
          <h2 className="text-3xl lg:text-[48px] font-bold text-[#1A1A1A] leading-tight">
            Choose the <span className="text-primary italic">right plan</span>{" "}
            for you and your business
          </h2>

          <p className="text-base lg:text-lg text-[#1A1A1A] max-w-[1063px] mx-auto">
            Choose the <span className="underline">perfect plan</span> for your
            medical practice. Streamline your documentation process with
            AI-powered note generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1320px] mx-auto relative">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`md:relative rounded-2xl p-8 xl:p-5 lg:p-[33px] flex flex-col sticky top-24 ${
                plan.featured
                  ? "bg-[#CBEBFF] border-2 border-primary shadow-xl"
                  : "bg-white border border-[#DEDEDE]"
              }`}
            >
              {plan.featured && index === 2 && (
                <div className="absolute -top-16 md:right-0 right-5 flex items-center gap-2">
                  <img
                    src="/images/onlyarrow.png?width=160"
                    alt="Arrow"
                    className="w-16 h-12"
                  />
                  <div className="font-kalam font-bold text-lg text-brand-gray-text-dark rotate-[8deg]">
                    <div>Most</div>
                    <div className="text-nowrap">popular plan</div>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between mb-3 lg:mb-3">
                <h3 className="text-2xl lg:text-[32px] font-bold text-[#1A1A1A]">
                  {plan.name}
                </h3>
                {plan.badge && (
                  <span className="bg-[#1A1A1A] text-nowrap text-white px-3 py-1.5 rounded-full text-sm">
                    {plan.badge}
                  </span>
                )}
              </div>

              <p className="xl:text-sm 2xl:text-lg text-base text-[#1A1A1A] mb-5 min-h-[72px]">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-4xl lg:text-[48px] font-bold text-[#1A1A1A]">
                  {plan.price}
                </span>
                <span className="text-lg text-[#1A1A1A]/60">{plan.period}</span>
              </div>

              <div className="mb-5">
                <div className="text-base text-[#1A1A1A] mb-2">
                  {plan.id === "premium"
                    ? "Features:"
                    : `${
                        plan.id === "group"
                          ? " All features in Free plus"
                          : "Features:"
                      }`}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-base text-[#1A1A1A]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto w-full py-3 px-6 rounded-full bg-gradient-to-tr from-[#BAD3FF] to-[#1457EA] text-white font-medium md:text-lg flex items-center justify-center gap-3 hover:shadow-lg transition-all duration-300 border border-[#3D5977]">
                {plan.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

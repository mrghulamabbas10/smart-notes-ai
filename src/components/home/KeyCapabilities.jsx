import FileIcon from "../assets/file-icon";

export default function KeyCapabilities() {
  return (
    <section id="features" className="md:px-8 px-2">
      <div className="bg-[#EAF7FF] py-16 sm:py-24 lg:py-32 w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          {/* <div className="mb-16 text-center">
            <div className="inline-block rotate-12 rounded-2xl bg-[#2166FF] px-6 py-1 text-sm font-medium text-white">
              Core Offerings
            </div>
            <h2 className="mb-6 font-urbanist text-4xl font-bold leading-tight text-[#012025] sm:text-5xl lg:text-[56px]">
              Key Capabilities –<br />
              Designed for Better Care
            </h2>
            <p className="mx-auto max-w-3xl font-urbanist text-lg font-medium text-[#717A7C]">
              Simplifying documentation so providers can focus on care.
            </p>
          </div> */}

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Documentation Tool */}
            <div className="flex flex-col justify-center ">
              <div className="mb-6 w-fit rounded-full bg-white px-4 py-2">
                <span className="font-urbanist text-base font-medium text-[#012025]">
                  Documentation Tool
                </span>
              </div>
              <h3 className="mb-4 font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                Clinical SOAP Notes
              </h3>
              <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                Turn every doctor–patient conversation into precise, well
                structured SOAP notes—no more clinical documentation hassle,
                just better care.
              </p>
            </div>
            {/* SOAP Notes Preview */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl z-10 relative">
              <img
                src="/images/note-img.png?width=1140"
                alt="Clinical SOAP Notes Interface"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Consult Notes */}
            <div className=" flex flex-col justify-center">
              <div className="mb-6 w-fit inline-block rounded-full bg-white px-4 py-2">
                <span className="font-urbanist text-base font-medium text-[#012025]">
                  Consult Notes
                </span>
              </div>
              <h3 className="mb-4 font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                AI Comprehensive Consult Note
              </h3>
              <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                Our AI based solution generate comprehensive initial consult
                note including Chief Complaint, HPI and Review of system from
                the encounter.
              </p>
            </div>
            {/* Consult Notes Preview */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl z-10 relative">
              <div className="bg-white md:p-8 p-5">
                <div className="rounded-xl bg-[#BCE5FF] md:p-6 p-4">
                  <div className="mb-6 rounded-lg bg-[#3C82F5] p-6">
                    <div className="mb-2 font-urbanist text-sm font-semibold uppercase tracking-wider text-white/40">
                      CHIEF COMPLAINT
                    </div>
                    <h4 className="font-urbanist text-2xl font-bold text-white sm:text-3xl">
                      Headache, Nausea
                    </h4>
                  </div>

                  <div className="rounded-lg bg-white p-6">
                    <div className="mb-4 font-urbanist text-sm font-semibold uppercase tracking-wider text-[#949494]">
                      HPI
                    </div>
                    <p className="font-urbanist text-lg leading-relaxed text-black sm:text-xl">
                      The patient presents with a headache for 3 days,
                      accompanied by intermittent nausea & dizziness.
                    </p>
                  </div>

                  <div className="mt-4 rounded-lg bg-white p-6">
                    <div className="mb-4 font-urbanist text-sm font-semibold uppercase tracking-wider text-[#949494]">
                      ROS
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-[#DAF7FF] p-4">
                        <p className="font-urbanist text-sm leading-relaxed text-black">
                          Constitutional: Negative for fevers
                        </p>
                      </div>
                      <div className="rounded-lg bg-[#DAF7FF] p-4">
                        <p className="font-urbanist text-sm leading-relaxed text-black">
                          Neurologic: Negative for visual changes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Medical Billing */}
            <div className=" flex flex-col justify-center">
              <div className="mb-6 w-fit inline-block rounded-full bg-white px-4 py-2">
                <span className="font-urbanist text-base font-medium text-[#012025]">
                  Medical Billing
                </span>
              </div>
              <h3 className="mb-4 font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                Automated Medical Billing Information
              </h3>
              <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                Automatically generates Billing codes (CPT, ICD-10, HCPC) from
                the patient encounter, helps with Medical coding precision and
                boost revenue.
              </p>
            </div>

            {/* Medical Billing Preview */}
            <div className="overflow-hidden rounded-xl bg-white shadow-xl z-10 relative">
              <div className="bg-[#BCE5FF] p-8">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="font-urbanist text-sm font-medium text-black/60">
                            CPT
                          </span>
                          <span className="font-urbanist text-3xl font-medium text-black">
                            99214
                          </span>
                        </div>
                        <p className="font-urbanist text-base text-black">
                          Office or other outpatient visit,
                          <br />
                          30–39 minutes
                        </p>
                      </div>
                      <div className="rounded-2xl bg-[#A9E8FB] px-4 py-2">
                        <span className="font-urbanist text-sm font-medium text-[#3C82F5]">
                          High
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 border-t border-black/10 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-urbanist text-sm text-black/60">
                          + 1 Modifier
                        </span>
                        <span className="font-urbanist text-xl font-semibold text-[#35D59A]">
                          + $132,45
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <span className="font-urbanist text-sm font-medium text-black/60">
                            ICD-10
                          </span>
                          <span className="font-urbanist text-3xl font-medium text-black">
                            M54.5
                          </span>
                        </div>
                        <p className="font-urbanist text-base text-black">
                          Low back pain
                        </p>
                      </div>
                      <div className="rounded-2xl bg-[#A9E8FB] px-4 py-2">
                        <span className="font-urbanist text-sm font-medium text-[#3C82F5]">
                          High
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 border-t border-black/10 pt-4">
                      <span className="font-urbanist text-xl font-semibold text-[#35D59A]">
                        + $24,95
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Summary */}
            <div className=" flex flex-col justify-center">
              <div className="mb-6 w-fit inline-block rounded-full bg-white px-4 py-2">
                <span className="font-urbanist text-base font-medium text-[#012025]">
                  Visit Summary
                </span>
              </div>
              <h3 className="mb-4 font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                Patient Encounter Summary
              </h3>
              <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                Create shareable Patient encounter summaries which include Key
                Findings, Recommendations, Follow-up instruction and Patient
                guidance etc.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl bg-white shadow-xl z-10 relative">
              <div className="bg-[#BCE5FF] p-8">
                <div className="rounded-lg bg-white p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3C82F5]">
                      <FileIcon />
                    </div>
                    <h4 className="font-urbanist text-xl font-medium text-black">
                      Encounter Summary
                    </h4>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h5 className="mb-2 font-urbanist text-base font-semibold text-black">
                        Key Findings
                      </h5>
                      <p className="font-urbanist text-base text-black/80">
                        Mild wheezing present
                      </p>
                    </div>

                    <div>
                      <h5 className="mb-2 font-urbanist text-base font-semibold text-black">
                        Recommendations
                      </h5>
                      <p className="font-urbanist text-base text-black/80">
                        Take prescribed medications daily
                      </p>
                    </div>

                    <div>
                      <h5 className="mb-2 font-urbanist text-base font-semibold text-black">
                        Follow-up
                      </h5>
                      <p className="font-urbanist text-base text-black/80">
                        Schedule a follow-up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

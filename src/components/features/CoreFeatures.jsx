import FileIcon from "../assets/file-icon";
import StarFlowerIcon from "../assets/star-flower-icon";

export default function CoreFeatures() {
  return (
    <section className="md:px-8 px-2 py-16 sm:py-24 lg:py-32 w-full">
      <div className="max-w-4xl text-center mb-16 mx-auto">
        <h2 className="text-[#012025] text-center text-4xl md:text-[56px] font-bold leading-[1.12] tracking-[-1px] px-4">
          Core Features That Drive Real Results
        </h2>
        <p className="text-[#454140] mt-3">
          Every feature in SmartNotes AI is designed with one goal in mind: to
          reduce the time you spend on documentation without compromising
          accuracy, compliance, or quality of care.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          {/* Documentation Tool */}
          <div className="flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              AI-Generated Clinical SOAP Notes
            </h3>
            <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
              SmartNotes AI listens as you consult and automatically converts
              your spoken words into structured SOAP notes. Each note is
              organized into Subjective, Objective, Assessment, and Plan — ready
              for review, export, or EHR sync.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time generation",
                "Specialty-sensitive formatting",
                "80% faster than manual documentation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <StarFlowerIcon />{" "}
                  <p className="text-[#717A7C] text-xl"> {item}</p>
                </li>
              ))}
            </ul>
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
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Comprehensive Consult Note
            </h3>
            <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
              Our AI understands medical dialogue the way a clinician would. It
              detects and structures everything from HPI and ROS to medications
              and treatment plans — not just keywords, but clinical intent.
            </p>
            <ul className="space-y-3">
              {[
                "Captures nuance from conversations",
                "Recognizes medical acronyms and conditions",
                "Aligns with SOAP and narrative flows",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <StarFlowerIcon />{" "}
                  <p className="text-[#717A7C] text-xl"> {item}</p>
                </li>
              ))}
            </ul>
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
                    The patient presents with a headache for 3 days, accompanied
                    by intermittent nausea & dizziness.
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
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Automated Billing Data (CPT/ICD Codes)
            </h3>
            <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
              SmartNotes AI extracts medical billing codes directly from your
              patient documentation, including CPT, ICD-10, and HCPCS codes.
              That means more accurate coding and faster reimbursement cycles.
            </p>
            <ul className="space-y-3">
              {[
                "Built-in code identification",
                "Aligns with U.S. and Canada billing standards",
                "Reduces coding errors and rework",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <StarFlowerIcon />{" "}
                  <p className="text-[#717A7C] text-xl"> {item}</p>
                </li>
              ))}
            </ul>
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
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Clean Patient Visit Summaries
            </h3>
            <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
              SmartNotes AI creates polished visit summaries that highlight key
              complaints, findings, instructions, and next steps. Perfect for
              sharing with patients, teams, or referrals.
            </p>
            <ul className="space-y-3">
              {[
                "Customizable formatting",
                "Includes treatment plans and follow-ups",
                "Easily downloadable or sharable",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <StarFlowerIcon />{" "}
                  <p className="text-[#717A7C] text-xl"> {item}</p>
                </li>
              ))}
            </ul>
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
    </section>
  );
}

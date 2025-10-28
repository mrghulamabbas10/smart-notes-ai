import FileIcon from "../assets/file-icon";
import StarFlowerIcon from "../assets/star-flower-icon";
import { BillingInformation } from "../home/ui/BillingInformation";
import ConsultNotes from "../home/ui/ConsultNotes";
import { PatientSummary } from "../home/ui/PatientSummary";

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
          {/* Consult Notes */}
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Comprehensive <br /> Consult Note
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
          <ConsultNotes />
          {/* Medical Billing */}
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Automated Billing <br /> Data (CPT/ICD Codes)
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
          <BillingInformation />
          {/* Visit Summary */}
          <div className=" flex flex-col justify-center gap-4">
            <h3 className=" font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
              Clean Patient <br /> Visit Summaries
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
          <PatientSummary />
        </div>
      </div>
    </section>
  );
}

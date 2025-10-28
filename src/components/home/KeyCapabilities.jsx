import FileIcon from "../assets/file-icon";
import { BillingInformation } from "./ui/BillingInformation";
import ConsultNotes from "./ui/ConsultNotes";
import { PatientSummary } from "./ui/PatientSummary";

export default function KeyCapabilities() {
  return (
    <section id="features" className="md:px-8 px-2">
      <div className="bg-[#EAF7FF] py-16 sm:py-24 lg:py-32 w-full ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* Consult Notes */}
            <div className=" flex flex-col justify-center">
              <div className="mb-6 w-fit inline-block rounded-full bg-white px-4 py-2">
                <span className="font-urbanist text-base font-medium text-[#012025]">
                  Consult Notes
                </span>
              </div>
              <h3 className="mb-4 font-urbanist text-3xl font-bold leading-tight text-[#012025] sm:text-4xl lg:text-[42px]">
                Notes
              </h3>
              <p className="font-urbanist text-lg font-medium leading-relaxed text-[#717A7C] sm:text-xl">
                Our AI based solution generate note including Chief Complaint,
                HPI and Review of system from the encounter.
              </p>
            </div>
            {/* Consult Notes Preview */}
            <ConsultNotes />
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
            <BillingInformation />

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
            <PatientSummary />
          </div>
        </div>
      </div>
    </section>
  );
}

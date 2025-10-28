export function PatientSummary() {
  return (
    <div className="relative bg-white rounded-[10px] shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#BCE5FF] rounded-[10px] m-[28px]" />

      <div className="relative">
        <div className="flex justify-end pt-[30px] px-[43px] mt-5">
          <div className="bg-medical-blue rounded-t-lg px-6 py-3 flex items-center gap-3">
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.41961 4.43425H9.4566C9.6703 4.43425 9.84838 4.25616 9.84838 4.04247V2.33288C9.84838 2.11918 9.6703 1.9411 9.4566 1.9411H8.44153V1.90548C8.38811 0.836986 7.5155 0 6.44701 0C5.37852 0 4.50591 0.836986 4.45249 1.90548V1.9411H3.41961C3.20591 1.9411 3.02783 2.11918 3.02783 2.33288V4.04247C3.02783 4.25616 3.20591 4.43425 3.41961 4.43425ZM6.44701 1.17534C6.89221 1.17534 7.24838 1.53151 7.24838 1.97671C7.24838 2.42192 6.89221 2.77808 6.44701 2.77808C6.0018 2.77808 5.64564 2.42192 5.64564 1.97671C5.64564 1.54932 6.0018 1.17534 6.44701 1.17534Z"
                fill="white"
              />
              <path
                d="M12.074 3.09839H10.774V4.02442C10.774 4.73675 10.1863 5.32442 9.47397 5.32442H3.43699C2.72466 5.32442 2.13699 4.73675 2.13699 4.02442V3.09839H0.908219C0.409589 3.09839 0 3.50798 0 4.00661V15.9915C0 16.4902 0.409589 16.8998 0.908219 16.8998H12.0918C12.5904 16.8998 13 16.4902 13 15.9915V4.00661C12.9822 3.50798 12.5726 3.09839 12.074 3.09839ZM10.2575 14.0683C10.2575 14.2463 10.1151 14.371 9.9548 14.371H3.0274C2.84932 14.371 2.72466 14.2285 2.72466 14.0683V13.5518C2.72466 13.3737 2.86712 13.2491 3.0274 13.2491H9.93699C10.1151 13.2491 10.2397 13.3915 10.2397 13.5518V14.0683H10.2575ZM10.2575 11.2011C10.2575 11.3792 10.1151 11.5039 9.9548 11.5039H3.0274C2.84932 11.5039 2.72466 11.3614 2.72466 11.2011V10.6847C2.72466 10.5066 2.86712 10.382 3.0274 10.382H9.93699C10.1151 10.382 10.2397 10.5244 10.2397 10.6847V11.2011H10.2575ZM10.2575 8.33401C10.2575 8.51209 10.1151 8.63674 9.9548 8.63674H3.0274C2.84932 8.63674 2.72466 8.49428 2.72466 8.33401V7.81757C2.72466 7.63948 2.86712 7.51483 3.0274 7.51483H9.93699C10.1151 7.51483 10.2397 7.65729 10.2397 7.81757V8.33401H10.2575Z"
                fill="white"
              />
            </svg>

            <span className="text-white font-urbanist text-[17px] font-semibold">
              Patient Summary
            </span>
          </div>
        </div>

        <div className=" mx-[43px] mb-10 bg-white rounded-lg p-8">
          <div className="space-y-4 font-urbanist text-[13px]">
            <p className="text-medical-text-gray font-medium">
              Dear Mr. Ahmed,
              <br />
              Thanks for visiting [Doctor's Name] today. Below is a summary of
              your appointment:
            </p>

            <div className="space-y-4 mt-6">
              <p className="text-medical-text-gray">
                <span className="text-medical-text-dark font-semibold">
                  Chief complaint:{" "}
                </span>
                Management of diabetes and monitoring of blood sugar levels.
              </p>

              <div>
                <p className="text-medical-text-dark font-semibold mb-2">
                  Key Findings:
                </p>
                <ul className="space-y-1 ml-5 list-disc marker:text-medical-text-gray">
                  <li className="text-medical-text-gray">
                    Blood sugar levels fluctuating, especially post-dinner.
                  </li>
                  <li className="text-medical-text-gray">
                    Current medications: Metformin, Dapagliflozin, Semaglutide,
                    Atorvastatin, Lisinopril, and a weekly Vitamin D tablet.
                  </li>
                  <li className="text-medical-text-gray">
                    Recent glucose monitoring: Fasting levels from 110 to 135
                    mg/dL; post-dinner levels reaching 190 or 210 mg/dL.
                  </li>
                  <li className="text-medical-text-gray">
                    HbA1c: 7.4% (down from 8.2%).
                  </li>
                  <li className="text-medical-text-gray">
                    Weight: 82 kg (2 kg down).
                  </li>
                  <li className="text-medical-text-gray">
                    Blood pressure: 132/84.
                  </li>
                  <li className="text-medical-text-gray">
                    Evidence of early kidney stress indicated by urine
                    albumin-to-creatinine ratio of 45 mg/g, but improved from
                    previous readings.
                  </li>
                  <li className="text-medical-text-gray">
                    Tingling sensations in toes at night, but no significant
                    foot issues reported.
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-medical-text-dark font-semibold mb-2">
                  Treatment Plan:
                </p>
                <ul className="space-y-1 ml-5 list-disc marker:text-medical-text-gray">
                  <li className="text-medical-text-gray">
                    Continue current medications with no changes at this time.
                  </li>
                  <li className="text-medical-text-gray">
                    Implement lifestyle adjustments to address evening blood
                    sugar spikes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

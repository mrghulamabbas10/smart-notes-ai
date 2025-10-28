import React from "react";

export default function ConsultNotes() {
  return (
    <div className="relative bg-white rounded-[10px] shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#BCE5FF] rounded-[10px] m-[28px]" />

      <div className="relative">
        <div className="flex justify-start pt-[30px] px-[43px] mt-5">
          <div className="bg-medical-blue rounded-t-lg px-6 py-3 flex items-center gap-3">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7778 3.91205C18.7778 1.7526 17.0252 0 14.8658 0H3.91205C1.7526 0 0 1.7526 0 3.91205V14.8658C0 17.0252 1.7526 18.7778 3.91205 18.7778H14.8658C17.0252 18.7778 18.7778 17.0252 18.7778 14.8658V3.91205ZM3.93558 12.3385L4.71799 9.20114C4.74929 9.0603 4.81971 8.93512 4.92142 8.83339L10.7896 2.9652C11.7442 2.01849 13.2933 2.01849 14.2477 2.9652C14.7094 3.42683 14.9597 4.04492 14.9597 4.69431C14.9597 5.3437 14.7016 5.96181 14.2477 6.42342L8.37954 12.2916C8.27783 12.3855 8.15265 12.4637 8.01964 12.495L4.89 13.2853C4.81958 13.3009 4.75699 13.3087 4.6944 13.3087C4.49097 13.3087 4.28754 13.2305 4.13887 13.0818C3.94327 12.8862 3.86515 12.6046 3.93558 12.3385ZM14.8658 16.4306H3.91205C3.48171 16.4306 3.12964 16.0785 3.12964 15.6482C3.12964 15.2179 3.48171 14.8658 3.91205 14.8658H14.8658C15.2961 14.8658 15.6482 15.2179 15.6482 15.6482C15.6482 16.0785 15.2961 16.4306 14.8658 16.4306Z"
                fill="white"
              />
            </svg>

            <span className="text-white font-urbanist text-[17px] font-semibold">
              Note
            </span>
          </div>
        </div>

        <div className=" mx-[43px] mb-10 bg-white rounded-lg p-8">
          <h1 className="font-urbanist text-[22px] font-medium text-black mb-8">
            Progress Note
          </h1>

          <div className="space-y-4 font-urbanist text-[13px]">
            <p className="text-medical-text-gray font-medium">Subjective:</p>

            <div className="space-y-4">
              <p className="text-medical-text-gray">
                <span className="text-medical-text-dark font-semibold">
                  Chief Complaints:{" "}
                </span>
                The patient reports fluctuating blood sugar levels, particularly
                elevated post-dinner.
              </p>

              <p className="text-medical-text-gray">
                <span className="text-medical-text-dark font-semibold">
                  History of Present Illness (HPI):{" "}
                </span>
                The patient is a known diabetic presenting for follow-up after
                three months. He has experienced some difficulties with glucose
                management, specifically noting readings of 110 to 135 mg/dL in
                the morning and 190 to 210 mg/dL after dinner, especially after
                consuming rice or biryani. He experienced hypoglycemia once,
                with a reading of 68 mg/dL after skipping lunch and walking, but
                responded well to eating a banana. There are no new hospital
                visits since the last appointment.
              </p>

              <div>
                <p className="text-medical-text-dark font-semibold mb-2">
                  Review of Systems (ROS):
                </p>
                <ul className="space-y-1 ml-5 list-disc">
                  <li className="text-medical-text-gray">
                    Constitutional: No significant weight loss or gain report
                    aside from a 2 kg decrease.
                  </li>
                  <li className="text-medical-text-gray">
                    HEENT: No vision changes reported.
                  </li>
                  <li className="text-medical-text-gray">
                    Cardiovascular: No symptoms noted.
                  </li>
                  <li className="text-medical-text-gray">
                    Respiratory: No symptoms noted.
                  </li>
                  <li className="text-medical-text-gray">
                    Gastrointestinal: The patient reports some nausea associated
                    with semaglutide, but it is now infrequent. He notes
                    increased urination with dapagliflozin but reports no
                    infections.
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

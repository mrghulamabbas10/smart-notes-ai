export function BillingInformation() {
  return (
    <div className="relative bg-white rounded-[10px] shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-[#BCE5FF] rounded-[10px] m-[28px]" />

      <div className="relative">
        <div className="flex justify-center pt-[30px] px-[43px] mt-5">
          <div className="bg-medical-blue rounded-t-lg px-6 py-3 flex items-center gap-3">
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6431 0H2.35696C1.05673 0 0 1.09724 0 2.44546V17.1707C0 17.681 0.241086 18.1587 0.645289 18.4497C1.04949 18.7407 1.56462 18.8082 2.02587 18.6281L2.55544 18.4222C2.79733 18.328 3.06493 18.328 3.3068 18.4222L4.39326 18.8441C4.66006 18.9475 4.9397 18.9992 5.22016 18.9992C5.49981 18.9992 5.78028 18.9475 6.04706 18.8441L7.13111 18.423C7.3738 18.3288 7.6406 18.3288 7.88409 18.4239L8.95932 18.8433C9.49372 19.0517 10.0811 19.0525 10.6155 18.8441L11.6988 18.423C11.9423 18.3288 12.2091 18.3288 12.4518 18.4239L12.9701 18.6265C13.4298 18.8049 13.9465 18.7399 14.3523 18.4497C14.7573 18.1595 14.9984 17.681 14.9984 17.1699L15 2.44631C15 1.0981 13.9425 0.000858304 12.643 0.000858304L12.6431 0ZM7.92832 8.44949H7.07087C6.0077 8.44949 5.14223 7.55152 5.14223 6.44843C5.14223 5.42122 5.89521 4.58244 6.8563 4.46989V3.33596C6.8563 2.96742 7.14399 2.66894 7.49919 2.66894C7.85439 2.66894 8.14207 2.96742 8.14207 3.33596V4.45488C8.7287 4.47406 9.28238 4.70919 9.70588 5.13441C9.96143 5.39038 9.96865 5.81311 9.72196 6.07742C9.47526 6.34339 9.06943 6.35089 8.81308 6.09409C8.61218 5.89232 8.34779 5.78144 8.06814 5.78144H7.07006C6.71566 5.78144 6.42717 6.08075 6.42717 6.44846C6.42717 6.81616 6.71566 7.11548 7.07006 7.11548H7.92751C8.99068 7.11548 9.85615 8.01345 9.85615 9.11654C9.85615 10.1438 9.10317 10.9825 8.14207 11.0951V12.229C8.14207 12.5976 7.85439 12.896 7.49919 12.896C7.14399 12.896 6.85631 12.5976 6.85631 12.229V11.1101C6.26967 11.0909 5.71599 10.8558 5.29249 10.4306C5.03695 10.1746 5.02972 9.75186 5.27642 9.48755C5.52312 9.22241 5.93136 9.21575 6.1853 9.47088C6.3862 9.67265 6.65058 9.78353 6.93024 9.78353H7.92832C8.28272 9.78353 8.5712 9.48422 8.5712 9.11651C8.5712 8.74881 8.28272 8.44949 7.92832 8.44949ZM10.929 15.5641H4.07186C3.71666 15.5641 3.42898 15.2656 3.42898 14.8971C3.42898 14.5285 3.71666 14.2301 4.07186 14.2301H10.929C11.2842 14.2301 11.5719 14.5285 11.5719 14.8971C11.5719 15.2656 11.2842 15.5641 10.929 15.5641Z"
                fill="white"
              />
            </svg>
            <span className="text-white font-urbanist text-[17px] font-semibold">
              Billing Information
            </span>
          </div>
        </div>

        <div className="mx-[43px] mb-10 bg-white rounded-lg p-8">
          <div className="space-y-6 font-urbanist text-[13px]">
            <div>
              <h2 className="text-black text-[18px] font-medium mb-4">
                Primary Diagnosis
              </h2>
              <div className="space-y-2">
                <div>
                  <span className="text-medical-text-dark font-semibold">
                    Code:{" "}
                  </span>
                  <span className="inline-block bg-[#A9E8FB] rounded-full px-3 py-0.5 text-medical-text-gray font-medium">
                    E11.65
                  </span>
                </div>
                <p className="text-medical-text-gray">
                  <span className="text-medical-text-dark font-semibold">
                    Description:{" "}
                  </span>
                  Type 2 diabetes mellitus with hyperglycemia
                </p>
                <p className="text-medical-text-gray">
                  <span className="text-medical-text-dark font-semibold">
                    Clinical Justification:{" "}
                  </span>
                  Chief complaint and HPI: follow-up for known type 2 diabetes
                  with fluctuating blood sugars and persistent post-dinner
                  hyperglycemia (post-dinner readings 190–210 mg/dL) and A1c
                  7.4%.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-black text-[18px] font-medium mb-4">
                Secondary Diagnosis
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div>
                    <span className="text-medical-text-dark font-semibold">
                      1.{" "}
                    </span>
                    <span className="inline-block bg-[#A9E8FB] rounded-full px-3 py-0.5 text-medical-text-gray font-medium">
                      E11.42
                    </span>
                  </div>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Description:{" "}
                    </span>
                    Type 2 diabetes mellitus with diabetic polyneuropathy
                  </p>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Clinical Justification:{" "}
                    </span>
                    ROS and exam: pins-and-needles sensation and occasional
                    tingling in toes at night consistent with peripheral
                    diabetic neuropathy.
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-medical-text-dark font-semibold">
                      2.{" "}
                    </span>
                    <span className="inline-block bg-[#A9E8FB] rounded-full px-3 py-0.5 text-medical-text-gray font-medium">
                      E16.2
                    </span>
                  </div>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Description:{" "}
                    </span>
                    Hypoglycemia, unspecified
                  </p>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Clinical Justification:{" "}
                    </span>
                    HPI: one episode of hypoglycemia with a recorded glucose of
                    68 mg/dL after skipping lunch and walking, resolved with
                    eating a banana.
                  </p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-medical-text-dark font-semibold">
                      3.{" "}
                    </span>
                    <span className="inline-block bg-[#A9E8FB] rounded-full px-3 py-0.5 text-medical-text-gray font-medium">
                      R80.9
                    </span>
                  </div>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Description:{" "}
                    </span>
                    Proteinuria, unspecified (albuminuria)
                  </p>
                  <p className="text-medical-text-gray">
                    <span className="text-medical-text-dark font-semibold">
                      Clinical Justification:{" "}
                    </span>
                    Assessment/Labs: urine albumin-to-creatinine ratio improved
                    but remains elevated at 45 mg/g (previously 70 mg/g),
                    indicating persistent albuminuria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

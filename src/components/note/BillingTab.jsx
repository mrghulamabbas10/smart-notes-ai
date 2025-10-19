"use client";

import { useState } from "react";
import {
  Copy,
  Mail,
  Download,
  Printer,
  Edit,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import DiagnosisIcon from "../assets/Diagnosis";

export default function BillingTab() {
  const [billingItems, setBillingItems] = useState([
    {
      code: "99213",
      modifier: "-",
      description:
        "Office or other outpatient visit for the evaluation and management of an established patient, typically 15 minutes",
      amount: "$88.95",
      rvus: "1.3",
      dxPointers: "R52",
    },
  ]);

  return (
    <div className="rounded-[36px] border border-medical-gray-300 bg-white p-6 md:p-8 -translate-y-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-medical-gray text-[11px] font-medium hover:bg-gray-50 transition-colors">
              <span>Other Templates</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Copy className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Mail className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Printer className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-[17px] font-medium text-black">
            Primary Diagnosis
          </h1>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-bold text-medical-gray">
              Code:
            </span>
            <span className="px-3 py-1 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium">
              R52
            </span>
          </div>
          <div className="text-[13px] text-medical-gray leading-relaxed">
            <span className="font-bold">Description:</span> Pain, unspecified
          </div>
          <div className="text-[13px] text-medical-gray leading-relaxed">
            <span className="font-bold">Clinical Justification:</span> Chief
            Complaints: 'The patient reports experiencing serious pain.'
            Assessment: 'the patient is experiencing significant pain' — no
            specific etiology or body site documented, supporting use of
            unspecified pain code R52.
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-[17px] font-medium text-black mb-4">
            Procedures & Services
          </h2>

          <div className="bg-medical-lightgray rounded-[26px] border border-medical-border overflow-hidden">
            <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] font-semibold text-medical-gray uppercase">
              <div className="col-span-2">Code</div>
              <div className="col-span-2">Modifier</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-1 text-center">RVU</div>
              <div className="col-span-1 text-center">MUE</div>
              <div className="col-span-2">Supporting Diagnoses</div>
            </div>

            <div className="border-t border-medical-divider"></div>

            <div className="grid grid-cols-12 gap-2 px-5 py-4 items-center">
              <div className="col-span-2">
                <span className="px-3 py-1.5 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium inline-block">
                  99213
                </span>
              </div>
              <div className="col-span-2 text-[13px] text-medical-gray text-center">
                -
              </div>
              <div className="col-span-4 text-[13px] text-medical-gray">
                Office or other outpatient visit for the evaluation and
                management of an established patient, typically 15 minutes
              </div>
              <div className="col-span-1 text-[13px] text-medical-gray text-center">
                1.3
              </div>
              <div className="col-span-1 text-[13px] text-medical-gray text-center">
                2.0
              </div>
              <div className="col-span-2">
                <span className="px-3 py-1.5 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium inline-block">
                  R52
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-[17px] font-medium text-black mb-2">
            Reimbursement Analysis
          </h2>
          <p className="text-[13px] text-medical-gray mb-4">
            Non-Facility Reimbursement Rates
          </p>

          <div className="bg-medical-lightgray rounded-[26px] border border-medical-border overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-5 py-3 text-[10px] font-semibold text-medical-gray uppercase">
              <div>CPT Code</div>
              <div>Medicate</div>
              <div>Medicaid</div>
              <div>Commercial</div>
            </div>

            <div className="border-t border-medical-divider"></div>

            <div className="grid grid-cols-4 gap-4 px-5 py-4 items-center">
              <div>
                <span className="px-3 py-1.5 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium inline-block">
                  99213
                </span>
              </div>
              <div className="text-[13px] text-medical-gray">$ 88.95</div>
              <div className="text-[13px] text-medical-gray">$ 66.71</div>
              <div className="text-[13px] text-medical-gray">$ 108.52</div>
            </div>
          </div>

          <p className="text-[13px] text-medical-gray mb-4 mt-6">
            Facility Reimbursement Rates
          </p>

          <div className="bg-medical-lightgray rounded-[26px] border border-medical-border overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-5 py-3 text-[10px] font-semibold text-medical-gray uppercase">
              <div>CPT Code</div>
              <div>Medicate</div>
              <div>Medicaid</div>
              <div>Commercial</div>
            </div>

            <div className="border-t border-medical-divider"></div>

            <div className="grid grid-cols-4 gap-4 px-5 py-4 items-center">
              <div>
                <span className="px-3 py-1.5 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium inline-block">
                  99213
                </span>
              </div>
              <div className="text-[13px] text-medical-gray">$ 63.72</div>
              <div className="text-[13px] text-medical-gray">$ 47.79</div>
              <div className="text-[13px] text-medical-gray">$ 77.74</div>
            </div>
          </div>

          <p className="text-[13px] text-medical-gray font-semibold mt-6">
            Total RVUs: 1.30
          </p>
        </div>

        <div className="pt-6">
          <h2 className="text-[17px] font-medium text-black mb-4">
            Billing Claim
          </h2>

          <div className="bg-medical-lightgray rounded-[26px] border border-medical-border p-5">
            <div className="flex items-center gap-2 text-[13px] text-medical-gray mb-4">
              <span>CLM-API-001</span>
              <span className="w-1.5 h-1.5 rounded-full bg-medical-gray"></span>
              <span>Oct 11, 2025</span>
              <span className="w-1.5 h-1.5 rounded-full bg-medical-gray"></span>
              <span>$115.64</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <button className="px-4 py-2 rounded-full bg-medical-blue text-white text-[10px] font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors">
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 fill-white"
                    viewBox="0 0 16 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.74359 0.821918C4.95056 0.821918 4.30769 1.46589 4.30769 2.26027C4.30769 3.05466 4.95056 3.69863 5.74359 3.69863C5.97017 3.69863 6.15385 3.88262 6.15385 4.10959C6.15385 4.33656 5.97017 4.52055 5.74359 4.52055C4.71216 4.52055 3.84238 3.82732 3.57323 2.88062C2.9496 2.84053 2.38287 3.27668 2.27303 3.9075C2.17108 4.49283 2.49614 5.05459 3.02345 5.27094C3.89204 5.5854 4.51282 6.41871 4.51282 7.39726C4.51282 7.62423 4.32915 7.80822 4.10256 7.80822C3.87598 7.80822 3.69231 7.62423 3.69231 7.39726C3.69231 6.79202 3.31914 6.27411 2.79071 6.06177C2.77292 6.05532 2.75528 6.04864 2.73778 6.04171C2.5873 5.9881 2.42525 5.9589 2.25641 5.9589C1.46339 5.9589 0.820513 6.60288 0.820513 7.39726C0.820513 8.19164 1.46339 8.83562 2.25641 8.83562C2.36667 8.83562 2.47352 8.82325 2.57588 8.79999C2.79684 8.74975 3.01662 8.88847 3.06675 9.10981C3.10935 9.29786 3.01579 9.48503 2.8512 9.5679C2.84041 9.57456 2.82921 9.58077 2.81762 9.58652C2.56874 9.70991 2.35719 9.91249 2.2241 10.1814C1.9016 10.833 2.16753 11.6232 2.81807 11.9462C3.46862 12.2693 4.25742 12.0029 4.57992 11.3513C4.69951 11.1096 4.73807 10.8502 4.70665 10.6021C4.67811 10.3769 4.83721 10.1712 5.06199 10.1426C5.28675 10.1141 5.4921 10.2734 5.52064 10.4986C5.57177 10.9022 5.50859 11.3253 5.31506 11.7163C5.09138 12.1683 4.7296 12.5062 4.30617 12.7041C4.30718 12.7158 4.30769 12.7277 4.30769 12.7397C4.30769 13.5341 4.95056 14.1781 5.74359 14.1781C6.53662 14.1781 7.17949 13.5341 7.17949 12.7397V2.26027C7.17949 1.46589 6.53662 0.821918 5.74359 0.821918ZM3.49303 12.9037C3.57686 14.0754 4.55245 15 5.74359 15C6.98976 15 8 13.988 8 12.7397V12.226H9.29024C9.46675 12.8202 10.0162 13.2534 10.6667 13.2534C11.4597 13.2534 12.1026 12.6095 12.1026 11.8151C12.1026 11.0207 11.4597 10.3767 10.6667 10.3767C10.0162 10.3767 9.46675 10.81 9.29024 11.4041H8V9.45205H11.3641C11.5064 9.45205 11.6444 9.50151 11.7545 9.59199L12.6677 10.3427C12.5686 10.538 12.5128 10.7591 12.5128 10.9932C12.5128 11.7875 13.1557 12.4315 13.9487 12.4315C14.7417 12.4315 15.3846 11.7875 15.3846 10.9932C15.3846 10.1988 14.7417 9.5548 13.9487 9.5548C13.6886 9.5548 13.4447 9.62406 13.2343 9.74521L12.275 8.95662C12.0182 8.74551 11.6963 8.63014 11.3641 8.63014H8V7.39726H13.2225C13.4289 7.93796 13.9518 8.32192 14.5641 8.32192C15.3571 8.32192 16 7.67795 16 6.88356C16 6.08918 15.3571 5.44521 14.5641 5.44521C13.8767 5.44521 13.3021 5.92907 13.1613 6.57534H8V5.34247H9.83157C10.2124 5.34247 10.5776 5.19092 10.8469 4.92117L11.4875 4.27952C11.6739 4.36821 11.8825 4.41781 12.1026 4.41781C12.8956 4.41781 13.5385 3.77384 13.5385 2.97945C13.5385 2.18507 12.8956 1.5411 12.1026 1.5411C11.3095 1.5411 10.6667 2.18507 10.6667 2.97945C10.6667 3.25403 10.7435 3.51066 10.8768 3.72892L10.2667 4.33999C10.1513 4.4556 9.99479 4.52055 9.83157 4.52055H8V2.26027C8 1.01196 6.98976 0 5.74359 0C4.56613 0 3.59932 0.903413 3.49627 2.05603C2.51186 2.05436 1.63965 2.76177 1.46471 3.76625C1.37506 4.28098 1.484 4.78422 1.73619 5.19736C0.740798 5.43265 0 6.32829 0 7.39726C0 8.42854 0.689483 9.2985 1.63188 9.56984C1.57953 9.64773 1.53171 9.72997 1.48897 9.81631C0.96519 10.8747 1.39708 12.158 2.45362 12.6826C2.78798 12.8487 3.14482 12.9189 3.49303 12.9037Z"
                    />
                  </svg>
                </div>
                Billing Items
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-medical-gray text-[10px] font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200/30 flex items-center justify-center">
                  <DiagnosisIcon />
                </div>
                Diagnosis
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-medical-gray text-[10px] font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200/30 flex items-center justify-center">
                  <DiagnosisIcon />
                </div>
                Overview
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-medical-gray text-[10px] font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200/30 flex items-center justify-center">
                  <DiagnosisIcon />
                </div>
                Insurance
              </button>
              <button className="px-4 py-2 rounded-full border border-gray-300 text-medical-gray text-[10px] font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200/30 flex items-center justify-center">
                  <DiagnosisIcon />
                </div>
                Payment
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-black/70 mb-2">
                    CPT Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 99213"
                    className="w-full px-4 py-2.5 rounded-full border border-black/6 bg-white text-[13px] text-black/40 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-black/70 mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Service Description"
                    className="w-full px-4 py-2.5 rounded-full border border-black/6 bg-white text-[13px] text-black/40 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-black/70 mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 rounded-full border border-black/6 bg-white text-[13px] text-black/40 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-black/70 mb-2">
                    RVUs
                  </label>
                  <input
                    type="text"
                    placeholder="1"
                    className="w-full px-4 py-2.5 rounded-full border border-black/6 bg-white text-[13px] text-black/40 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-black/70 mb-2">
                    Modifier
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 25"
                    className="w-full px-4 py-2.5 rounded-full border border-black/6 bg-white text-[13px] text-black/40 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-black/70 mb-2">
                  DX Pointers
                </label>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-black/6 bg-white"></div>
                  <span className="text-[13px] text-gray-600/70">1: R52</span>
                </div>
              </div>

              <button className="w-full md:w-auto px-8 py-3 rounded-full bg-medical-blue text-white text-[15px] font-semibold hover:bg-opacity-90 transition-colors border border-black/10">
                + Add Billing Item
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-[17px] font-medium text-black mb-4">
            Billing Items
          </h2>

          <div className="bg-medical-lightgray rounded-[26px] border border-medical-border overflow-hidden">
            <div className="grid grid-cols-12 gap-2 px-5 py-3 text-[10px] font-semibold text-medical-gray uppercase">
              <div className="col-span-2">CPT Code</div>
              <div className="col-span-2">Modifier</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-1">RVUs</div>
              <div className="col-span-1">DX Poi</div>
            </div>

            <div className="border-t border-medical-divider"></div>

            <div className="grid grid-cols-12 gap-2 px-5 py-4 items-center">
              <div className="col-span-2">
                <span className="px-3 py-1.5 rounded-full bg-medical-light-blue border border-medical-border text-medical-blue text-[13px] font-medium inline-block">
                  99213
                </span>
              </div>
              <div className="col-span-2 text-[13px] text-medical-gray">-</div>
              <div className="col-span-4 text-[13px] text-medical-gray">
                Office or other outpatient visit for the evaluation and
                management of an established patient, typically 15 minutes
              </div>
              <div className="col-span-2 text-[13px] text-medical-gray">
                $88.95
              </div>
              <div className="col-span-1 text-[13px] text-medical-gray">
                1.3
              </div>
              <div className="col-span-1 text-[13px] text-medical-gray">
                R52
              </div>
            </div>

            <div className="bg-medical-light-blue border-t border-medical-border px-5 py-3">
              <div className="flex items-center justify-between">
                <span className="text-[15px] text-medical-gray font-medium">
                  Total Amount
                </span>
                <span className="text-[15px] text-medical-blue font-bold">
                  $115.64
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

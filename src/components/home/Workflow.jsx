import CheckGreenIcon from "../assets/check-green-icon";
import DateIcon from "../assets/date";
import FileIcon from "../assets/file";
import UpArrow from "../assets/up-arrow";
import UserIcon from "../assets/user";

export default function Workflow() {
  const steps = [
    {
      number: "01",
      title: "Start the Encounter",
      description:
        "Enter the Patient Name and date of Birth and start the Encounter. If you are integrated with the EMR, you can directly pull the Patient from the EMR.",
      icon: "M41.4004 33.3831C40.7475 32.0623 39.6169 31.0301 38.2687 30.5049V37.9929C39.3439 38.5285 40.6059 38.5181 41.707 37.963C42.1847 36.4719 42.0752 34.808 41.4004 33.3831ZM31.8328 38.5285H27.1582C26.6509 40.6852 27.5896 42.8848 29.5083 44C31.4077 42.8781 32.3543 40.6344 31.8328 38.5285ZM34.2164 19.3394H24.798C22.7145 22.1421 21.5053 25.556 21.4151 29.1336V37.8629H37.6095V29.2594C37.5271 25.6326 36.3102 22.1678 34.2164 19.339V19.3394ZM29.5121 34.275C26.4293 34.275 23.9248 31.7452 23.9248 28.6344C23.9248 25.5261 26.4307 22.9965 29.5121 22.9965C32.5911 22.9965 35.0995 25.5263 35.0995 28.6344C35.0995 31.7466 32.591 34.275 29.5121 34.275ZM29.5121 23.6617C26.7963 23.6617 24.5841 25.8912 24.5841 28.6341C24.5841 31.3757 26.7964 33.6091 29.5121 33.6091C32.228 33.6091 34.4402 31.3757 34.4402 28.6341C34.4402 25.8924 32.2292 23.6617 29.5121 23.6617ZM17.6214 33.3871C16.9157 34.8145 16.8076 36.4719 17.3149 37.963C18.3863 38.5195 19.6792 38.5285 20.7569 37.9929V30.505C19.4048 31.0302 18.2782 32.0624 17.6214 33.3871ZM29.5121 15C27.8999 15.9984 26.4963 17.2464 25.3219 18.6738H33.6882C32.519 17.2425 31.1179 15.9945 29.5121 15Z",
      formImage:
        "https://api.builder.io/api/v1/image/assets/TEMP/a03b5fefaa27b10473dd557e200c2876d4c1064d?width=1140",
    },
    {
      number: "02",
      title: "Generate Clinical Notes",
      description:
        "Smartnotes AI listens to the Doctor Patients conversation and Prepare the Note in Real time.",
      icon: "M40.7045 17.85H36.5227V19.9167C36.5227 20.485 36.0523 20.95 35.4773 20.95C34.9023 20.95 34.4318 20.485 34.4318 19.9167V17.85H31.2955V19.9167C31.2955 20.485 30.825 20.95 30.25 20.95C29.675 20.95 29.2045 20.485 29.2045 19.9167V17.85H26.0682V19.9167C26.0682 20.485 25.5977 20.95 25.0227 20.95C24.4477 20.95 23.9773 20.485 23.9773 19.9167V17.85H19.7955C19.2204 17.85 18.75 18.315 18.75 18.8833V41.6167C18.75 43.9003 20.6214 45.75 22.9318 45.75H37.5682C39.8786 45.75 41.75 43.9003 41.75 41.6167V18.8833C41.75 18.315 41.2796 17.85 40.7045 17.85ZM31.2955 38.5167H25.0227C24.4477 38.5167 23.9773 38.0517 23.9773 37.4833C23.9773 36.915 24.4477 36.45 25.0227 36.45H31.2955C31.8705 36.45 32.3409 36.915 32.3409 37.4833C32.3409 38.0517 31.8705 38.5167 31.2955 38.5167ZM35.4773 33.35H25.0227C24.4477 33.35 23.9773 32.885 23.9773 32.3167C23.9773 31.7483 24.4477 31.2833 25.0227 31.2833H35.4773C36.0523 31.2833 36.5227 31.7483 36.5227 32.3167C36.5227 32.885 36.0523 33.35 35.4773 33.35ZM35.4773 28.1833H25.0227C24.4477 28.1833 23.9773 27.7183 23.9773 27.15C23.9773 26.5816 24.4477 26.1167 25.0227 26.1167H35.4773C36.0523 26.1167 36.5227 26.5816 36.5227 27.15C36.5227 27.7183 36.0523 28.1833 35.4773 28.1833Z",
      notePreview: true,
    },
    {
      number: "03",
      title: "Note Generated & Push to EMR",
      description:
        "After the encounter, SmartNotes AI auto-generates notes, codes, and summaries. Review and push to EMR done.",
      icon: "M39.9993 34.5778V36.8441C39.9993 37.3423 39.5258 37.7499 38.9473 37.7499H31.0517V44.0942C31.0517 44.5923 30.5782 45 29.9997 45C29.4211 45 28.9476 44.5923 28.9476 44.0942V37.7499H21.0521C20.4735 37.7499 20 37.3423 20 36.8441V34.5778C20 32.5296 21.5946 30.79 23.7691 30.2323L24.611 22.7965H23.6842C23.1056 22.7965 22.6321 22.3889 22.6321 21.8907V18.7186C22.6321 17.218 24.0483 16 25.7897 16H34.2103C35.9532 16 37.3679 17.2193 37.3679 18.7186V21.8907C37.3679 22.3889 36.8944 22.7965 36.3158 22.7965H35.389L36.2309 30.2323C38.4041 30.7899 40 32.5296 40 34.5778H39.9993Z",
      showPushButton: true,
    },
  ];

  return (
    <section
      id="workflow"
      className="w-full bg-white py-16 sm:py-24 lg:py-32 md:mb-[20vw] mb-0"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-urbanist text-4xl font-bold leading-tight text-[#120A0B] sm:text-5xl lg:text-[56px]">
            SmartNotes AI Workflow
          </h2>
          <p className="mx-auto max-w-3xl font-satoshi text-lg text-[#454140]">
            Generate and push your clinical notes to EHR/EMR in few clicks, with
            SmartNotes AI
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#F1F5F8] p-8 !sticky top-20 h-[500px] md:mb-0 mb-[16rem]"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute h-14 w-10 bg-[#009DFF] opacity-50 blur-xl"></div>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#009DFF]">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    className="h-10 w-10"
                  >
                    <rect width="60" height="60" rx="14" fill="#009DFF" />
                    <path d={step.icon} fill="white" />
                  </svg>
                </div>
              </div>

              {/* Step Info */}
              <div className="mb-2 font-satoshi text-xs font-medium uppercase tracking-wider text-[#120A0B]/40">
                STEP {step.number}
              </div>
              <h3 className="mb-2 font-satoshi text-xl font-bold text-[#120A0B]">
                {step.title}
              </h3>
              <p className="mb-8 font-satoshi text-sm leading-relaxed text-[#454140]">
                {step.description}
              </p>

              {/* Visual Content */}
              <div>
                {index === 0 && (
                  <div className="">
                    <img
                      src="/images/workflow1.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}

                {index === 1 && step.notePreview && (
                  <div className="">
                    <img
                      src="/images/workflow2.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}

                {index === 2 && step.showPushButton && (
                  <div className="">
                    <img
                      src="/images/workflow3.png"
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

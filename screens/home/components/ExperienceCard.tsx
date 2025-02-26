import React from "react";
import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";

const ExperienceCard = () => {
  return (
    <div className="group">
      <div className="w-full flex justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="max-w-fit ">
            <a
              className="group/company"
              target="_blank"
              rel="noreferrer nofollow ugc"
              title="Your Brand Mate"
              href="/company/yourbrandmate"
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <Image
                  className="rounded-full bg-center bg-no-repeat bg-cover bg-gray-00 flex justify-center items-center object-contain
               hover:opacity-90 transition-opacity border border-primaryBorder flex-grow rounded-full border border-gray-200"
                  src="/python.svg"
                  alt="Your Brand Mate"
                  width={20}
                  height={20}
                />
                <p className="text-gray-1k font-normal text-sm group-hover/company:underline truncate">
                  Your Brand Mate
                </p>
              </div>
            </a>
          </span>
          <a href="/company/yourbrandmate/careers" className="flex">
            <span className="text-xs font-semibold leading-4 px-2 py-0.5 rounded-md h-5 inline-flex items-center justify-center text-center w-fit text-gray-1k bg-gray-200 dark:bg-gray-800  text-xxs">
              HIRING
            </span>
          </a>
        </div>
      </div>
      <div className="pl-8 relative w-full transition-colors duration-200 flex flex-col items-center pb-6">
        <div className="absolute w-0.5 bg-green-300 h-[10px] left-[11px]"></div>
        <div className="w-full flex relative pt-2">
          <div className="w-4 h-3 border-l-2 border-b-2 rounded-bl-lg absolute -left-[21px] border-green-300"></div>
          <div className="w-full flex">
            <div className="group w-full duration-300 ease-in-out rounded-2xl outline-none transition-shadow group b-0 ">
              <input
                id="expandCollapse"
                type="checkbox"
                className="peer sr-only"
                readOnly
              />
              <div
                className="w-full group flex items-center relative text-left cursor-default p-0"
                role="none"
              >
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="w-full flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <p className="text-gray-1k font-semibold text-sm ">
                          Full Stack Engineer Intern
                        </p>
                        <div
                          aria-label="Verified Badge information"
                          role="button"
                        >
                          <div
                            data-tip="true"
                            data-effect="solid"
                            data-for="verified-badge"
                          >
                            <div className="hidden lg:block">
                              <VscVerifiedFilled className="text-green-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-600 font-normal text-xs ">
                        <strong>
                          Jan 2025 - Present (1 m)
                          <span className="font-normal capitalize">
                            • remote
                          </span>
                          <span className="font-normal capitalize">
                            • full-time
                          </span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

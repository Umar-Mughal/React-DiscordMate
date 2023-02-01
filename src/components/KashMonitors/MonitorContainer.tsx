import React, { useState } from "react";
import { useRef } from "react";
import MonitorItem from "./MonitorItem";

interface MonitorContainerTypes {
  clientData: any
  clientIndex: any
  apiData: any
}
export default function MonitorContainer({ clientData, clientIndex, apiData }: MonitorContainerTypes): React.ReactElement {
  const saveRef = useRef(null);
  const clearRef = useRef(null);

  const [showActions, setShowActions] = useState<boolean>(false);

  // get statuses
  let running = 0;
  let pending = 0;
  let stopped = 0;

  clientData.channelIds.forEach((c: any) => {
    switch (c.status) {
      case "RUNNING":
        running++;
        break;
      case "PENDING":
        pending++;
        break;
      case "STOPPED":
        stopped++;
        break;
    }
  });

  return (
    <div className="bg-[#192729] md:p-4 mb-12 row-start-1 px-3 md:px-12 md:py-6 py-4 row-end-4 col-start-1 col-end-12 rounded-xl shadow-md border border-white/20">
      <div className="flex md:flex-row justify-between gap-4 flex-col">
        <div className="flex md:flex-row items-center flex-col">
          <h6 className="text-xl font-black text-white md:mr-6 mb-6 md:mb-0">
            {clientData.name}
          </h6>
          <p className="text-[#16A34A] text-center w-24  mb-4 md:mb-0 w-full bg-[#16A34A]/10 p-2 rounded text-sm md:mr-2 md:ml-2">
            {running} Running
          </p>
          <p className="text-[#d0e62d] text-center w-24  mb-4  md:mb-0 w-full bg-[#d0e62d]/10 p-2 rounded text-sm md:mr-2">
            {pending} Pending
          </p>
          <p className="text-[#EC6660] text-center w-24 mb-4 md:mb-0 bg-[#EC6660]/10 p-2 rounded text-sm">
            {stopped} Stopped
          </p>
        </div>
        <div className="flex md:flex-row items-center gap-4 flex-col">
          {showActions ? (
            <>
              <p
                ref={clearRef}
                className="text-[#EC6660] w-full text-sm bg-[#EC6660]/10 p-2 rounded mr-2"
              >
                Clear
              </p>
              <p
                ref={saveRef}
                className="text-[#16A34A] w-full bg-[#16A34A]/10 p-2 rounded text-sm mr-2"
              >
                Save
              </p>
            </>
          ) : (
            ""
          )}

          <div
            className="flex w-full  md:flex-row items-center px-6 py-2 bg-[#141E21] rounded-lg border border-white/20"
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open(
                "https://billing.stripe.com/p/login/dR66qn4gN0nB7ba5kk"
              )
            }
          >
            <svg
              className="mr-2"
              width={43}
              height={13}
              viewBox="0 0 43 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43 6.71613C43 4.49441 41.5192 2.74082 38.6875 2.74082C35.8454 2.74082 34.1245 4.49403 34.1245 6.69839C34.1245 9.31085 36.155 10.6299 39.0694 10.6299C40.4909 10.6299 41.566 10.3958 42.3781 10.0659V8.33004C41.566 8.62527 40.6343 8.80723 39.4518 8.80723C38.2931 8.80723 37.2659 8.51201 37.1345 7.48817H42.9745C42.9745 7.37491 42.9984 6.92415 42.9984 6.71575L43 6.71613ZM37.1043 5.892C37.1043 4.9112 37.9284 4.50347 38.6812 4.50347C39.4097 4.50347 40.1865 4.9112 40.1865 5.892H37.1043ZM29.52 2.74157C28.3494 2.74157 27.5975 3.14061 27.1788 3.41847L27.0229 2.8805H24.3902V13L27.3762 12.5402L27.3882 10.084C27.8184 10.3098 28.4512 10.6307 29.5028 10.6307C31.6409 10.6307 33.5878 9.38484 33.5878 6.62968C33.5758 4.11273 31.6051 2.74119 29.5143 2.74119L29.52 2.74157ZM28.803 8.72153C28.0984 8.72153 27.6807 8.53919 27.3933 8.31381L27.3814 5.09354C27.6921 4.84173 28.1218 4.66845 28.803 4.66845C29.8899 4.66845 30.6423 5.55374 30.6423 6.69046C30.6423 7.85323 29.9019 8.72153 28.803 8.72153V8.72153ZM20.2818 2.22965L23.2798 1.76152V0L20.2818 0.459823V2.22965ZM20.2818 2.88918H23.2798V10.4831H20.2818V2.88918ZM17.0682 3.53097L16.877 2.88918H14.2968V10.4838H17.2828V5.33666C17.9874 4.66845 19.1819 4.79001 19.5523 4.88552V2.88956C19.1699 2.78536 17.7728 2.59434 17.0677 3.53135L17.0682 3.53097ZM11.0962 1.00157L8.18184 1.45346L8.16989 8.40517C8.16989 9.6895 9.49586 10.6356 11.2635 10.6356C12.2429 10.6356 12.9594 10.5053 13.3537 10.3487V8.58676C12.9713 8.70002 11.0842 9.09868 11.0842 7.81435V4.73791H13.3537V2.88918H11.0832L11.0962 1.00157ZM3.02188 5.08939C3.02188 4.75075 3.40429 4.62126 4.03714 4.62126C5.07015 4.63725 6.08395 4.82722 6.99875 5.17622V3.14099C6.00739 2.85407 5.02799 2.74195 4.03714 2.74195C1.61226 2.74195 0 3.66197 0 5.19811C0 7.5935 4.53906 7.21144 4.53906 8.24472C4.53906 8.64376 4.06104 8.77401 3.39234 8.77401C2.40098 8.77401 1.13476 8.47879 0.131454 8.07937V10.1444C1.24232 10.4917 2.36565 10.6352 3.39234 10.6352C5.87698 10.6352 7.58536 9.74122 7.58536 8.18772C7.57341 5.60169 3.0224 6.06151 3.0224 5.08939H3.02188Z"
                fill="#4AA36F"
              />
            </svg>
            <p className="text-white">Billing</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-[#141E21] p-6 md:my-12 my-4 gap-4 flex flex-col">
        {clientData.channelIds.map((channelData: any, channelIndex: number) => {
          return (
            <MonitorItem
              clearRef={clearRef}
              saveRef={saveRef}
              setShowActions={setShowActions}
              apiData={apiData}
              channelIndex={channelIndex}
              clientIndex={clientIndex}
              key={channelIndex}
            />
          );
        })}
      </div>
    </div>
  );
}

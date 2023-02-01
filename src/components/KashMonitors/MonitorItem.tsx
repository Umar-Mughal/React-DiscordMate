import React from "react";
import { useEffect } from "react";
import { useState, useImperativeHandle } from "react";
import Modal from "./Modal";
import axios from "axios";

interface MonitorItemTypes {
  clientIndex: number,
  channelIndex:number,
  apiData: any,
  saveRef: any,
  clearRef: any,
  setShowActions: (a: boolean) => void,
}

export default function MonitorItem({
  clientIndex,
  channelIndex,
  apiData,
  saveRef,
  clearRef,
  setShowActions,
}: MonitorItemTypes): React.ReactElement {
  const channelInfo = apiData.clients[clientIndex].channelIds[channelIndex];
  const clientData = apiData.clients[clientIndex];
  const [isSku, setIsSku] = useState(true);
  const [isKw, setIsKw] = useState(false);
  const [isPositive, setIsPositive] = useState(true);
  const [isNegative, setIsNegative] = useState(false);
  const [textField, setTextField] = useState("");
  const [positiveKeyWords, setPositiveKeyWords] = useState([
    ...channelInfo.filter.kws.positive,
  ]);
  const [negativeKeyWords, setNegativeKeyWords] = useState([
    ...channelInfo.filter.kws.negative,
  ]);
  const [positiveSku, setPositiveSku] = useState([
    ...channelInfo.filter.skus.positive,
  ]);
  const [negativeSku, setNegativeSku] = useState([
    ...channelInfo.filter.skus.negative,
  ]);
  const [region, setRegion] = useState(channelInfo.marketplace);
  const [channel, setChannel] = useState(channelInfo.channelType);
  const [product, setProduct] = useState(channelInfo.productType);

  const [form, setForm] = useState({
    webhook: channelInfo.webhook,
    unfiltered: channelInfo.filter.unfiltered,
  });

  const handleDeletePositiveSku = (item: any) => {
    let arr = positiveSku.filter((val) => val !== item);
    setShowActions(true);
    setPositiveSku(arr);
  };

  const handleDeletePositiveKw = (item: any) => {
    let arr = positiveKeyWords.filter((val) => val !== item);
    setShowActions(true);
    setPositiveKeyWords(arr);
  };
  const handleDeleteNegativeSku = (item: any) => {
    let arr = negativeSku.filter((val) => val !== item);
    setShowActions(true);
    setNegativeSku(arr);
  };

  const handleDeleteNegativeKw = (item: any) => {
    let arr = negativeKeyWords.filter((val) => val !== item);
    setShowActions(true);
    setNegativeKeyWords(arr);
  };

  const ToggleClass = () => {
    setShowActions(true);
    setIsSku(!isSku);
    setIsKw(!isKw);
  };

  const ToggleSetter = () => {
    setShowActions(true);
    setIsPositive(!isPositive);
    setIsNegative(!isNegative);
  };

  const updateData = () => {
    setShowActions(true);

    if (isPositive && isSku) {
      setPositiveSku([...positiveSku, textField]);
    }

    if (isPositive && isKw) {
      setPositiveKeyWords([...positiveKeyWords, textField]);
    }

    if (isNegative && isSku) {
      setNegativeSku([...negativeSku, textField]);
    }

    if (isNegative && isKw) {
      setNegativeKeyWords([...negativeKeyWords, textField]);
    }
  };

  const handleChange = (e: any) => {
    setShowActions(true);
    if (e.target.type == "checkbox") {
      // @ts-ignore
      setForm({ ...form, [e.target.name]: !form[e.target.name] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const updateAPI = () => {
      // update channelInfo object
      apiData.clients[clientIndex].channelIds[channelIndex] = {
        ...channelInfo,
        webhook: form.webhook,
        productType: product,
        channelType: channel,
        marketplace: region,
        merchGroup: region,
        filter: {
          isLaunch: [true, false],
          isOOS: [false],
          isPSTD: [true, false],
          unfiltered: form.unfiltered,
          skus: {
            positive: [...positiveSku],
            negative: [...negativeSku],
          },
          kws: {
            positive: [...positiveKeyWords],
            negative: [...negativeKeyWords],
          },
        },
      };

      fetch("https://ksh.dev/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ client: apiData.clients[clientIndex] }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.body && res.body.updated) {
            // good response
            setShowActions(false);
          } else {
            throw "Invalid response";
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Error saving");
        });
    };

    const clearFields = () => {
      fetch("https://ksh.dev/load")
        .then((res) => res.json())
        .then((res) => {
          if (res.url.includes("discord")) {
            window.open(res.url);
          } else if (res.body && res.body.clients) {
            const channelInfo =
              res.body.clients[clientIndex].channelIds[channelIndex];
            setForm({
              webhook: channelInfo.webhook,
              unfiltered: channelInfo.filter.unfiltered,
            });
            setProduct(channelInfo.productType);
            setChannel(channelInfo.channelType);
            setRegion(channelInfo.marketplace);
            setNegativeSku(channelInfo.filter.skus.negative);
            setPositiveSku(channelInfo.filter.skus.positive);
            setNegativeKeyWords(channelInfo.filter.kws.negative);
            setPositiveKeyWords(channelInfo.filter.kws.positive);
            setShowActions(false);
          } else {
            throw "Invalid response";
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Error clearing fields");
        });
    };

    if (saveRef && saveRef.current)
      saveRef.current.addEventListener("click", updateAPI, false);

    if (clearRef && clearRef.current)
      clearRef.current.addEventListener("click", clearFields, false);

    return () => {
      if (saveRef && saveRef.current)
        saveRef.current.removeEventListener("click", updateAPI, false);
      if (clearRef && clearRef.current)
        clearRef.current.removeEventListener("click", clearFields, false);
    };
  }, [
    form,
    product,
    channel,
    region,
    positiveSku,
    negativeSku,
    positiveKeyWords,
    negativeKeyWords,
  ]);

  // get color for status
  let statusTextColor = "";
  let statusBgColor = "";
  switch (channelInfo.status) {
    case "RUNNING":
      statusTextColor = "1BA34D";
      statusBgColor = "16A34A";
      break;
    case "PENDING":
      statusTextColor = "d0e62d";
      statusBgColor = "d0e62d";
      break;
    case "STOPPED":
      statusTextColor = "EC6660";
      statusBgColor = "EC6660";
      break;
  }

  return (
    <div className="collapse border border-white/10  rounded-xl relative">
      <input
        type="checkbox"
        className="peer z-10 relative h-[30px]  w-[100%] md:w-[90px] top-[80%] md:top-[40%]  lg:right-[30px] lg:left-[90%] bottom-0"
      />
      <div className="collapse-title pr-0 pl-0">
        <div className="flex md:flex-row flex-col gap-4 justify-between items-center px-2">
          <div className="form-control md:ml-24">
            <input type="checkbox" className="checkbox checkbox-success z-20" />
          </div>
          <h6 className="text-md w-full text-center font-medium text-white">
            {channelInfo["_id"].slice(0, 6).toUpperCase()}
          </h6>
          <h6 className="text-md w-full text-center font-medium text-white">
            MONITOR
          </h6>
          <h6 className="text-md w-full text-center font-medium text-white">
            NIKE-US
          </h6>
          <h6 className="text-md w-full text-center font-medium text-white">
            {product}
          </h6>
          <h6
            className={`text-md w-full text-center font-medium text-[#${statusTextColor}] bg-[#${statusBgColor}]/10 p-2 md:w-36 rounded`}
          >
            {channelInfo.status}
          </h6>
          <svg
            width={18}
            height={9}
            className="w-full"
            viewBox="0 0 18 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66748 8.5975C7.96748 8.5975 7.26748 8.3275 6.73748 7.7975L0.2175 1.2775C-0.0725 0.987499 -0.0725 0.5075 0.2175 0.2175C0.5075 -0.0725 0.9875 -0.0725 1.2775 0.2175L7.79748 6.7375C8.27748 7.2175 9.05748 7.2175 9.53748 6.7375L16.0575 0.2175C16.3475 -0.0725 16.8275 -0.0725 17.1175 0.2175C17.4075 0.5075 17.4075 0.987499 17.1175 1.2775L10.5975 7.7975C10.0675 8.3275 9.36748 8.5975 8.66748 8.5975Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="collapse-content w-[85%]  mx-auto ">
        <div className="flex flex-col  py-12">
          <div className="flex flex-col md:flex-row  items-center gap-7 ">
            <select
              onChange={(e) => setRegion(e.target.value)}
              value={region}
              defaultValue="select"
              className="select w-full max-w-none bg-white/0 border border-white/10 md:w-[155px]  max-w-xs"
            >
              <option disabled value="select">
                Select Region
              </option>
              <option>US</option>
              <option>UK</option>
            </select>
            <input
              className=" md:mr-3 w-full bg-white/0 text-sm border-l-0 border-t-0 border-r-0 border  border-b-white/30 text-white/30"
              type="text"
              onChange={handleChange}
              name="webhook"
              value={form.webhook}
              placeholder="Webhook Text Field"
            />
          </div>
          <div className="flex flex-wrap flex-col items-center md:flex-row items-center my-4 gap-7">
            <select
              onChange={(e) => setChannel(e.target.value)}
              value={channel}
              defaultValue="select"
              className="select w-full mmax-w-none bg-white/0 border border-white/10 md:w-[155px]  max-w-xs"
            >
              <option disabled value="select">
                Select Channel
              </option>
              <option>Launch</option>
            </select>
            <input
              value={textField}
              onChange={(e) => setTextField(e.target.value)}
              className=" w-full max-w-none md:max-w-[45%] bg-white/0 text-sm border-l-0 border-t-0 border-r-0 border  border-b-white/30 text-white/30"
              type="text"
              placeholder="Text Field"
            />
            <div
              onClick={ToggleClass}
              className="flex w-full md:w-max justify-between flex-row items-center bg-[#192729] p-2 rounded-md"
            >
              <div
                className={`px-5 py-2 text-xs  text-white rounded-md ${
                  isSku ? "active" : null
                }`}
              >
                SKU
              </div>
              <div
                className={`px-5 py-2 text-xs  text-white rounded-md ${
                  isSku ? null : "active"
                }`}
              >
                KW
              </div>
            </div>
            {/* <label className="switch">
        <input type="checkbox" id="togBtn" />
        <div className="slider round" />
      </label> */}

            <div
              onClick={ToggleSetter}
              className="flex w-full md:w-min justify-between  flex-row items-center bg-[#192729] p-2 rounded-md"
            >
              <div
                className={`px-5 py-2 text-xs  text-white rounded-md ${
                  isPositive ? "active" : null
                }`}
              >
                +
              </div>
              <div
                className={`px-5 py-2 text-xs  text-white rounded-md ${
                  isPositive ? null : "active"
                }`}
              >
                -
              </div>
            </div>
            <div
              onClick={updateData}
              className="border md:w-max border-white/10 rounded-lg px-4 py-2 text-[#16A34A] hover:bg-[#16A34A] hover:text-white w-full max-w-none text-center"
            >
              ADD
            </div>
          </div>
          <div className="flex md:flex-row w-full flex-col items-center gap-7">
            <select
              onChange={(e) => setProduct(e.target.value)}
              value={product}
              defaultValue="select"
              className="select w-full max-w-none bg-white/0 border border-white/10 md:w-[155px]  max-w-xs"
            >
              <option disabled value="select">
                Select Product
              </option>
              <option value="FOOTWEAR">FOOTWEAR</option>
            </select>
            <div className="flex md:flex-row flex-wrap w-full flex-col items-center gap-2">
              <p className="text-[#16A34A] text-center w-full md:w-24 bg-[#16A34A]/10 p-2 rounded text-sm">
                {form.unfiltered ? "∞" : positiveKeyWords.length} +KWs
              </p>
              <p className="text-white/30 hidden md:block text-sm">|</p>
              <p className="text-[#EC6660] text-center w-full md:w-24 text-sm bg-[#EC6660]/10 p-2 rounded">
                {negativeKeyWords.length} -KWs
              </p>
              <p className="text-white/30 hidden md:block text-sm ">|</p>
              <p className="text-[#16A34A] text-center w-full md:w-24 text-sm bg-[#16A34A]/10 p-2 rounded">
                {form.unfiltered ? "∞" : positiveSku.length} +SKUs
              </p>
              <p className="text-white/30 hidden md:block text-sm ">|</p>
              <p className="text-[#EC6660] text-center w-full md:w-24 text-sm bg-[#EC6660]/10 p-2 rounded">
                {negativeSku.length} -SKUs
              </p>
              <p className="text-white/30 hidden md:block text-sm ">|</p>
              <label
                htmlFor="my-modal-3"
                className=" md:w-24 text-center w-full text-sm text-[#4A5EA3] bg-[#4A5EA3]/10 p-2 rounded "
              >
                View All
              </label>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    checked={form.unfiltered}
                    onChange={handleChange}
                    name="unfiltered"
                    type="checkbox"
                    className="checkbox mr-2"
                  />
                  <span className="label-text">Unfiltered</span>
                </label>
              </div>

              <Modal
                handleDeleteNegativeSku={(item: any) =>
                  handleDeleteNegativeSku(item)
                }
                handleDeleteNegativeKw={(item: any) => handleDeleteNegativeKw(item)}
                handleDeletePositiveKw={(item: any) => handleDeletePositiveKw(item)}
                handleDeletePositiveSku={(item: any) =>
                  handleDeletePositiveSku(item)
                }
                positiveKeyWords={positiveKeyWords}
                negativeKeyWords={negativeKeyWords}
                positiveSku={positiveSku}
                negativeSku={negativeSku}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

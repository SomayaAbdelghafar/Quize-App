import { useRef, useState } from "react";
import SharedModal from "../../Shared/AddModal/AddModal";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import CompletedQuizzes from "../CompletedQuizzes/CompletedQuizzes";
import UpcomingQuizes from "../UpcomingQuizes/UpcomingQuizes";
export default function Quizzes() {
  const codeRef = useRef<HTMLInputElement>(null);
  const [modalState, setModalState] = useState("close");

  const handleClose = () => {
    setModalState("close");
  };

  const showAddModal = () => {
    setModalState("add");
  };

  const copyToClipboard = () => {
    let copyText = codeRef.current?.value;
    let isCopy = copy(copyText || "");
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="newQuiz-Bank sm:p-3 ">
          <div className="flex">
            <button
              onClick={showAddModal}
              className="new-quiz text-center border rounded-xl py-4 px-5 mx-3"
            >
              <i className="fa-solid text-zinc-600 text-6xl fa-file-circle-plus my-2"></i>
              <p className="text-lg font-semibold ">Set up a new quiz</p>
            </button>
            <button className="new-quiz text-center border rounded-xl py-4 px-5 mx-3">
              <i className="fa-solid text-zinc-600 text-6xl fa-building-columns my-2"></i>
              <p className="text-lg font-semibold ">Question Bank</p>
            </button>
          </div>
        </div>

        <div className="upComingQuiz-Completed">
          <UpcomingQuizes />
          <CompletedQuizzes />
        </div>
      </div>

      <SharedModal
        show={modalState === "add"}
        title="Set up a new quiz"
        onSave={() => {
          console.log("hello");
        }}
        onClose={handleClose}
        body={
          <div className="px-6">
            <h3 className="font-semibold text-lg">Details</h3>
            <div className="title mt-2 flex rounded-xl">
              <label
                htmlFor="title"
                className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
              >
                Title:
              </label>
              <input
                id="title"
                className="w-full border-2 px-1 rounded-r-xl"
                type="text"
              />
            </div>

            <div className="details grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 justify-between">
              <div className="mt-3 mr-2 flex rounded-xl">
                <label
                  htmlFor="duration"
                  className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                >
                  Duration{" "}
                  <span className="font-normal text-sm">(in minutes)</span>
                </label>
                <select
                  className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                  id="duration"
                >
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>

              <div className="mt-3 mr-2 flex rounded-xl">
                <label
                  htmlFor="question_numbers"
                  className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                >
                  No. of questions
                </label>
                <select
                  className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                  id="question_numbers"
                >
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>

              <div className="mt-3  flex rounded-xl">
                <label
                  htmlFor="score"
                  className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                >
                  Score per question
                </label>
                <select
                  className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                  id="score"
                >
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>

            <div className="description mt-3 flex items-center rounded-xl">
              <label
                htmlFor="description"
                className="bg-authImage px-4 py-3 font-semibold rounded-l-xl"
              >
                Description:
              </label>
              <textarea
                aria-colspan={30}
                aria-rowspan={2}
                className="w-full resize-none border-2 px-1 rounded-r-xl"
                id="description"
              />
            </div>

            <div className="schedule mt-3 flex rounded-xl">
              <label
                htmlFor="schedule"
                className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
              >
                Schedule:
              </label>
              <input
                id="schedule"
                type="Date"
                placeholder="DD/MM/YY"
                className="border-y-2 px-1 border-gray-300 font-semibold"
              />
              <input
                id="schedule"
                type="time"
                className="border-y-2 border-gray-300 border-r-2 rounded-r-xl px-1 font-semibold"
              />
            </div>

            <div className="selects pb-12 pt-2">
              <div className="details grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 ">
                <div className="mt-3 mr-2 flex rounded-xl">
                  <label
                    htmlFor="difficulty"
                    className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                  >
                    Difficulty level
                  </label>
                  <select
                    className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                    id="difficulty"
                  >
                    <option value="entry">entry</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>

                <div className="mt-3  mr-2 flex rounded-xl">
                  <label
                    htmlFor="category"
                    className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                  >
                    Category type
                  </label>
                  <select
                    className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                    id="category"
                  >
                    <option value="FE">FE</option>
                    <option value="20">20</option>
                  </select>
                </div>

                <div className="mt-3  flex rounded-xl">
                  <label
                    htmlFor="group"
                    className="bg-authImage px-4 py-1 font-semibold rounded-l-xl"
                  >
                    Group name
                  </label>
                  <select
                    className="border-2 font-bold px-3 rounded-r-xl focus:border-gray-300"
                    id="group"
                  >
                    <option value="JSB">JSB</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <SharedModal
        show={modalState === "add1"}
        title=""
        onSave={() => {
          console.log("hello");
        }}
        omitHeader={true}
        onClose={handleClose}
        body={
          <div className="px-8">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <i className="fa-solid text-4xl text-white bg-black py-1 px-2 rounded-full text-bold fa-check"></i>
                <h2 className="font-bold text-xl mt-2">
                  Quiz was successfully created
                </h2>
                <div
                  className={`w-full rounded-lg text-center font-semibold border-black grid grid-cols-3 my-1`}
                >
                  <p className="word bg-authImage py-1 ps-1 border-y border-l border-black rounded-l-2xl">
                    CODE:
                  </p>
                  <input
                    className={`value p-1 text-center px-1 border-y border-black`}
                    ref={codeRef}
                    defaultValue="A123DDS"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="border-y border-r border-black rounded-r-2xl"
                  >
                    <i className="fa-solid fa-copy "></i>
                  </button>
                </div>
                <button onClick={handleClose} className="bg-secondry px-8 rounded-2xl mt-8">
                  Close
                </button>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
}

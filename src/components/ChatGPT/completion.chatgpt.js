import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import TextareaAutosize from "react-textarea-autosize";
import Information from "../Utilities/information";
import { Configuration, OpenAIApi } from "openai";

const Completion = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCompletion = async () => {
    setLoading(true);
    const res = await openai.createCompletion({
      prompt: prompt,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 2048,
    });
    setLoading(false);
    setResult(res.data.choices[0].text);
  };

  return (
    <>
      {/* <div className="mt-10"> */}
      {/* <label className="block mb-2 text-sm md:text-lg font-normal text-dark">
          Give AI Question
        </label> */}
      <div className="flex absolute bottom-0 w-9/12 mb-4 border border-b-4 border-r-4 border-black rounded-lg bg-white shadow-lg">
        <div className="px-4 py-2 rounded-t-lg">
          <div className="flex absolute bottom-0 right-0 pb-5 pr-2 md:pb-5 md:pr-3">
            <button
              type="submit"
              className="items-end py-2.5 px-4 text-xs font-medium text-center text-black rounded-lg focus:ring-4 hover:bg-gray-300"
              //
              // |--------------------------------------------------------------------------
              // | NOTE: Uncomment this attribute 'onClick' to hit API OpenAI
              // |--------------------------------------------------------------------------
              // |
              // |
              //
              // onClick={generateCompletion}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ transform: "rotate(53deg)" }}
              />
            </button>
          </div>
          <TextareaAutosize
            className="bg-white w-full border border-b-4 border-r-4 border-black rounded-sm placeholder-gray-500 focus:ring-0 pr-12 resize-none py-2"
            onChange={(e) => setPrompt(e.target.value)}
            // tabIndex="0"
          />
          {/* <textarea
              className="bg-white w-full border border-b-4 border-r-4 border-black rounded-sm placeholder-gray-500 focus:ring-0 px-0 resize-none"
              tabIndex="0"
              rows="1"
              placeholder
              style={{ overflowY: "hidden" }}
            ></textarea> */}
        </div>
      </div>
      {/* <div className="w-full mb-4 border border-b-4 border-r-4 border-white rounded-lg bg-dark-2 ">
           <div className="px-4 py-2 rounded-t-lg">
            <input
              id="comment"
              // rows="5"
              className="w-full px-0 text-sm md:text-lg focus:ring-0 text-white placeholder-gray-500"
              placeholder="Write a comment..."
              required
              onChange={(e) => setPrompt(e.target.value)}
              //
              // |--------------------------------------------------------------------------
              // | NOTE: Give Comment on the two attributes below to enable input
              // |--------------------------------------------------------------------------
              // |
              // |
              //
              // disabled
              // readOnly
            ></input>
          </div>
          <div className="flex items-end justify-end px-3 py-2 border-t border-gray-600">
            <button
              type="submit"
              className="flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-neutral-900 rounded-lg focus:ring-4 focus:ring-gray-200 hover:bg-neutral-700"
              //
              // |--------------------------------------------------------------------------
              // | NOTE: Uncomment this attribute 'onClick' to hit API OpenAI
              // |--------------------------------------------------------------------------
              // |
              // |
              //
              // onClick={generateCompletion}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div> */}
      {/* </div> */}

      {/* 
      
      |--------------------------------------------------------------------------
      | NOTE: Give Comment on the Component below to remove
      |--------------------------------------------------------------------------
      | 
      |

      */}
      {/* <Information link="/chatgpt.mp4" /> */}

      {loading ? (
        <>
          <div className="flex flex-col items-center">
            <button
              disabled
              type="button"
              className="py-2.5 px-5 mr-2 text-sm font-medium rounded-lg border bg-neutral-900 border-gray-600 text-white items-center"
            >
              <svg
                role="status"
                className="inline mr-2 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Loading...
            </button>
          </div>
        </>
      ) : (
        <>
          {result.length > 0 ? (
            <div>
              <label className="block mb-2 text-sm md:text-lg font-normal text-gray-300">
                Result
              </label>
              <blockquote className="p-4 my-4 border-l-4 border-green-300 dark:border-green-300 bg-dark-2">
                <p className="text-base font-medium leading-relaxed text-gray-300">
                  {result}
                </p>
              </blockquote>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default Completion;

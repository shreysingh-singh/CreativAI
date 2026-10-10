import { Image, Sparkles } from "lucide-react";
import { useState } from "react";

function GenerateImages() {
  const imageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "3D style",
    "Portrait style",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [publish, setPublish] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left Side */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 shadow-md"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00AD25]" />

          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Describe Your Image</p>

        <textarea
          rows={4}
          placeholder="Describe what you want to see in the image.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />

        <p className="mt-4 text-sm font-medium">Style</p>

        <div className="mt-4 flex flex-wrap gap-3 sm:max-w-[90%]">
          {imageStyle.map((item, idx) => (
            <span
              key={idx}
              onClick={() => setSelectedStyle(item)}
              className={`
                inline-flex items-center
                rounded-full
                border
                px-4 py-2
                text-sm font-medium
                cursor-pointer
                transition-all duration-200 ease-in-out
                active:scale-95

                ${
                  selectedStyle === item
                    ? "border-green-600 bg-green-600 text-white shadow-md"
                    : "border-green-200 bg-green-50 text-green-600 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-100 hover:shadow-sm"
                }
              `}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <label  className="relative cursor-pointer ">
            <input type="checkbox" onChange={(e)=> setPublish(e.target.checked)} className="sr-only peer" checked={publish}/>

            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition  "></div>

            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transtion peer-checked:translate-x-4  "></span>
          </label>
          <p className="text-sm">Make this image public</p>
        </div>
        <br />
        <button
          type="submit"
          className="
    mt-3
    w-full
    flex items-center justify-center gap-2
    rounded-xl
    bg-linear-to-r from-[#00AD25] to-[#038d21]
    px-5 py-3
    text-sm font-semibold text-white
    shadow-md shadow-green-500/20
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-lg hover:shadow-green-500/30
    active:translate-y-0
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-60
    cursor-pointer
  "
        >
          <Image className="w-5 h-5" />
          Generated image
        </button>
      </form>

      {/* Right Side */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 min-h-110 max-h-150">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Generated image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image className="w-8 h-8 text-[#acabae]" />
            <p>Describe an image and click "Generate Image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateImages;

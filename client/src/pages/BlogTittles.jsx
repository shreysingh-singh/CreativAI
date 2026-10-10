import { Edit, Hash, Sparkles } from 'lucide-react';
import React, { useState } from 'react'

function BlogTittles() {
  const BlogCategories = [
    "General",
    "Technology",
    "Business",
    "Health",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
  ];

  const [selectedCategories, setSelectedCategories] = useState("General");
  const [input, setInput] = useState("");

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
          <Sparkles className="w-6 text-[#8E37EB]" />

          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">keyword</p>

        <input
          type="text"
          placeholder="The future of artificial intelligence"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          required
        />

        <p className="mt-4 text-sm font-medium">Category</p>

        <div className="mt-4 flex flex-wrap gap-3 sm:max-w-[90%]">
          {BlogCategories.map((item, idx) => (
            <span
              key={idx}
              onClick={() => setSelectedCategories(item)}
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
                  selectedCategories === item
                    ? "border-purple-600 bg-purple-600 text-white shadow-md"
                    : "border-purple-200 bg-purple-50 text-purple-600 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-purple-100 hover:shadow-sm"
                }
              `}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button
          type="submit"
          className="
    mt-6
    w-full
    flex items-center justify-center gap-2
    rounded-xl
    bg-linear-to-r from-[#C341F6] to-[#5240d8]
    px-5 py-3
    text-sm font-semibold text-white
    shadow-md shadow-purple-500/20
    transition-all duration-300 ease-out
    hover:-translate-y-0.5
    hover:shadow-lg hover:shadow-purple-500/30
    active:translate-y-0
    active:scale-[0.98]
    disabled:cursor-not-allowed
    disabled:opacity-60
    cursor-pointer
  "
        >
          <Edit className="w-5 h-5" />
          Generate article
        </button>
      </form>

      {/* Right Side */}
      <div className="w-full max-w-lg p-6 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[568px] max-h-150">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#b806b2]" />
          <h1 className="text-xl font-semibold">Genrate Article</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-9 h-9 text-[#5b4d69]" />
            <p>Enter keywords and click "Generate Titles" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTittles;




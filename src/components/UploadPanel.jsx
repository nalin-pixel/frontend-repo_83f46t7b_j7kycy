import { useState } from "react";
import { Upload, FileText, Link as LinkIcon, Loader2 } from "lucide-react";

export default function UploadPanel({ onProcess }) {
  const [mode, setMode] = useState("file");
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "file" && file) {
      const text = await file.text();
      await onProcess({ sourceType: "file", name: file.name, content: text });
    } else if (mode === "link" && link.trim()) {
      await onProcess({ sourceType: "link", url: link.trim() });
    }

    setLoading(false);
  };

  return (
    <section className="mx-auto max-w-4xl px-6">
      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              mode === "file"
                ? "bg-violet-600 text-white shadow"
                : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setMode("file")}
          >
            Upload Document
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              mode === "link"
                ? "bg-violet-600 text-white shadow"
                : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setMode("link")}
          >
            YouTube Link
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "file" ? (
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50/60 dark:bg-white/5 border-gray-300 dark:border-white/10 hover:bg-gray-100/70 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
                <Upload className="w-8 h-8 text-violet-600 mb-2" />
                <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
                  Drag and drop or click to upload
                </p>
                <p className="text-xs text-gray-500">PDF, DOCX, PPTX, TXT</p>
              </div>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.rtf"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </label>
          ) : (
            <div className="relative">
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 pr-10 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-600 focus:outline-none"
              />
              <LinkIcon className="w-5 h-5 absolute right-3 top-3.5 text-gray-400" />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
              <FileText className="w-4 h-4" />
              <span>
                We’ll extract text from your file or the video transcript for processing.
              </span>
            </div>
            <button
              disabled={loading || (mode === "file" ? !file : !link)}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-white shadow hover:bg-violet-700 disabled:opacity-60"
              type="submit"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" /> Start
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

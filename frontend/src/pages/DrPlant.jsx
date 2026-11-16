import { useState } from "react";

export default function DrPlant() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);

    // TODO: Replace with actual ML model call later
    // For now, simulate a 2-second delay and show fake result
    setTimeout(() => {
      setResult({
        disease: "Leaf Blight",
        confidence: 0.92,
        remedy: "Remove affected leaves and apply fungicide.",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-2">🌱 Dr. Plant</h1>
      <p className="text-gray-600 mb-6">
        Upload a photo of your plant's leaf and I'll diagnose it.
      </p>

      {/* Upload area */}
      <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50">
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-h-64 mx-auto rounded-lg mb-4"
          />
        ) : (
          <div className="text-6xl mb-4">📸</div>
        )}

        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          {preview ? "Change Photo" : "Upload or Take Photo"}
        </label>
      </div>

      {/* Analyze button */}
      {preview && (
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-4 bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "🔍 Analyze Plant"}
        </button>
      )}

      {/* Loading state */}
      {loading && (
        <div className="mt-6 text-center">
          <div className="animate-spin text-4xl">🌿</div>
          <p className="text-gray-500 mt-2">Dr. Plant is thinking...</p>
        </div>
      )}

      {/* Result card */}
      {result && (
        <div className="mt-6 bg-white border border-green-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-green-800 mb-2">
            Diagnosis Result
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">Disease:</span> {result.disease}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Confidence:</span>{" "}
            {(result.confidence * 100).toFixed(0)}%
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Remedy:</span> {result.remedy}
          </p>
        </div>
      )}
    </div>
  );
}
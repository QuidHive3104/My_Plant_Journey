import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

export default function DrPlant() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  
  // AI Model states
  const [model, setModel] = useState(null);
  const [classNames, setClassNames] = useState([]);

  // Load the AI model when the page opens
  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel('/tfjs_model/model.json');
        setModel(loadedModel);
        
        const response = await fetch('/class_names.json');
        const names = await response.json();
        setClassNames(names);
        console.log("AI Model loaded successfully!");
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };
    loadModel();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!image || !model) return;
    setLoading(true);

    try {
      const img = new Image();
      img.src = preview;
      await new Promise((resolve) => { img.onload = resolve; });

      // Resize image to 160x160 (matches our training)
      const tensor = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([160, 160])
        .toFloat()
        .expandDims();
        
      // Scale pixels
      const scaledTensor = tensor.div(127.5).sub(1);

      // Predict
      const predictions = await model.predict(scaledTensor).data();
      
      let highestProb = 0;
      let classIndex = 0;
      for (let i = 0; i < predictions.length; i++) {
        if (predictions[i] > highestProb) {
          highestProb = predictions[i];
          classIndex = i;
        }
      }

      const diseaseName = classNames[classIndex];
      
      setResult({
        disease: diseaseName.replace(/___/g, ' - ').replace(/_/g, ' '),
        confidence: (highestProb * 100).toFixed(2) + "%",
        remedy: highestProb < 0.60 
          ? "Confidence is too low. Please try another photo." 
          : "Apply appropriate treatment based on the disease."
      });

    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-2">Dr. Plant</h1>
      <p className="text-gray-600 mb-6">Upload a photo of your plant's leaf and I'll diagnose it.</p>

      {/* Upload area */}
      <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50 mb-6">
        {preview ? (
          <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg mb-4" />
        ) : (
          <p className="text-gray-500 mb-4">Drag and drop or click to upload</p>
        )}
        
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700"
        />
      </div>

      {/* Analyze Button */}
      <button 
        onClick={handleAnalyze}
        disabled={!image || loading || !model}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400 transition"
      >
        {loading ? "Dr. Plant is thinking..." : !model ? "Loading AI Model..." : "Analyze Leaf"}
      </button>

      {/* Result */}
      {result && (
        <div className="mt-8 p-6 bg-white border border-green-200 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-2">Diagnosis: {result.disease}</h2>
          <p className="text-gray-700 mb-2"><strong>Confidence:</strong> {result.confidence}</p>
          <p className="text-gray-700"><strong>Recommendation:</strong> {result.remedy}</p>
        </div>
      )}
    </div>
  );
}
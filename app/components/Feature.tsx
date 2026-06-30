"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Feature() {
  const [image, setImage] = useState<string | null>(null);
  const [imageMediaType, setImageMediaType] = useState<string>("image/jpeg");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageMediaType(file.type);

    const reader = new FileReader();
    reader.onload = () => {
      // Remove o prefixo "data:image/...;base64," — só queremos os dados puros
      const base64 = (reader.result as string).split(",")[1];
      setImage(base64);
      setResult(""); // limpa resultado anterior
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/analyze-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image, mediaType: imageMediaType }),
      });

      const data = await response.json();
      setResult(data.result ?? "Nenhuma resposta recebida. Tá funcionando ainda não chapa kkkkkkk");
    } catch (err) {
      setResult(`Erro ao analisar a imagem, tá funcionando ainda não chapa kkkkkkk, erro em seguida: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[80%]">
      {/* Preview da imagem */}
      {image && (
        <Image
          src={`data:${imageMediaType};base64,${image}`}
          alt="Preview"
          className="w-full rounded-lg object-cover"
          width={250}
          height={250}
        />
      )}

      {/* Botão de upload */}
      <button
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-cyan-400 rounded-lg p-6 text-center text-sm text-gray-500 cursor-pointer hover:bg-cyan-50 transition"
      >
        📤 Carregar imagem
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      {/* Botão de análise */}
      {image && (
        <button
          onClick={analyzeImage}
          disabled={loading}
          className="bg-cyan-500 text-white py-2 px-4 hover:bg-cyan-600 disabled:opacity-50 transition"
        >
          {loading ? "Analisando..." : "Analisar imagem"}
        </button>
      )}

      {/* Resultado */}
      {result && (
        <div>
          <h3 className="font-bold text-lg mb-2 text-black-color">Prompt gerado</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{result}</p>
        </div>
      )}
    </div>
  );
}
import { useRef, useState } from "react";
import { ImageIcon, LoaderCircle, UploadCloud, X } from "lucide-react";

interface ImageUploadFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  kind: "featured-image" | "brand-logo";
  helpText: string;
  previewClassName?: string;
}

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const BRAND_LOGO_WIDTH = 1200;
const BRAND_LOGO_HEIGHT = 1200;

function getImageDimensions(file: File) {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve({ width: image.naturalWidth, height: image.naturalHeight });
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("This image could not be read."));
    };
    image.src = objectUrl;
  });
}

export function ImageUploadField({
  label,
  value,
  onChange,
  kind,
  helpText,
  previewClassName = "h-48 w-full object-cover",
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const uploadFile = async (file?: File) => {
    if (!file) return;
    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Images must be smaller than 8 MB.");
      return;
    }

    if (kind === "brand-logo") {
      if (!["image/png", "image/webp"].includes(file.type)) {
        setError("Brand logos must be supplied as a PNG or WebP file.");
        return;
      }

      try {
        const dimensions = await getImageDimensions(file);
        if (dimensions.width !== BRAND_LOGO_WIDTH || dimensions.height !== BRAND_LOGO_HEIGHT) {
          setError("Brand logos must be exactly 1200 × 1200 px (square).");
          return;
        }
      } catch (dimensionError) {
        setError(dimensionError instanceof Error ? dimensionError.message : "This image could not be read.");
        return;
      }
    }

    setIsUploading(true);
    try {
      const response = await fetch(`/api/uploads?kind=${kind}&name=${encodeURIComponent(file.name)}`, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const result = await response.json() as { url?: string; message?: string };
      if (!response.ok || !result.url) {
        throw new Error(result.message || "Upload failed.");
      }
      onChange(result.url);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-[15px] text-[var(--slate-dark)]" style={{ fontWeight: 600 }}>
        <ImageIcon size={18} />
        {label}
      </label>

      <div
        className={`relative border-2 border-dashed px-5 py-7 text-center transition-colors ${isDragging ? "border-[#5a6eb4] bg-[#eef1fa]" : "border-gray-300 bg-[#f7f8fc] hover:border-[#5a6eb4]/65"}`}
        onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={(event) => { event.preventDefault(); setIsDragging(false); }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          void uploadFile(event.dataTransfer.files[0]);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          accept={kind === "brand-logo" ? "image/png,image/webp" : "image/png,image/jpeg,image/webp,image/gif"}
          className="sr-only"
          onChange={(event) => void uploadFile(event.target.files?.[0])}
          disabled={isUploading}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={isUploading}
          className="mx-auto flex min-h-20 w-full flex-col items-center justify-center text-[var(--navy-deep)] disabled:cursor-wait"
        >
          {isUploading ? <LoaderCircle size={27} className="mb-3 animate-spin text-[#5a6eb4]" /> : <UploadCloud size={29} className="mb-3 text-[#5a6eb4]" />}
          <span className="text-[14px]" style={{ fontWeight: 650 }}>{isUploading ? "Uploading image" : "Drop an image here or choose a file"}</span>
          <span className="mt-1 text-[12px] text-[var(--slate-medium)]">
            {kind === "brand-logo" ? "Required: 1200 × 1200 px square · PNG or WebP · up to 8 MB" : "PNG, JPG, WebP or GIF up to 8 MB"}
          </span>
        </button>
      </div>

      <div className="my-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />or use a URL<span className="h-px flex-1 bg-gray-200" />
      </div>
      <input
        type="url"
        value={value}
        onChange={(event) => { setError(""); onChange(event.target.value); }}
        className="w-full border border-gray-300 px-4 py-3 text-[15px] focus:border-[var(--electric-blue)] focus:outline-none"
        placeholder="https://example.com/image.jpg"
      />
      <p className="mt-2 text-[12px] leading-[1.5] text-[var(--slate-medium)]">{helpText}</p>

      {error && <p className="mt-2 text-[12px] text-red-600" role="alert">{error}</p>}
      {value && (
        <div className="relative mt-3 border border-gray-200 bg-white p-2">
          <img src={value} alt={`${label} preview`} className={previewClassName} />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center bg-white text-[var(--navy-deep)] shadow-sm hover:bg-gray-100"
            aria-label={`Remove ${label.toLowerCase()}`}
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

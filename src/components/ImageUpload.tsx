import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Upload, X } from "lucide-react";
import { useState } from "react";

interface ImageUploadProps {
  onImageSelect: (image: string | null) => void;
  selectedImage: string | null;
}

export function ImageUpload({ onImageSelect, selectedImage }: ImageUploadProps) {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onImageSelect(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="p-4 border-2 border-dashed shadow-sm" style={{ borderColor: '#2AA85A', backgroundColor: 'rgba(42, 168, 90, 0.05)' }}>
      {!selectedImage ? (
        <label className="cursor-pointer block">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(42, 168, 90, 0.15)' }}>
              <Upload className="w-6 h-6" style={{ color: '#2AA85A' }} />
            </div>
            <p className="text-sm text-gray-700 mb-1">Envie uma imagem para analisar</p>
            <p className="text-xs text-gray-500">Clique para navegar ou arraste e solte</p>
          </div>
        </label>
      ) : (
        <div className="relative">
          <img 
            src={selectedImage} 
            alt="Selecionado" 
            className="w-full h-auto rounded-lg max-h-48 object-cover"
          />
          <Button
            size="sm"
            variant="destructive"
            className="absolute top-2 right-2 rounded-full w-8 h-8 p-0"
            onClick={() => onImageSelect(null)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}

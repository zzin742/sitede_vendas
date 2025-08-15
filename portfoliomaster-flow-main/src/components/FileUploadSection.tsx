import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, CheckCircle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FileUploadSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simular upload
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
        toast({
          title: "Comprovante enviado com sucesso!",
          description: "Iniciaremos imediatamente a criação do seu portfólio.",
        });
      }, 1500);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Envio de Comprovante
          </h2>
          <p className="text-xl text-muted-foreground">
            Após o envio, iniciaremos imediatamente a criação do seu portfólio
          </p>
        </div>

        <Card className="p-8 md:p-12">
          <div className="text-center">
            {!uploadedFile ? (
              <div className="space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-12 h-12 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Faça o upload do seu comprovante
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Aceitos: JPG, PNG, PDF (máx. 10MB)
                  </p>
                </div>

                <Button
                  onClick={handleButtonClick}
                  disabled={isUploading}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5 mr-2" />
                      Selecionar Arquivo
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Comprovante enviado com sucesso!
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                    <FileText className="w-5 h-5" />
                    <span>{uploadedFile.name}</span>
                  </div>
                  <p className="text-green-600 font-medium">
                    ✓ Recebemos seu comprovante e iniciaremos o trabalho imediatamente
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setUploadedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Enviar Outro Arquivo
                </Button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
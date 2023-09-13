import { Button } from './ui/button';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';

import { FileVideo, Upload } from 'lucide-react';

export function VideoInputForm() {
  return (
    <form className="space-y-6">
      <label
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        htmlFor="video"
      >
        <FileVideo className="w-4 h-4" />
        Selecione um vídeo
      </label>

      <input className="sr-only" type="file" id="video" accept="video/mp4" />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">
          Prompt de transcrição
        </Label>
        <Textarea
          className="h-20 leading-relaxed resize-none"
          id="transcription_prompt"
          placeholder="Inclua palavras-chave mencionadas no video separadas por vírgula (,)"
        />
      </div>

      <Button type="submit" className="w-full">
        Carregar vídeo
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  )
}

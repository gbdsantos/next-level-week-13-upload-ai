import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';

import { Github } from 'lucide-react';

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com ❤️ por Guilherme Bezerra no NLW da Rocketseat
          </span>

          <Separator className="h-6" orientation="vertical" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}

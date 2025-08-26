/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */

import { ExternalLink, Lightbulb, Target, TrendingUp } from 'lucide-react'
import { Separator } from '@/Components/ui/separator'
import type { ProjectBody } from '@/types'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function DetailsDialog({ name, more }: { name: string; more: ProjectBody['more'] }) {
  return (
    <Dialog>
      <DialogTrigger className="self-start">
        <Button variant="outline" className="text-lg cursor-pointer">
          <ExternalLink size={16} className="mr-2" />
          Saiba mais
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl 2xl:min-w-5xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-left pr-4">{name}</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Informações do Projeto */}
          {/* Contexto */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Target className="text-primary" size={20} />
              <h3 className="font-semibold text-lg">Contexto do Projeto</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-7">{more.context}</p>
          </div>

          <Separator />

          {/* Desafios */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lightbulb className="text-amber-500" size={20} />
              <h3 className="font-semibold text-lg">Principais Desafios</h3>
            </div>
            <div className="space-y-4 pl-7">
              {more.challenges.map((challenge, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Desafio:</strong> {challenge.question}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>✅ Solução Implementada:</strong> {challenge.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Resultados */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-green-600" size={20} />
              <h3 className="font-semibold text-lg">Resultados Alcançados</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-7">{more.results}</p>
          </div>

          {/* Tecnologias */}
          {more.technologies && more.technologies.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {more.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

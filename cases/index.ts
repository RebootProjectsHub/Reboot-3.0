import type { CaseStudy } from "@/cases/types"
import { caseStudy as vedPaDora } from "@/cases/ved-pa-dora"
import { caseStudy as obos } from "@/cases/obos"
import { caseStudy as hoeghEvi } from "@/cases/hoegh-evi"
import { caseStudy as dittApotek } from "@/cases/ditt-apotek-opera"
import { caseStudy as runnersWorld } from "@/cases/runners-world"
import { caseStudy as osloCityLegesenter } from "@/cases/oslo-city-legesenter"
import { caseStudy as messecup } from "@/cases/messecup"
import { caseStudy as madGoats } from "@/cases/mad-goats"
import { caseStudy as fjellveterinaeren } from "@/cases/fjellveterinaeren"
import { caseStudy as abilityMedia } from "@/cases/ability-media"

/** All imported case studies. Add new cases to this list. */
export const cases: CaseStudy[] = [
  vedPaDora,
  obos,
  hoeghEvi,
  dittApotek,
  runnersWorld,
  osloCityLegesenter,
  messecup,
  madGoats,
  fjellveterinaeren,
  abilityMedia,
]

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

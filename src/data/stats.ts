import { Award, Building2, Layers, Users, type LucideIcon } from 'lucide-react'

/**
 * Icons map 1:1 (by index) to translations.stats.items.
 *
 * VERIFICATION NOTE: the +250 projects and +100 clients figures are design
 * placeholders — they are not confirmed against any company document in
 * this repository. The "6 integrated services" figure matches the 6 items
 * in translations.services, and "+7 years" is consistent with the studio's
 * stated 2019 founding date, but neither has been verified against a
 * company source either. Replace all four with approved figures before
 * launch.
 */
export const statIcons: LucideIcon[] = [Building2, Users, Layers, Award]

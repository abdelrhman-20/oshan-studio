import { Box, ClipboardCheck, FileText, Hammer, PenTool, Sofa, type LucideIcon } from 'lucide-react'
import { stockImages } from './stockImages'

/**
 * Icons and images map 1:1 (by index) to translations.services.items — keep
 * order in sync. Images are illustrative stock photos (see stockImages.ts),
 * NOT OSHAN STUDIO work; swap them there when real media is supplied.
 */
export const serviceIcons: LucideIcon[] = [PenTool, Box, FileText, Hammer, Sofa, ClipboardCheck]

export const serviceImages: { src: string; focal: string }[] = [
  { src: stockImages.serviceInterior.src, focal: '50% 55%' },
  { src: stockImages.service3d.src, focal: '50% 40%' },
  { src: stockImages.serviceDrawings.src, focal: '50% 40%' },
  { src: stockImages.serviceFitout.src, focal: '50% 50%' },
  { src: stockImages.serviceFurniture.src, focal: '60% 55%' },
  { src: stockImages.serviceManagement.src, focal: '50% 35%' },
]

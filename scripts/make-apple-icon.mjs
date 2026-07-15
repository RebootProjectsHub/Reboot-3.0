import sharp from "sharp"
import { writeFileSync } from "node:fs"

// The "R" glyph path is taken from the Reboot wordmark (public/Reboot3.svg),
// so the icon uses the exact brand letterform. Brand colours:
// background #4a1522 (maroon), foreground #f4ece3 (cream).
const R_PATH =
  "M8.98,142.7V18.58h52.85c6.89,0,13.17.54,18.81,1.6,5.64,1.07,10.63,2.63,14.95,4.7,4.33,2.07,7.99,4.58,11,7.52,3.01,2.95,5.27,6.33,6.77,10.16,1.5,3.83,2.26,8.06,2.26,12.69,0,4.39-.69,8.34-2.07,11.85-1.38,3.51-3.48,6.58-6.3,9.22-2.82,2.63-6.37,4.77-10.63,6.39-4.26,1.63-9.22,2.82-14.86,3.57v2.82c7.15.75,12.69,2.35,16.64,4.8,3.95,2.45,6.99,5.67,9.12,9.69,2.13,4.01,4.01,8.84,5.64,14.48l7.15,24.64h-33.66l-5.45-22.76c-1.13-5.01-2.67-8.9-4.61-11.66-1.95-2.76-4.42-4.67-7.43-5.74-3.01-1.06-6.77-1.6-11.28-1.6h-18.62v41.75H8.98ZM39.26,78.57h20.5c7.65,0,13.6-1.5,17.87-4.51,4.26-3.01,6.39-7.71,6.39-14.1s-1.95-10.91-5.83-13.92c-3.89-3.01-9.78-4.51-17.68-4.51h-21.25v37.05Z"

// Full-bleed square (iOS masks/rounds apple-touch-icons itself).
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="#4a1522"/>
  <svg x="52" y="40" width="76" height="100" viewBox="8 7 116 137" preserveAspectRatio="xMidYMid meet">
    <path fill="#f4ece3" d="${R_PATH}"/>
  </svg>
</svg>`

writeFileSync("scripts/apple-icon-preview.svg", svg)
await sharp(Buffer.from(svg)).png().toFile("public/apple-icon.png")
const m = await sharp("public/apple-icon.png").metadata()
console.log("wrote public/apple-icon.png", m.width + "x" + m.height)

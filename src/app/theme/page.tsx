'use client';

import { Button } from "@/components/Button/Button";
import Color from "color";
import { useMemo, useState } from "react";

export default function Home() {

  const [color, colorSet] = useState<Color>()

  const shades = useMemo(() => {
    if (!color) {
      return []
    }

    const shades = []
    const steps = 21
    // set the initial color as 0.05 opacity of initial color
    // so if 0 is #000000 then 0.05 is #0F0F0F
    for (let i = 0; i < steps; i++) {
      // if its the first half of steps then darken the color
      // if its the second half of steps then lighten the color
      const shade = i < steps / 2 ? color.darken(i / steps) : color.lighten((i - steps / 2) / steps)

      shades.push(shade)
    }

    // order the shades from dark to light
    shades.sort((a, b) => a.luminosity() - b.luminosity())
    return shades
  }, [color])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-1">
      <div className="my-4">
        <input
          type="color"
          onChange={(e) => {
            try {
              colorSet(Color(e.target.value))
            } catch (error) {
              colorSet(Color("#000000"))
            }
          }}
        />
      </div>

      <pre>
        <code>
          {shades.map((shade, i) => {
            return `'primary-${i * 5}': '${shade.hex().toLowerCase()}',\n`
          })}
        </code>
      </pre>

      <div className="flex gap-1">
        {shades.map((shade, i) => {
          const hex = shade.hex().toLowerCase()
          const main = color?.hex().toLowerCase() === hex
          return (
            <div key={i} className={main ? 'size-20' : 'size-10'} style={{ backgroundColor: shade.hex() }}></div>
          )
        })}
      </div>
      <div className="flex justify-center items-center min-h-screen gap-1">
        <Button size="lg" variant="contained">Label Text</Button>
        {/* btn btn-lg btn-contained btn-primary */}
        <Button size="md" variant="outlined">Lebel Text</Button>
        <Button variant="text">Lebel Text</Button>
      </div>
    </div>
  )

}

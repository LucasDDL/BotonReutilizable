'use client';

import Color from 'color';
import { useMemo, useState } from 'react';

export default function Home() {
  const [baseColor, setBaseColor] = useState<Color>(Color('#0ea5e9')); // Initial color is Sky 500

  const shades = useMemo(() => {
    if (!baseColor) return [];

    const shades: Record<number, Color> = {};
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    const isDark = baseColor.isDark(); // Check if base color is dark
    const mainShadeIndex = isDark ? 400 : 500; // Main shade is 400 for dark, 500 for light

    steps.forEach(step => {
      if (step < mainShadeIndex) {
        // Lighter shades:
        const factor = (mainShadeIndex - step) / 300;
        shades[step] = isDark 
          ? baseColor.lighten(factor * 1.5) // Lighten more for dark base colors
          : baseColor.lighten(factor);
      } else if (step > mainShadeIndex) {
        // Darker shades:
        const factor = (step - mainShadeIndex) / 300;
        shades[step] = isDark 
          ? baseColor.darken(factor / 3) // Darken less for dark base colors
          : baseColor.darken(factor);
      } else {
        // Main shade:
        shades[step] = baseColor;
      }
    });

    return shades;  }, [baseColor]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-1">
      

      <div className='flex gap-1'>
        {Object.entries(shades).map(([shade, color]) => (
          <div
            key={shade}
            className="flex items-center justify-center w-12 h-12 rounded-md"
            style={{ backgroundColor: color.hex() }}
          >
            {shade}
          </div>
        ))}
      </div>
      <div className="my-4">
        <input
          type="color"
          value={baseColor.hex()}
          onChange={(e) => setBaseColor(Color(e.target.value))}
        />
      </div>
      <pre>
        <code>
          {Object.entries(shades).map(([shade, color]) => (
            `${shade}: '${color.hex().toLowerCase()}',\n`
          ))}
        </code>
      </pre>

      {/* ... (rest of your UI components using the shades) */}
    </div>
  );
}
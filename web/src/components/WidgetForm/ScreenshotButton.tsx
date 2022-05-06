import { Camera, TrashSimple } from "phosphor-react";
import { useState } from "react";
import html2canvas from 'html2canvas';
import { Loading } from "../Loading";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";

interface ScreenShotButtonProps {
  screenshot: string | null;
  setScreenshot: (screenshot: string) => void;
}
export function ScreenShotButton({screenshot, setScreenshot}: ScreenShotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    
    const canvas = await html2canvas(document.querySelector('html')!)
    const bas64image = canvas.toDataURL('image/png')

    setScreenshot(bas64image)

    setIsTakingScreenshot(false)
  }

  function handleDeleteScreenshot() {
    setScreenshot('')
  }

  if(screenshot) {
    return (
      <button 
        type="button"
        onClick={handleDeleteScreenshot}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <TrashSimple />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? (<Loading />) : <Camera className="w-6 h-6"/>}
    </button>
  )
}
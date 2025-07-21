
import DarkVeil from './DarkVeil'

export const VideoBackground = () => {
  return (
    <>
      <div className="video-background">
        <DarkVeil
          hueShift={245}
          noiseIntensity={0.03}
          scanlineIntensity={0.02}
          speed={0.5}
          scanlineFrequency={50}
          warpAmount={0.2}
          resolutionScale={1}
        />
      </div>
      <div className="video-overlay"></div>
    </>
  )
}


export function VideoBackground() {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline poster="/images/marvel_intro_poster.jpg">
          <source src="/videos/marvel_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
    </>
  )
}

import { siSpotify, siApplemusic, siYoutube, siYoutubemusic, siSoundcloud, siInstagram, siFacebook } from 'simple-icons'

const icons = {
  spotify: siSpotify,
  applemusic: siApplemusic,
  youtube: siYoutube,
  youtubemusic: siYoutubemusic,
  soundcloud: siSoundcloud,
  instagram: siInstagram,
  facebook: siFacebook,
}

const BrandIcon = ({ name, className = 'w-5 h-5' }) => {
  const icon = icons[name]
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  )
}

export default BrandIcon

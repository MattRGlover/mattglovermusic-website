// Central place to update links, contact info, and release details.
// Swap the remaining placeholder URLs/emails below for the real ones.

export const streamingLinks = [
  { name: 'Spotify', icon: 'spotify', href: 'https://open.spotify.com/track/4o3GtCOrzOFfCR1CYLQwnc?si=9036e41721fe4c62' },
  { name: 'Apple Music', icon: 'applemusic', href: 'https://music.apple.com/us/song/decorum/6821916187' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/watch?v=ZyXiYtPz9v4' },
]

export const spotifyEmbedUrl = 'https://open.spotify.com/embed/track/4o3GtCOrzOFfCR1CYLQwnc?utm_source=generator&theme=0'

// Matt Glover's Apple Music artist page (not tied to one release):
// https://music.apple.com/us/artist/matt-glover/1783010259

export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/mattglovermusic' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=61570835087411' },
]

export const contactEmail = 'booking@mattglovermusic.com'
export const stonebridgeEmail = 'sbr@mattglovermusic.com'

export const latestRelease = {
  title: 'Decorum',
  cover: '/images/decorum-cover.jpg',
  releaseDate: 'November 12, 2026',
}

export const previousReleases = [
  {
    title: 'Under Control',
    cover: '/images/under-control-cover.jpg',
    releaseDate: 'August 28, 2026',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/2mRr5gnW025eNmN3y04som?utm_source=generator&theme=0',
    links: [
      { name: 'Spotify', icon: 'spotify', href: 'https://open.spotify.com/track/2mRr5gnW025eNmN3y04som' },
      { name: 'Apple Music', icon: 'applemusic', href: 'https://music.apple.com/us/song/under-control/6804153763' },
      { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/watch?v=JzK8VS2OD0I' },
    ],
  },
]

export const credits = {
  songwriters: [{ role: 'Music & Lyrics', name: 'Matt Glover' }],
  performers: [
    { role: 'Lead Vocals', name: 'Matt Glover' },
    { role: 'Guitars', name: 'Justin Weaver' },
    { role: 'Electric Bass', name: 'Jay Gorman' },
    { role: 'Keyboards and Organ', name: 'Garrett Anderson' },
    { role: 'Drums and Percussion', name: 'Gregg Lohman' },
    { role: 'Producer and Mixing Engineer', name: 'Dusty Hough' },
    { role: 'Tracking Engineer', name: 'Kyle Hershman' },
    { role: 'Additional Engineer', name: 'John Hoffman' },
  ],
  studios: [
    { name: 'Watershed Recording Studios', role: 'Live Band Tracking' },
    { name: 'Forty-One Fifteen', role: 'Vocal Sessions' },
  ],
}

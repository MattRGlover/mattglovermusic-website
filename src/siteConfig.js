// Central place to update links, contact info, and release details.
// Swap the remaining placeholder URLs/emails below for the real ones.

export const streamingLinks = [
  { name: 'Spotify', icon: 'spotify', href: 'https://open.spotify.com/track/2mRr5gnW025eNmN3y04som?si=b56917a2c5fa4b20z' },
  { name: 'Apple Music', icon: 'applemusic', href: 'https://music.apple.com/us/song/under-control/6804153763' },
  { name: 'YouTube Music', icon: 'youtubemusic', href: 'https://music.youtube.com/channel/REPLACE_ME' },
]

// Matt Glover's Apple Music artist page (not tied to one release):
// https://music.apple.com/us/artist/matt-glover/1783010259

export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/mattglovermusic' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/profile.php?id=61570835087411' },
]

export const contactEmail = 'booking@mattglovermusic.com'

// No merch site yet — points to a placeholder until one exists.
export const merchLink = 'https://merch.mattglovermusic.com'

export const latestRelease = {
  title: 'Under Control',
  cover: '/images/under-control-cover.jpg',
  releaseDate: 'August 28, 2026',
}

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

export function youtubeEmbedUrl(youtubeId, options = {}) {
  // returns youtube embed URL with options
  let opts = {
    noControls: 'controls=0&amp',
    noInfo: 'showinfo=0'
  }

  let optStr = Object.keys(options).map(opt => opts[opt]).join(';')
  return `https://www.youtube.com/embed/${youtubeId}?${optStr}`
}

export function youtubeThumbnail(youtubeId) {
  // returns the first thumbnail url
  return `https://img.youtube.com/vi/${youtubeId}/0.jpg`
}
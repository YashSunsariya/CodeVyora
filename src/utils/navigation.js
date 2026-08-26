export function scrollToSection(event, sectionId, onComplete) {
  event.preventDefault()
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  onComplete?.()
}

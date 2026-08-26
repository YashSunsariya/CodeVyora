export function navigateToSection(event, navigate, route, sectionId, onComplete) {
  event.preventDefault()
  navigate(route)
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  onComplete?.()
}

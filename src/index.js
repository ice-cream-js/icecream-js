export default function render(appContainer,html,styles) {
  const renderContainer = document.getElementById(appContainer)
  const CSS = `
  <style>
  ${styles}
  </style>
  `
  renderContainer.innerHTML = html + CSS;
}

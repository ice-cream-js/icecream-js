export default function render(appContainer: string,html: string,styles: string) {
    const renderContainer: any = document.getElementById(appContainer)
    const CSS = `
    <style>
    ${styles}
    </style>
    `
    renderContainer.innerHTML = html + CSS;
  }
  

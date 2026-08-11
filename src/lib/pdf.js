import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

/**
 * Render a DOM node to a multi-page A4 PDF and trigger download.
 * Used to export the key findings of a topic.
 */
export async function exportNodeToPdf(node, filename) {
  if (!node) return

  const canvas = await html2canvas(node, {
    scale: 2,
    backgroundColor: '#ffffff',
    useCORS: true,
    logging: false,
  })

  const pdf = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 32

  const imgWidth = pageWidth - margin * 2
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  const imgData = canvas.toDataURL('image/png')

  let heightLeft = imgHeight
  let position = margin

  pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight)
  heightLeft -= pageHeight - margin * 2

  while (heightLeft > 0) {
    pdf.addPage()
    position = margin - (imgHeight - heightLeft)
    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight)
    heightLeft -= pageHeight - margin * 2
  }

  pdf.save(filename)
}

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

document.querySelectorAll('.pdf-card').forEach(async card => {
    const url = card.dataset.pdfSrc;
    const canvas = card.querySelector('canvas');
    const fallback = card.querySelector('.pdf-fallback');
    try {
        const pdf = await pdfjsLib.getDocument(url).promise;
        const page = await pdf.getPage(1);
        const desiredWidth = 320;
        const viewport = page.getViewport({ scale: 1 });
        const scale = desiredWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
    } catch (err) {
        console.warn('Erro ao gerar preview do PDF:', err);
        if (fallback) fallback.style.display = 'block';
    }
});
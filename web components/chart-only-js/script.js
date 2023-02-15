const canvas = document.getElementById('chart');
const ctx = canvas.getContext('2d');
const dpi = window.devicePixelRatio;
ctx.scale(dpi, dpi);

// Define data
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    values: [15, 9, 16, 25, 16, 9, 14],
};

// Set chart dimensions
const width = canvas.width;
const height = canvas.height;
const barWidth = 35;
const barSpacing = 10;
const chartStartX = 40;
const chartStartY = height - 70;
const chartEndX = width - 50;
const chartEndY = 50;
const chartWidth = chartEndX - chartStartX;
const chartHeight = chartStartY - chartEndY;
const maxValue = Math.max(...data.values);

// Draw
ctx.beginPath();
ctx.moveTo(chartStartX, chartStartY);
ctx.lineTo(chartEndX, chartStartY);
ctx.lineTo(chartEndX, chartEndY);
ctx.stroke();

for (let i = 0; i < data.labels.length; i++) {
    const x =
        chartStartX + (barWidth + barSpacing) * i + barSpacing + barWidth / 2;
    ctx.fillText(data.labels[i], x, chartStartY + 20);
}
for (let i = 0; i <= 5; i++) {
    const y = chartStartY - (chartHeight / 5) * i;
    ctx.fillText(((maxValue / 5) * i).toFixed(1), chartStartX - 30, y);
}

// Draw bars
for (let i = 0; i < data.values.length; i++) {
    setTimeout(() => {
        const barHeight = (chartHeight / maxValue) * data.values[i];
        const x = chartStartX + (barWidth + barSpacing) * i + barSpacing;
        const y = chartStartY - barHeight;

        // bar random color
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, y, barWidth, barHeight);
        ctx.fillStyle = '#000';
        ctx.fillText(data.values[i].toFixed(1), x + barWidth / 2, chartStartY + 20);
        ctx.fillText(
            `${data.labels[i]}: ${data.values[i].toFixed(1)}}`,
            x + barWidth / 2,
            chartStartY + 40
        );
        canvas.style.transition = 'all 1s';
    }, i * 400);
}
/**
 * AIRace - Chart Utilities
 * Canvas-based chart rendering
 */

// Radar Chart for Capabilities
function drawRadarChart(canvas, data, options = {}) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    const defaults = {
        labels: Object.keys(data),
        values: Object.values(data),
        maxValue: 100,
        gridColor: 'rgba(255, 255, 255, 0.1)',
        labelColor: 'rgba(255, 255, 255, 0.6)',
        fillColor: 'rgba(0, 212, 255, 0.2)',
        strokeColor: 'rgba(0, 212, 255, 0.8)',
        pointColor: '#00d4ff'
    };

    const config = { ...defaults, ...options };
    const { labels, values, maxValue, gridColor, labelColor, fillColor, strokeColor, pointColor } = config;
    const numPoints = labels.length;
    const angleStep = (2 * Math.PI) / numPoints;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
        const gridRadius = (radius / 5) * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, gridRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Draw grid lines and labels
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // Grid line
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        const labelX = centerX + (radius + 20) * Math.cos(angle);
        const labelY = centerY + (radius + 20) * Math.sin(angle);
        ctx.fillStyle = labelColor;
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labels[i], labelX, labelY);
    }

    // Draw data polygon
    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = values[i] / maxValue;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw data points
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const value = values[i] / maxValue;
        const x = centerX + radius * value * Math.cos(angle);
        const y = centerY + radius * value * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = pointColor;
        ctx.fill();
    }
}

// Line Chart for Stock Prices
function drawLineChart(canvas, data, options = {}) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = { top: 20, right: 20, bottom: 30, left: 50 };

    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const defaults = {
        lineColor: '#00d4ff',
        fillGradient: ['rgba(0, 212, 255, 0.3)', 'rgba(0, 212, 255, 0)'],
        gridColor: 'rgba(255, 255, 255, 0.1)',
        textColor: 'rgba(255, 255, 255, 0.6)'
    };

    const config = { ...defaults, ...options };

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate scales
    const minValue = Math.min(...data) * 0.95;
    const maxValue = Math.max(...data) * 1.05;
    const valueRange = maxValue - minValue;

    const scaleX = chartWidth / (data.length - 1);
    const scaleY = chartHeight / valueRange;

    // Draw grid
    ctx.strokeStyle = config.gridColor;
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        // Y-axis labels
        const value = maxValue - (valueRange / 4) * i;
        ctx.fillStyle = config.textColor;
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.textAlign = 'right';
        ctx.fillText(value.toFixed(0), padding.left - 8, y + 3);
    }

    // Draw gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, config.fillGradient[0]);
    gradient.addColorStop(1, config.fillGradient[1]);

    ctx.beginPath();
    ctx.moveTo(padding.left, height - padding.bottom);

    for (let i = 0; i < data.length; i++) {
        const x = padding.left + i * scaleX;
        const y = height - padding.bottom - (data[i] - minValue) * scaleY;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(padding.left + (data.length - 1) * scaleX, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = padding.left + i * scaleX;
        const y = height - padding.bottom - (data[i] - minValue) * scaleY;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.strokeStyle = config.lineColor;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Bar Chart for Comparisons
function drawBarChart(canvas, labels, values, options = {}) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = { top: 20, right: 20, bottom: 60, left: 50 };

    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    const defaults = {
        barColors: ['#00d4ff', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'],
        gridColor: 'rgba(255, 255, 255, 0.1)',
        textColor: 'rgba(255, 255, 255, 0.6)'
    };

    const config = { ...defaults, ...options };

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate scales
    const maxValue = Math.max(...values) * 1.1;
    const barWidth = chartWidth / labels.length * 0.7;
    const barSpacing = chartWidth / labels.length;

    // Draw grid
    ctx.strokeStyle = config.gridColor;
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }

    // Draw bars
    for (let i = 0; i < labels.length; i++) {
        const x = padding.left + i * barSpacing + (barSpacing - barWidth) / 2;
        const barHeight = (values[i] / maxValue) * chartHeight;
        const y = height - padding.bottom - barHeight;

        // Create gradient for bar
        const gradient = ctx.createLinearGradient(x, y + barHeight, x, y);
        const color = config.barColors[i % config.barColors.length];
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color + '80');

        // Draw bar with rounded top
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Value label on top
        ctx.fillStyle = config.textColor;
        ctx.font = 'bold 11px JetBrains Mono, monospace';
        ctx.textAlign = 'center';
        ctx.fillText(values[i].toFixed(0), x + barWidth / 2, y - 8);

        // X-axis label
        ctx.save();
        ctx.translate(x + barWidth / 2, height - padding.bottom + 10);
        ctx.rotate(-Math.PI / 4);
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(labels[i], 0, 0);
        ctx.restore();
    }
}

// Donut Chart for Market Share
function drawDonutChart(canvas, data, options = {}) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const innerRadius = radius * 0.6;

    const defaults = {
        colors: ['#00d4ff', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1'],
        textColor: '#ffffff'
    };

    const config = { ...defaults, ...options };

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate total and angles
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -Math.PI / 2;

    // Draw segments
    data.forEach((item, index) => {
        const sliceAngle = (item.value / total) * 2 * Math.PI;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
        ctx.closePath();

        ctx.fillStyle = config.colors[index % config.colors.length];
        ctx.fill();

        currentAngle += sliceAngle;
    });

    // Draw center text
    ctx.fillStyle = config.textColor;
    ctx.font = 'bold 24px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(data.length, centerX, centerY - 10);
    ctx.font = '12px Inter, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText('Companies', centerX, centerY + 15);
}

// Progress Ring
function drawProgressRing(canvas, progress, options = {}) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;
    const lineWidth = options.lineWidth || 8;

    const defaults = {
        bgColor: 'rgba(255, 255, 255, 0.1)',
        progressColor: '#00d4ff',
        textColor: '#ffffff'
    };

    const config = { ...defaults, ...options };

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = config.bgColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    // Progress ring
    const progressAngle = (progress / 100) * 2 * Math.PI - Math.PI / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -Math.PI / 2, progressAngle);
    ctx.strokeStyle = config.progressColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Center text
    ctx.fillStyle = config.textColor;
    ctx.font = 'bold 20px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(progress + '%', centerX, centerY);
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        drawRadarChart,
        drawLineChart,
        drawBarChart,
        drawDonutChart,
        drawProgressRing
    };
}

/**
 * AIRace - Utility Functions
 */

// Format large numbers
function formatNumber(num, decimals = 1) {
    if (num === null || num === undefined) return 'N/A';

    if (num >= 1e12) {
        return '$' + (num / 1e12).toFixed(decimals) + 'T';
    } else if (num >= 1e9) {
        return '$' + (num / 1e9).toFixed(decimals) + 'B';
    } else if (num >= 1e6) {
        return '$' + (num / 1e6).toFixed(decimals) + 'M';
    } else if (num >= 1e3) {
        return '$' + (num / 1e3).toFixed(decimals) + 'K';
    }
    return '$' + num.toLocaleString();
}

// Format compact number (without currency)
function formatCompact(num) {
    if (num === null || num === undefined) return 'N/A';

    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    }
    return num.toLocaleString();
}

// Format percentage
function formatPercent(value, showSign = true) {
    const sign = showSign && value > 0 ? '+' : '';
    return sign + value.toFixed(2) + '%';
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Relative time
function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return interval + ' ' + unit + (interval > 1 ? 's' : '') + ' ago';
        }
    }
    return 'just now';
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Local storage helpers
const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch {
            return defaultValue;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }
};

// Animate counter
function animateCounter(element, start, end, duration = 2000) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = Math.floor(start + range * easeProgress);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Random in range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Create element helper
function createElement(tag, attrs = {}, children = []) {
    const element = document.createElement(tag);

    for (const [key, value] of Object.entries(attrs)) {
        if (key === 'class') {
            element.className = value;
        } else if (key === 'style' && typeof value === 'object') {
            Object.assign(element.style, value);
        } else if (key.startsWith('on')) {
            element.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (key === 'data') {
            for (const [dataKey, dataValue] of Object.entries(value)) {
                element.dataset[dataKey] = dataValue;
            }
        } else {
            element.setAttribute(key, value);
        }
    }

    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    }

    return element;
}

// Intersection observer for animations
function observeElements(selector, callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                if (options.once !== false) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { ...defaultOptions, ...options });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));

    return observer;
}

// Get company logo initials
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

// Simulate stock price change
function simulateStockChange(basePrice) {
    const changePercent = (Math.random() - 0.5) * 2; // -1% to +1%
    const change = basePrice * (changePercent / 100);
    return {
        price: basePrice + change,
        change: change,
        changePercent: changePercent
    };
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatNumber,
        formatCompact,
        formatPercent,
        formatDate,
        timeAgo,
        debounce,
        throttle,
        storage,
        animateCounter,
        randomInRange,
        createElement,
        observeElements,
        getInitials,
        simulateStockChange
    };
}

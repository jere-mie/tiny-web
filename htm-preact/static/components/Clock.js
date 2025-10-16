import { useState, useEffect, html } from '../standalone-preact-htm.esm.js';

export function Clock() {
    const [time, setTime] = useState(new Date());
    const [is24Hour, setIs24Hour] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        if (is24Hour) {
            return date.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        } else {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit'
            });
        }
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getGreeting = () => {
        const hour = time.getHours();
        if (hour < 12) return '🌅 Good Morning';
        if (hour < 17) return '☀️ Good Afternoon';
        if (hour < 21) return '🌆 Good Evening';
        return '🌙 Good Night';
    };

    const getTimeZone = () => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    };

    return html`
        <div class="card shadow-sm">
            <div class="card-header bg-info text-white d-flex justify-content-between align-items-center">
                <h6 class="mb-0">🕐 Live Clock</h6>
                <div class="form-check form-switch">
                    <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="timeFormat"
                        checked=${is24Hour}
                        onChange=${(e) => setIs24Hour(e.target.checked)}
                    />
                    <label class="form-check-label text-white small" for="timeFormat">
                        24h
                    </label>
                </div>
            </div>
            <div class="card-body text-center">
                <div class="mb-2">
                    <small class="text-muted">${getGreeting()}</small>
                </div>
                <div class="display-6 fw-bold text-primary mb-2">
                    ${formatTime(time)}
                </div>
                <div class="text-muted small mb-2">
                    ${formatDate(time)}
                </div>
                <div class="text-muted" style="font-size: 0.8rem;">
                    ${getTimeZone()}
                </div>
                
                <!-- Additional time info -->
                <hr class="my-3" />
                <div class="row text-center">
                    <div class="col-6">
                        <div class="small text-muted">Week ${Math.ceil((time - new Date(time.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000))}</div>
                        <div class="fw-bold">of ${time.getFullYear()}</div>
                    </div>
                    <div class="col-6">
                        <div class="small text-muted">Day ${Math.ceil((time - new Date(time.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000))}</div>
                        <div class="fw-bold">of year</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
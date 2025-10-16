import { useState, html } from '../standalone-preact-htm.esm.js';

export function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);
    const reset = () => setCount(0);

    const getCountColor = () => {
        if (count > 0) return 'text-success';
        if (count < 0) return 'text-danger';
        return 'text-muted';
    };

    return html`
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title mb-0">
                            <i class="bi bi-calculator"></i> Interactive Counter
                        </h5>
                    </div>
                    <div class="card-body text-center">
                        <div class="mb-4">
                            <h1 class="display-1 ${getCountColor()}" style="font-weight: bold;">
                                ${count}
                            </h1>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Step Size:</label>
                            <div class="input-group justify-content-center" style="max-width: 200px; margin: 0 auto;">
                                <input 
                                    type="number" 
                                    class="form-control text-center" 
                                    value=${step}
                                    onInput=${(e) => setStep(parseInt(e.target.value) || 1)}
                                    min="1"
                                />
                            </div>
                        </div>

                        <div class="d-grid gap-2 d-md-block">
                            <button 
                                class="btn btn-outline-danger btn-lg me-md-2"
                                onClick=${decrement}
                            >
                                <span class="fw-bold">- ${step}</span>
                            </button>
                            
                            <button 
                                class="btn btn-outline-secondary btn-lg me-md-2"
                                onClick=${reset}
                            >
                                Reset
                            </button>
                            
                            <button 
                                class="btn btn-outline-success btn-lg"
                                onClick=${increment}
                            >
                                <span class="fw-bold">+ ${step}</span>
                            </button>
                        </div>

                        <div class="mt-4">
                            <div class="row text-center">
                                <div class="col-4">
                                    <div class="border rounded p-2">
                                        <small class="text-muted">Positive</small>
                                        <div class="fw-bold text-success">
                                            ${Math.max(0, count)}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border rounded p-2">
                                        <small class="text-muted">Absolute</small>
                                        <div class="fw-bold">
                                            ${Math.abs(count)}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border rounded p-2">
                                        <small class="text-muted">Squared</small>
                                        <div class="fw-bold text-info">
                                            ${count * count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
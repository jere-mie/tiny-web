import { html } from '../standalone-preact-htm.esm.js';

export function Header() {
    return html`
        <header class="bg-primary text-white rounded mb-4">
            <div class="container-fluid">
                <div class="row align-items-center py-3">
                    <div class="col-md-6">
                        <h1 class="h3 mb-0">
                            <span class="badge bg-light text-primary me-2">⚛️</span>
                            Preact + HTM Demo
                        </h1>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <div class="d-flex justify-content-md-end justify-content-start align-items-center">
                            <span class="badge bg-success me-2">No Build Tools</span>
                            <span class="badge bg-info">Bootstrap 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
}
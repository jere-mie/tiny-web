import { html } from '../standalone-preact-htm.esm.js';

export function Header() {
    return html`
        <header class="bg-primary text-white rounded mb-4">
            <div class="container-fluid">
                <div class="row align-items-center py-3">
                    <div class="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                        <h1 class="h3 mb-0">
                            <span class="badge bg-light text-primary me-2">⚛️</span>
                            <span class="d-none d-sm-inline">Preact + HTM Demo</span>
                            <span class="d-inline d-sm-none">Preact Demo</span>
                        </h1>
                    </div>
                    <div class="col-12 col-md-6 text-center text-md-end">
                        <div class="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                            <span class="badge bg-success">No Build Tools</span>
                            <span class="badge bg-info">Bootstrap 5</span>
                            <span class="badge bg-warning text-dark d-none d-sm-inline">Responsive</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
}
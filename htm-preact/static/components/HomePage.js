import { html } from '../standalone-preact-htm.esm.js';
import { Clock } from './Clock.js';

export function HomePage() {
    return html`
        <div class="container-fluid py-4">
            <div class="row g-3">
                <div class="col-12 col-lg-8">
                    <div class="card mb-4 shadow">
                        <div class="card-body">
                            <h2 class="card-title">🚀 Welcome to Preact + HTM</h2>
                            <p class="card-text lead">
                                This is a modern web application built with Preact and HTM, 
                                styled with Bootstrap, and featuring client-side routing—all requiring zero build tools!
                            </p>
                            
                            <div class="row g-3 mb-4">
                                <div class="col-12 col-md-4">
                                    <div class="card bg-primary text-white h-100">
                                        <div class="card-body text-center">
                                            <i class="bi bi-lightning-charge-fill" style="font-size: 2rem;"></i>
                                            <h6 class="card-title mt-2">⚡ Fast</h6>
                                            <p class="card-text small">Preact is only 3kB</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="card bg-success text-white h-100">
                                        <div class="card-body text-center">
                                            <i class="bi bi-tools" style="font-size: 2rem;"></i>
                                            <h6 class="card-title mt-2">🛠️ No Build</h6>
                                            <p class="card-text small">Just open in browser</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="card bg-info text-white h-100">
                                        <div class="card-body text-center">
                                            <i class="bi bi-phone" style="font-size: 2rem;"></i>
                                            <h6 class="card-title mt-2">📱 Responsive</h6>
                                            <p class="card-text small">Works everywhere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h5>🎯 Features</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                                    <span class="badge bg-primary">🔢</span>
                                    <span>Interactive counter with customizable step sizes</span>
                                </li>
                                <li class="list-group-item d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                                    <span class="badge bg-success">✅</span>
                                    <span>Advanced todo manager with priorities and filtering</span>
                                </li>
                                <li class="list-group-item d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                                    <span class="badge bg-info">👤</span>
                                    <span>Editable user profile with skills management</span>
                                </li>
                                <li class="list-group-item d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                                    <span class="badge bg-warning">🌐</span>
                                    <span>Client-side routing with clean URLs</span>
                                </li>
                            </ul>
                            
                            <div class="mt-4">
                                <h5>🚀 Get Started</h5>
                                <p>Use the navigation above to explore different sections of the application. Each "page" demonstrates different Preact concepts and Bootstrap components.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <${Clock} />
                    
                    <div class="card mt-4 shadow-sm">
                        <div class="card-header bg-secondary text-white">
                            <h6 class="mb-0">📊 App Stats</h6>
                        </div>
                        <div class="card-body">
                            <div class="row text-center g-2">
                                <div class="col-6">
                                    <div class="border-end pe-2">
                                        <div class="h4 text-primary">5</div>
                                        <small class="text-muted">Components</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="ps-2">
                                        <div class="h4 text-success">0</div>
                                        <small class="text-muted">Build Tools</small>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row text-center g-2">
                                <div class="col-6">
                                    <div class="border-end pe-2">
                                        <div class="h4 text-info">3kB</div>
                                        <small class="text-muted">Preact Size</small>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="ps-2">
                                        <div class="h4 text-warning">∞</div>
                                        <small class="text-muted">Possibilities</small>
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
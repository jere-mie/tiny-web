import { html } from '../standalone-preact-htm.esm.js';

export function NotFoundPage() {
    const goHome = () => {
        window.location.hash = '/';
    };

    const goBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.hash = '/';
        }
    };

    return html`
        <div class="container-fluid py-5">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6">
                    <div class="text-center">
                        <!-- 404 Illustration -->
                        <div class="mb-4">
                            <div style="font-size: 8rem; color: #6c757d;">🔍</div>
                            <h1 class="display-1 fw-bold text-primary">404</h1>
                        </div>
                        
                        <!-- Error Message -->
                        <div class="mb-4">
                            <h2 class="h3 mb-3">Oops! Page Not Found</h2>
                            <p class="text-muted lead">
                                The page you're looking for doesn't exist or may have been moved.
                            </p>
                        </div>
                        
                        <!-- Current Route Info -->
                        <div class="alert alert-light border mb-4">
                            <small class="text-muted">
                                <strong>Requested route:</strong> <code>${window.location.hash || '(no hash)'}</code>
                            </small>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <button 
                                class="btn btn-primary btn-lg"
                                onClick=${goHome}
                            >
                                🏠 Go Home
                            </button>
                            <button 
                                class="btn btn-outline-secondary btn-lg"
                                onClick=${goBack}
                            >
                                ← Go Back
                            </button>
                        </div>
                        
                        <!-- Available Routes -->
                        <div class="mt-5">
                            <h5 class="mb-3">Available Pages:</h5>
                            <div class="row g-2 justify-content-center">
                                <div class="col-auto">
                                    <a href="#/" class="btn btn-outline-primary btn-sm">
                                        🏠 Home
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#/counter" class="btn btn-outline-primary btn-sm">
                                        🔢 Counter
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#/todos" class="btn btn-outline-primary btn-sm">
                                        ✅ Todos
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <a href="#/profile" class="btn btn-outline-primary btn-sm">
                                        👤 Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
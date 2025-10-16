import { html } from '../standalone-preact-htm.esm.js';
import { Counter } from './Counter.js';

export function CounterPage() {
    return html`
        <div>
            <div class="mb-4">
                <h2>🔢 Interactive Counter</h2>
                <p class="text-muted">A feature-rich counter component demonstrating state management and user interactions.</p>
            </div>
            
            <${Counter} />
            
            <div class="row mt-4 g-3">
                <div class="col-12 col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h6 class="mb-0">📝 Features</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2">✅ Customizable step size</li>
                                <li class="mb-2">✅ Visual feedback with colors</li>
                                <li class="mb-2">✅ Mathematical operations display</li>
                                <li class="mb-2">✅ Responsive Bootstrap design</li>
                                <li class="mb-2">✅ Real-time state updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <h6 class="mb-0">💡 Implementation Notes</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2">🏗️ Built with <code>useState</code> hook</li>
                                <li class="mb-2">🎨 Styled with Bootstrap utilities</li>
                                <li class="mb-2">🔄 Reactive state management</li>
                                <li class="mb-2">📱 Mobile-friendly interface</li>
                                <li class="mb-2">⚡ Zero build tools required</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
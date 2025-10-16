import { html } from '../standalone-preact-htm.esm.js';
import { UserCard } from './UserCard.js';

export function ProfilePage() {
    return html`
        <div class="container-fluid py-4">
            <div class="row g-3">
                <div class="col-12">
                    <div class="mb-4">
                        <h2>👤 User Profile</h2>
                        <p class="text-muted">Manage your personal information and showcase your skills.</p>
                    </div>
                    
                    <${UserCard} />
                    
                    <div class="row g-3 mt-4">
                        <div class="col-12 col-lg-6">
                            <div class="card h-100">
                                <div class="card-header bg-primary text-white">
                                    <h6 class="mb-0">✏️ Profile Features</h6>
                                </div>
                                <div class="card-body">
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2">✅ Editable user information</li>
                                        <li class="mb-2">🏷️ Dynamic skills management</li>
                                        <li class="mb-2">😀 Custom avatar emoji</li>
                                        <li class="mb-2">📝 Bio and description</li>
                                        <li class="mb-2">🔗 Social media links</li>
                                        <li class="mb-2">📊 Statistics display</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="card h-100">
                                <div class="card-header bg-success text-white">
                                    <h6 class="mb-0">🛠️ How to Use</h6>
                                </div>
                                <div class="card-body">
                                    <ol class="mb-0">
                                        <li class="mb-2">Click the "Edit" button to modify your profile</li>
                                        <li class="mb-2">Update your name, email, and bio</li>
                                        <li class="mb-2">Choose a fun emoji as your avatar</li>
                                        <li class="mb-2">Add or remove skills using the tag system</li>
                                        <li class="mb-2">Save your changes to update the display</li>
                                        <li class="mb-2">Cancel anytime to revert changes</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mt-4">
                        <div class="card-header bg-info text-white">
                            <h6 class="mb-0">💡 Technical Implementation</h6>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-12 col-md-6">
                                    <h6>State Management</h6>
                                    <ul class="list-unstyled">
                                        <li>🏗️ <code>useState</code> for user data</li>
                                        <li>🔄 Separate state for edit mode</li>
                                        <li>💾 Form state management</li>
                                        <li>⚡ Real-time updates</li>
                                    </ul>
                                </div>
                                <div class="col-12 col-md-6">
                                    <h6>User Experience</h6>
                                    <ul class="list-unstyled">
                                        <li>🎨 Toggle between view/edit modes</li>
                                        <li>✅ Form validation</li>
                                        <li>🏷️ Dynamic tag creation/deletion</li>
                                        <li>📱 Responsive form layout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="alert alert-warning mt-4">
                        <h6 class="alert-heading">⚠️ Note</h6>
                        <p class="mb-0">
                            Profile data is stored in component state and will reset when you refresh the page. 
                            In a real application, you would integrate with a backend API or local storage for persistence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
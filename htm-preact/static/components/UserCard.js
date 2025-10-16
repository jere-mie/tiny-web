import { useState, html } from '../standalone-preact-htm.esm.js';

export function UserCard() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Full-stack developer passionate about modern web technologies.',
        avatar: '👤',
        skills: ['JavaScript', 'Preact', 'Bootstrap', 'HTML', 'CSS'],
        social: {
            github: 'johndoe',
            twitter: 'johndoe',
            linkedin: 'johndoe'
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({ ...user });

    const handleSave = () => {
        setUser({ ...editForm });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditForm({ ...user });
        setIsEditing(false);
    };

    const updateField = (field, value) => {
        setEditForm({ ...editForm, [field]: value });
    };

    const updateSkills = (skillsString) => {
        const skills = skillsString.split(',').map(s => s.trim()).filter(s => s);
        setEditForm({ ...editForm, skills });
    };

    const addSkill = (skill) => {
        if (skill && !editForm.skills.includes(skill)) {
            setEditForm({ ...editForm, skills: [...editForm.skills, skill] });
        }
    };

    const removeSkill = (skillToRemove) => {
        setEditForm({ 
            ...editForm, 
            skills: editForm.skills.filter(skill => skill !== skillToRemove) 
        });
    };

    if (isEditing) {
        return html`
            <div class="row justify-content-center">
                <div class="col-12 col-xl-8">
                    <div class="card shadow">
                        <div class="card-header bg-warning text-dark">
                            <h5 class="card-title mb-0">✏️ Edit Profile</h5>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Name</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            value=${editForm.name}
                                            onInput=${(e) => updateField('name', e.target.value)}
                                        />
                                    </div>
                                    
                                    <div class="col-12 col-md-6">
                                        <label class="form-label">Email</label>
                                        <input 
                                            type="email" 
                                            class="form-control"
                                            value=${editForm.email}
                                            onInput=${(e) => updateField('email', e.target.value)}
                                        />
                                    </div>
                                    
                                    <div class="col-12">
                                        <label class="form-label">Bio</label>
                                        <textarea 
                                            class="form-control" 
                                            rows="3"
                                            value=${editForm.bio}
                                            onInput=${(e) => updateField('bio', e.target.value)}
                                        ></textarea>
                                    </div>
                                    
                                    <div class="col-12 col-sm-6">
                                        <label class="form-label">Avatar Emoji</label>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            value=${editForm.avatar}
                                            onInput=${(e) => updateField('avatar', e.target.value)}
                                            maxlength="2"
                                        />
                                    </div>
                                    
                                    <div class="col-12">
                                        <label class="form-label">Skills</label>
                                        <div class="mb-2">
                                            ${editForm.skills.map(skill => html`
                                                <span key=${skill} class="badge bg-primary me-1 mb-1">
                                                    ${skill}
                                                    <button 
                                                        type="button"
                                                        class="btn-close btn-close-white ms-1"
                                                        style="font-size: 0.7em;"
                                                        onClick=${() => removeSkill(skill)}
                                                    ></button>
                                                </span>
                                            `)}
                                        </div>
                                        <input 
                                            type="text" 
                                            class="form-control"
                                            placeholder="Enter skills separated by commas"
                                            value=${editForm.skills.join(', ')}
                                            onInput=${(e) => updateSkills(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </form>
                            
                            <div class="d-flex flex-column flex-sm-row gap-2 mt-4">
                                <button 
                                    class="btn btn-success"
                                    onClick=${handleSave}
                                >
                                    Save Changes
                                </button>
                                <button 
                                    class="btn btn-secondary"
                                    onClick=${handleCancel}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    return html`
        <div class="row justify-content-center">
            <div class="col-12 col-xl-8">
                <div class="card shadow">
                    <div class="card-header bg-dark text-white d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
                        <h5 class="card-title mb-0">👤 User Profile</h5>
                        <button 
                            class="btn btn-outline-light btn-sm align-self-end align-self-sm-center"
                            onClick=${() => setIsEditing(true)}
                        >
                            ✏️ Edit
                        </button>
                    </div>
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <div style="font-size: 3rem;" class="mb-2 d-sm-none">${user.avatar}</div>
                            <div style="font-size: 4rem;" class="mb-2 d-none d-sm-block">${user.avatar}</div>
                            <h4 class="fs-5 fs-sm-4">${user.name}</h4>
                            <p class="text-muted small">${user.email}</p>
                        </div>
                        
                        <div class="mb-4">
                            <p class="card-text">${user.bio}</p>
                        </div>
                        
                        <div class="mb-4">
                            <h6 class="mb-2">Skills & Technologies</h6>
                            <div>
                                ${user.skills.map(skill => html`
                                    <span key=${skill} class="badge bg-primary me-1 mb-1 small">
                                        ${skill}
                                    </span>
                                `)}
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="mb-2">Connect</h6>
                            <div class="d-flex flex-column flex-sm-row justify-content-center gap-2">
                                <a href="#" class="btn btn-outline-dark btn-sm">
                                    📧 Email
                                </a>
                                <a href="#" class="btn btn-outline-dark btn-sm">
                                    💼 LinkedIn
                                </a>
                                <a href="#" class="btn btn-outline-dark btn-sm">
                                    🐙 GitHub
                                </a>
                            </div>
                        </div>
                        
                        <div class="row g-2 mt-4">
                            <div class="col-4">
                                <div class="border rounded p-2">
                                    <div class="fw-bold">${user.skills.length}</div>
                                    <small class="text-muted">Skills</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border rounded p-2">
                                    <div class="fw-bold">5+</div>
                                    <small class="text-muted">Years</small>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="border rounded p-2">
                                    <div class="fw-bold">42</div>
                                    <small class="text-muted">Projects</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
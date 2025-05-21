
// profileManager.js

class ProfileManager {
    constructor() {
        this.profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        this.currentProfileId = localStorage.getItem('currentProfileId') || null;
        this.editingProfileId = null;
        this.currentAvatar = '';
    }

    saveProfiles() {
        localStorage.setItem('profiles', JSON.stringify(this.profiles));
    }

    addProfile(name, avatar) {
        const newProfile = {
            id: Date.now().toString(),
            name,
            avatar,
            createdAt: new Date().toISOString()
        };
        this.profiles.push(newProfile);
        this.saveProfiles();
        if (this.profiles.length === 1) {
            this.setCurrentProfile(newProfile.id);
        }
        return newProfile;
    }

    updateProfile(id, name, avatar) {
        const profile = this.profiles.find(p => p.id === id);
        if (profile) {
            profile.name = name;
            profile.avatar = avatar;
            this.saveProfiles();
            return true;
        }
        return false;
    }

    deleteProfile(id) {
        this.profiles = this.profiles.filter(p => p.id !== id);
        this.saveProfiles();
        if (id === this.currentProfileId) {
            this.currentProfileId = this.profiles.length > 0 ? this.profiles[0].id : null;
            localStorage.setItem('currentProfileId', this.currentProfileId);
        }
        this.clearProfileData(id);
        renderProfiles();
    }

    setCurrentProfile(id) {
        this.currentProfileId = id;
        localStorage.setItem('currentProfileId', id);
    }

    getCurrentProfile() {
        return this.profiles.find(p => p.id === this.currentProfileId) || null;
    }

    getProfileData(key) {
        const profile = this.getCurrentProfile();
        if (!profile) return null;
        const profileKey = `profile_${profile.id}_${key}`;
        return localStorage.getItem(profileKey);
    }

    setProfileData(key, value) {
        const profile = this.getCurrentProfile();
        if (!profile) return;
        const profileKey = `profile_${profile.id}_${key}`;
        localStorage.setItem(profileKey, value);
    }

    clearProfileData(profileId) {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(`profile_${profileId}_`)) {
                localStorage.removeItem(key);
            }
        });
    }
}

const profileManager = new ProfileManager();

function renderProfiles() {
    const profilesGrid = document.getElementById('profiles-grid');
    profilesGrid.innerHTML = '';

    profileManager.profiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.className = 'profile-card';
        profileElement.innerHTML = `
            <div class="profile-avatar">
                ${profile.avatar ? `<img src="${profile.avatar}" />` : ''}
            </div>
            <h3 class="profile-name">${profile.name}</h3>
            <div class="profile-actions">
                <button class="edit-profile" data-id="${profile.id}">✏️</button>
                <button class="delete-profile" data-id="${profile.id}">🗑️</button>
            </div>
        `;

        profileElement.addEventListener('click', (e) => {
            if (!e.target.closest('.profile-actions')) {
                profileManager.setCurrentProfile(profile.id);
                window.location.href = 'index.html';
            }
        });

        profilesGrid.appendChild(profileElement);
    });

    document.querySelectorAll('.edit-profile').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const profileId = btn.getAttribute('data-id');
            openProfileModal(profileId);
        });
    });

    document.querySelectorAll('.delete-profile').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const profileId = btn.getAttribute('data-id');
            document.getElementById('confirm-modal').style.display = 'flex';
            document.getElementById('confirm-yes').onclick = () => {
                profileManager.deleteProfile(profileId);
                document.getElementById('confirm-modal').style.display = 'none';
            };
            document.getElementById('confirm-no').onclick = () => {
                document.getElementById('confirm-modal').style.display = 'none';
            };
        });
    });
}

function openProfileModal(profileId = null) {
    const modal = document.getElementById('profile-modal');
    const modalTitle = document.getElementById('modal-title');
    const profileNameInput = document.getElementById('profile-name');
    const avatarPreview = document.getElementById('avatar-preview');
    const avatarInput = document.getElementById('avatar-input');
    const confirmBtn = document.getElementById('modal-confirm');

    profileManager.editingProfileId = profileId;

    if (profileId) {
        const profile = profileManager.profiles.find(p => p.id === profileId);
        profileNameInput.value = profile.name;
        profileManager.currentAvatar = profile.avatar;
        avatarPreview.innerHTML = profile.avatar ? `<img src="${profile.avatar}" />` : '';
        modalTitle.textContent = 'Editar Perfil';
    } else {
        profileNameInput.value = '';
        profileManager.currentAvatar = '';
        avatarPreview.innerHTML = '';
        modalTitle.textContent = 'Crear Nuevo Perfil';
    }

    avatarInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = evt => {
                profileManager.currentAvatar = evt.target.result;
                avatarPreview.innerHTML = `<img src="${profileManager.currentAvatar}" />`;
            };
            reader.readAsDataURL(file);
        }
    };

    confirmBtn.onclick = () => {
        const name = profileNameInput.value.trim();
        if (!name) return alert('Por favor ingresa un nombre para el perfil');

        if (profileId) {
            profileManager.updateProfile(profileId, name, profileManager.currentAvatar);
        } else {
            profileManager.addProfile(name, profileManager.currentAvatar);
        }
        modal.style.display = 'none';
        renderProfiles();
    };

    modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    if (profileManager.profiles.length === 0) {
        openProfileModal();
    } else {
        renderProfiles();
    }

    document.getElementById('add-profile-btn').addEventListener('click', () => {
        openProfileModal();
    });

    document.getElementById('modal-cancel').addEventListener('click', () => {
        document.getElementById('profile-modal').style.display = 'none';
    });
});

export { profileManager };
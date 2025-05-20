// profileManager.js

// Clase para manejar los perfiles
class ProfileManager {
    constructor() {
        this.profiles = JSON.parse(localStorage.getItem('profiles')) || [];
        this.currentProfileId = localStorage.getItem('currentProfileId') || null;
        this.editingProfileId = null;
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
        
        // Si es el primer perfil, lo establecemos como actual
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
        
        // Si eliminamos el perfil actual, seleccionamos otro si existe
        if (id === this.currentProfileId) {
            this.currentProfileId = this.profiles.length > 0 ? this.profiles[0].id : null;
            localStorage.setItem('currentProfileId', this.currentProfileId);
        }
        
        // Eliminamos también los datos específicos de este perfil
        this.clearProfileData(id);
    }

    setCurrentProfile(id) {
        this.currentProfileId = id;
        localStorage.setItem('currentProfileId', id);
    }

    getCurrentProfile() {
        return this.profiles.find(p => p.id === this.currentProfileId) || null;
    }

    // Método para obtener/setear datos específicos del perfil
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
        // Eliminamos todas las claves de localStorage que pertenecen a este perfil
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(`profile_${profileId}_`)) {
                localStorage.removeItem(key);
            }
        });
    }
}

// Instancia global del administrador de perfiles
const profileManager = new ProfileManager();

// Función para renderizar los perfiles
function renderProfiles() {
    const profilesGrid = document.getElementById('profiles-grid');
    profilesGrid.innerHTML = '';
    
    profileManager.profiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.className = 'profile-card';
        profileElement.innerHTML = `
            <div class="profile-avatar" data-avatar="${profile.avatar}">
                <i class="fas fa-user${getAvatarIconSuffix(profile.avatar)}"></i>
            </div>
            <h3 class="profile-name">${profile.name}</h3>
            <div class="profile-actions">
                <button class="edit-profile" data-id="${profile.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-profile" data-id="${profile.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Hacer que el perfil sea seleccionable
        profileElement.addEventListener('click', (e) => {
            // Evitar que el clic en los botones active la selección
            if (!e.target.closest('.profile-actions')) {
                profileManager.setCurrentProfile(profile.id);
                window.location.href = 'index.html';
            }
        });
        
        profilesGrid.appendChild(profileElement);
    });
    
    // Agregar event listeners para los botones de edición y eliminación
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
            if (confirm(`¿Estás seguro de que quieres eliminar este perfil? Se perderán sus datos.`)) {
                profileManager.deleteProfile(profileId);
                renderProfiles();
            }
        });
    });
}

// Función auxiliar para obtener el sufijo del icono del avatar
function getAvatarIconSuffix(avatarNumber) {
    const suffixes = {
        1: '',
        2: '-tie',
        3: '-astronaut',
        4: '-ninja',
        5: '-graduate'
    };
    return suffixes[avatarNumber] || '';
}

// Función para abrir el modal de perfil (creación/edición)
function openProfileModal(profileId = null) {
    const modal = document.getElementById('profile-modal');
    const modalTitle = document.getElementById('modal-title');
    const profileNameInput = document.getElementById('profile-name');
    const confirmBtn = document.getElementById('modal-confirm');
    
    if (profileId) {
        // Modo edición
        modalTitle.textContent = 'Editar Perfil';
        const profile = profileManager.profiles.find(p => p.id === profileId);
        profileNameInput.value = profile.name;
        
        // Seleccionar el avatar correcto
        document.querySelectorAll('.avatar-option').forEach(option => {
            option.classList.toggle('selected', option.getAttribute('data-avatar') === profile.avatar.toString());
        });
        
        confirmBtn.onclick = () => {
            const name = profileNameInput.value.trim();
            const selectedAvatar = document.querySelector('.avatar-option.selected').getAttribute('data-avatar');
            
            if (name) {
                profileManager.updateProfile(profileId, name, selectedAvatar);
                modal.style.display = 'none';
                renderProfiles();
            } else {
                alert('Por favor ingresa un nombre para el perfil');
            }
        };
    } else {
        // Modo creación
        modalTitle.textContent = 'Crear Nuevo Perfil';
        profileNameInput.value = '';
        
        // Seleccionar el primer avatar por defecto
        document.querySelectorAll('.avatar-option').forEach((option, index) => {
            option.classList.toggle('selected', index === 0);
        });
        
        confirmBtn.onclick = () => {
            const name = profileNameInput.value.trim();
            const selectedAvatar = document.querySelector('.avatar-option.selected').getAttribute('data-avatar');
            
            if (name) {
                profileManager.addProfile(name, selectedAvatar);
                modal.style.display = 'none';
                renderProfiles();
            } else {
                alert('Por favor ingresa un nombre para el perfil');
            }
        };
    }
    
    modal.style.display = 'flex';
}

// Event listeners para el modal
document.addEventListener('DOMContentLoaded', () => {
    // Si no hay perfiles, mostrar el modal de creación automáticamente
    if (profileManager.profiles.length === 0) {
        openProfileModal();
    } else {
        renderProfiles();
    }
    
    // Botón para añadir nuevo perfil
    document.getElementById('add-profile-btn').addEventListener('click', () => {
        openProfileModal();
    });
    
    // Botón cancelar del modal
    document.getElementById('modal-cancel').addEventListener('click', () => {
        document.getElementById('profile-modal').style.display = 'none';
    });
    
    // Selección de avatar
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            option.classList.add('selected');
        });
    });
});

// Exportar el profileManager para usarlo en otros archivos
export { profileManager };
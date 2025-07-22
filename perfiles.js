import { profileManager } from './profileManager.js';

// Configuración de avatares predeterminados
const defaultAvatars = [
    'https://i.pinimg.com/736x/a6/5b/31/a65b3103f4cf5b197dcae3683cba2980.jpg',
    'https://i.pinimg.com/736x/85/24/ff/8524ff446cca05ff14b9fbff861e1677.jpg',
    'https://i.pinimg.com/564x/23/cc/a5/23cca59c25e4561e02e4d9ae584c2c82.jpg',
    'https://i.pinimg.com/474x/01/04/51/01045145873eaac669d5e9bb400d703d.jpg',
    'https://i.pinimg.com/736x/3a/b8/66/3ab86626ef6f8c0173648136100dc333.jpg',
    'https://i.pinimg.com/736x/bf/7d/c3/bf7dc3c03265aab4c2929c0306b7856e.jpg',
    'https://i.pinimg.com/236x/33/99/00/339900e41301a012bf525ed40327e298.jpg',
    'https://i.pinimg.com/736x/e4/f2/8c/e4f28c9baf24be08806da05294db1399.jpg',
    'https://i.pinimg.com/736x/9b/e6/45/9be645c8322c99cde6559ac3d11be457.jpg',
    'https://i.pinimg.com/736x/04/14/45/041445926fea15d45e76d673310964e8.jpg',
    'https://i.pinimg.com/474x/c6/8c/3e/c68c3e51a317b9d3a660ac02470d758a.jpg',
    'https://i.pinimg.com/736x/32/26/6d/32266d06aa2c93e951c2f10c19bc888d.jpg',
    'https://i.pinimg.com/736x/83/83/01/838301e705a30554b6fc68ef7f5f62b4.jpg',
    'https://i.pinimg.com/736x/99/fc/79/99fc799b715d93570c4f4d4afb5431c1.jpg',
    'https://i.pinimg.com/736x/2d/75/d4/2d75d4083c6f76291ae8c6ae7b2608b3.jpg',
    'https://i.pinimg.com/564x/34/e2/d2/34e2d2ae44a7ba46a984c968536472e0.jpg',
    'https://i.pinimg.com/736x/0b/9f/19/0b9f194824fe70d5822bc38beb4e2c87.jpg',
    'https://i.pinimg.com/736x/0f/ee/5f/0fee5f303f9d4fdd2b62bd8b143fde60.jpg',
    'https://i.pinimg.com/736x/7b/7f/23/7b7f235d2b80198672c12eb541e1ffe2.jpg',
    'https://i.pinimg.com/736x/47/ad/4f/47ad4f8c398d83bc6c4c8abb9df08276.jpg'
];

// Variables globales
let selectedAvatarUrl = '';
let isDefaultAvatarSelected = false;

// Función para cargar avatares predeterminados en el grid
function loadDefaultAvatars() {
    const avatarsGrid = document.getElementById('avatars-grid');
    avatarsGrid.innerHTML = '';
    
    defaultAvatars.forEach(avatarUrl => {
        const avatarOption = document.createElement('div');
        avatarOption.className = 'avatar-option';
        avatarOption.innerHTML = `<img src="${avatarUrl}" alt="Avatar" loading="lazy">`;
        
        avatarOption.addEventListener('click', function() {
            document.querySelectorAll('.avatar-option').forEach(el => {
                el.classList.remove('selected');
            });
            
            this.classList.add('selected');
            selectedAvatarUrl = avatarUrl;
            isDefaultAvatarSelected = true;
            hideError('avatar-error');
            
            document.getElementById('avatar-preview').innerHTML = 
                `<img src="${avatarUrl}" alt="Preview">`;
        });
        
        avatarsGrid.appendChild(avatarOption);
    });
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('show');
}

function hideError(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('show');
}

function profileNameExists(name) {
    return profileManager.profiles.some(
        profile => profile.name.toLowerCase() === name.toLowerCase()
    );
}

function renderProfiles() {
    const profilesGrid = document.getElementById('profiles-grid');
    profilesGrid.innerHTML = '';
    
    profileManager.profiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `
            <div class="profile-avatar">
                <img src="${profile.avatar}" alt="${profile.name}">
            </div>
            <h3 class="profile-name">${profile.name}</h3>
            <div class="profile-actions">
                <button class="edit-profile" data-id="${profile.id}">✏️</button>
                <button class="delete-profile" data-id="${profile.id}">🗑️</button>
            </div>
        `;
        
        profileCard.addEventListener('click', (e) => {
            if (!e.target.closest('.profile-actions')) {
                profileManager.setCurrentProfile(profile.id);
                window.location.href = 'index.html';
            }
        });
        
        profileCard.querySelector('.edit-profile').addEventListener('click', (e) => {
            e.stopPropagation();
            openEditProfileModal(profile.id);
        });
        
        profileCard.querySelector('.delete-profile').addEventListener('click', (e) => {
            e.stopPropagation();
            showDeleteConfirmation(profile.id);
        });
        
        profilesGrid.appendChild(profileCard);
    });
}

function openEditProfileModal(profileId) {
    const profile = profileManager.profiles.find(p => p.id === profileId);
    if (!profile) return;
    
    profileManager.editingProfileId = profileId;
    document.getElementById('modal-title').textContent = 'Editar Perfil';
    document.getElementById('profile-name').value = profile.name;
    
    selectedAvatarUrl = profile.avatar;
    const avatarPreview = document.getElementById('avatar-preview');
    avatarPreview.innerHTML = `<img src="${profile.avatar}" alt="Preview">`;
    
    const isDefault = defaultAvatars.includes(profile.avatar);
    if (isDefault) {
        document.getElementById('default-avatars-btn').click();
        setTimeout(() => {
            const avatarOptions = document.querySelectorAll('.avatar-option');
            avatarOptions.forEach(option => {
                if (option.querySelector('img').src === profile.avatar) {
                    option.click();
                }
            });
        }, 0);
    } else {
        document.getElementById('custom-avatar-btn').click();
    }
    
    document.getElementById('profile-modal').style.display = 'flex';
}

function showDeleteConfirmation(profileId) {
    const confirmModal = document.getElementById('confirm-modal');
    confirmModal.style.display = 'flex';
    
    document.getElementById('confirm-yes').onclick = () => {
        profileManager.deleteProfile(profileId);
        confirmModal.style.display = 'none';
        renderProfiles();
    };
    
    document.getElementById('confirm-no').onclick = () => {
        confirmModal.style.display = 'none';
    };
}

function exportData() {
    const dataToExport = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        dataToExport[key] = localStorage.getItem(key);
    }

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `flicker_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Datos exportados correctamente (Descargas)', 'success');
}

function importData() {
    const fileInput = document.getElementById('import-file-input');
    fileInput.click();

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // Crear modal premium
                const modalOverlay = document.createElement('div');
                modalOverlay.className = 'import-confirm-overlay';
                modalOverlay.innerHTML = `
                    <div class="import-confirm-container">
                        <div class="import-confirm-message">
                            ¿Importar datos de respaldo?
                            <small>Esta acción sobrescribirá todos los perfiles y configuraciones actuales</small>
                        </div>
                        <div class="import-confirm-buttons">
                            <button id="import-confirm-yes" class="glow-on-hover" 
                                style="background: linear-gradient(135deg, var(--primary), var(--primary-dark));
                                       color: #121212;
                                       padding: 0.8rem 2rem;
                                       border-radius: 12px;
                                       border: none;
                                       font-weight: 600;
                                       cursor: pointer;
                                       transition: all 0.3s;">
                                <i class="fas fa-file-import"></i> Confirmar
                            </button>
                            <button id="import-confirm-no" 
                                style="background: rgba(255, 255, 255, 0.05);
                                       color: var(--accent);
                                       padding: 0.8rem 2rem;
                                       border-radius: 12px;
                                       border: 1px solid rgba(255, 215, 0, 0.3);
                                       font-weight: 600;
                                       cursor: pointer;
                                       transition: all 0.3s;">
                                <i class="fas fa-times"></i> Cancelar
                            </button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(modalOverlay);
                
                // Hacer el modal semipermanente (no se cierra al hacer clic fuera)
                const confirmYes = document.getElementById('import-confirm-yes');
                const confirmNo = document.getElementById('import-confirm-no');
                
                confirmYes.onclick = () => {
                    localStorage.clear();
                    Object.keys(importedData).forEach(key => {
                        localStorage.setItem(key, importedData[key]);
                    });
                    
                    // Cambiar mensaje a confirmación
                    modalOverlay.innerHTML = `
                        <div class="import-confirm-container">
                            <div class="import-confirm-message">
                                <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;"></i>
                                <div>¡Datos importados con éxito!</div>
                                <small>La página se recargará automáticamente</small>
                            </div>
                        </div>
                    `;
                    
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                };
                
                confirmNo.onclick = () => {
                    modalOverlay.style.animation = 'fadeIn 0.3s ease-out reverse';
                    setTimeout(() => {
                        modalOverlay.remove();
                    }, 300);
                };
                
            } catch (error) {
                showToast('<i class="fas fa-exclamation-triangle"></i> Error: Archivo no válido', 'error');
                console.error('Error al importar:', error);
            }
        };
        reader.readAsText(file);
    });
}

function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    loadDefaultAvatars();
    
    const profileModal = document.getElementById('profile-modal');
    const modalConfirm = document.getElementById('modal-confirm');
    const modalCancel = document.getElementById('modal-cancel');
    const profileNameInput = document.getElementById('profile-name');
    const avatarInput = document.getElementById('avatar-input');
    const addProfileBtn = document.getElementById('add-profile-btn');
    
    document.getElementById('default-avatars-btn').addEventListener('click', function() {
        document.getElementById('default-avatars-section').style.display = 'block';
        document.getElementById('custom-avatar-section').style.display = 'none';
        this.classList.add('active');
        document.getElementById('custom-avatar-btn').classList.remove('active');
        isDefaultAvatarSelected = false;
        selectedAvatarUrl = '';
        document.getElementById('avatar-preview').innerHTML = '';
        hideError('avatar-error');
        loadDefaultAvatars();
    });
    
    document.getElementById('custom-avatar-btn').addEventListener('click', function() {
        document.getElementById('default-avatars-section').style.display = 'none';
        document.getElementById('custom-avatar-section').style.display = 'block';
        this.classList.add('active');
        document.getElementById('default-avatars-btn').classList.remove('active');
        isDefaultAvatarSelected = false;
    });
    
    avatarInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                selectedAvatarUrl = event.target.result;
                document.getElementById('avatar-preview').innerHTML = 
                    `<img src="${selectedAvatarUrl}" alt="Preview">`;
                hideError('avatar-error');
            };
            reader.readAsDataURL(file);
        }
    });
    
    profileNameInput.addEventListener('input', function() {
        hideError('name-error');
    });
    
    addProfileBtn.addEventListener('click', function() {
        profileManager.editingProfileId = null;
        document.getElementById('modal-title').textContent = 'Nuevo Perfil';
        profileNameInput.value = '';
        document.getElementById('avatar-preview').innerHTML = '';
        selectedAvatarUrl = '';
        isDefaultAvatarSelected = false;
        document.querySelectorAll('.avatar-option').forEach(el => {
            el.classList.remove('selected');
        });
        avatarInput.value = '';
        hideError('name-error');
        hideError('avatar-error');
        document.getElementById('default-avatars-btn').click();
        loadDefaultAvatars();
        profileModal.style.display = 'flex';
    });
    
    modalConfirm.addEventListener('click', function() {
        const profileName = profileNameInput.value.trim();
        let isValid = true;
        
        if (!profileName) {
            showError('name-error', 'Por favor ingresa un nombre para el perfil');
            isValid = false;
        } else if (profileNameExists(profileName) && !profileManager.editingProfileId) {
            showError('name-error', 'Ya existe un perfil con este nombre');
            isValid = false;
        }
        
        if (!selectedAvatarUrl) {
            showError('avatar-error', 'Por favor selecciona un avatar');
            isValid = false;
        }
        
        if (!isValid) return;
        
        if (profileManager.editingProfileId) {
            profileManager.updateProfile(profileManager.editingProfileId, profileName, selectedAvatarUrl);
        } else {
            profileManager.addProfile(profileName, selectedAvatarUrl);
        }
        
        profileModal.style.display = 'none';
        renderProfiles();
    });
    
    modalCancel.addEventListener('click', function() {
        profileModal.style.display = 'none';
    });

    // Eventos para exportar/importar
    document.getElementById('export-data-btn')?.addEventListener('click', exportData);
    document.getElementById('import-data-btn')?.addEventListener('click', importData);
    
    renderProfiles();
});
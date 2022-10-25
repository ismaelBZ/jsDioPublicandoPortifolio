

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name + " " + profileData.job;
 
    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;
    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;
    phone.href = `tels:${profileData.phone}`;
    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto: ${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById(`profile.skills.softSkills`)
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(``) //transfou o JSON list a skill depois transformou em string
}

(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
})();
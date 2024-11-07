// hidden resume
const resumeBtn = document.getElementById('toggleResumeBtn');
        const resumeContent = document.getElementById('resumeContent');
        
        resumeBtn.addEventListener('click', () => {
            if (resumeContent.style.display === "none") {
                resumeContent.style.display = "block";
                resumeBtn.textContent = "Hide Resume";
            } else {
                resumeContent.style.display = "none";
                resumeBtn.textContent = "View Resume";
            }
        });
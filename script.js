window.onload = () => {
    const bar = document.getElementById('progressBar');
    const percent = document.getElementById('percentText');
    const status = document.getElementById('statusText');
    
    let progress = 0;
    
    const interval = setInterval(() => {
        progress++;
        console.log(interval);
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            status.innerText = "Completed";
            status.style.color = "#4ade80"; // Light green
        }
        
        bar.style.width = progress + "%";
        percent.innerText = progress + "%";
        
    }, 50); // Har 0.2 seconds baad update hoga
};
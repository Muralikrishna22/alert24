const installationPrompt = () => {
    let deferredPrompt;

    // Listen for the `beforeinstallprompt` event
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default install prompt
        e.preventDefault();
        // Stash the event so it can be triggered later
        deferredPrompt = e;

        // Show the custom install prompt
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt) {
            installPrompt.classList.remove('hidden');
        }
    });

    // Handle the install button click
    document.getElementById('installButton').addEventListener('click', async () => {
        if (deferredPrompt) {
            // Show the install prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }

            // Clear the deferredPrompt variable
            deferredPrompt = null;

            // Hide the custom install prompt
            const installPrompt = document.getElementById('installPrompt');
            if (installPrompt) {
                installPrompt.classList.add('hidden');
            }
        }
    });

    // Handle the cancel button click
    document.getElementById('cancelButton').addEventListener('click', () => {
        // Hide the custom install prompt
        const installPrompt = document.getElementById('installPrompt');
        if (installPrompt) {
            installPrompt.classList.add('hidden');
        }

        // Inform the user about the next refresh prompt
        localStorage.setItem('installPromptShown', 'true');
    });

    // Check if the prompt has been shown before
    window.addEventListener('load', () => {
        if (localStorage.getItem('installPromptShown') === 'true') {
            const installPrompt = document.getElementById('installPrompt');
            if (installPrompt) {
                installPrompt.classList.add('hidden');
            }
        }
    });

}

export default installationPrompt
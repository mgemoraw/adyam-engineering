function showNotification(message, type = 'success') {
    const notif = document.getElementById('notification');
    const messageText = document.getElementById('notification-message');
    const icon = notif.querySelector('svg');

    messageText.innerText = message;

    // Reset classes
    notif.className = 'fixed top-6 right-6 z-50 max-w-sm w-full bg-white text-gray-800 shadow-lg rounded-lg p-4 flex items-start space-x-3 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out';

    // Apply type-specific styles
    if (type === 'success') {
    notif.classList.add('border-l-4', 'border-green-600');
    icon.className = 'w-6 h-6 text-green-600';
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>`;
    } else if (type === 'error') {
    notif.classList.add('border-l-4', 'border-red-600');
    icon.className = 'w-6 h-6 text-red-600';
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>`;
    } else if (type === 'info') {
    notif.classList.add('border-l-4', 'border-blue-600');
    icon.className = 'w-6 h-6 text-blue-600';
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01"/>`;
    }

    // Show notification
    notif.classList.remove('opacity-0', 'pointer-events-none');
    notif.classList.add('opacity-100');

    // Auto-hide after 4 seconds
    setTimeout(() => hideNotification(), 4000);
}

function hideNotification() {
    const notif = document.getElementById('notification');
    notif.classList.add('opacity-0');
    notif.classList.remove('opacity-100');
    setTimeout(() => {
    notif.classList.add('pointer-events-none');
    }, 300);
}
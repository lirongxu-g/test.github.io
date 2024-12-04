// Add some simple interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation (if you add a nav later)
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Example of adding a dynamic greeting
    const greetUser = () => {
        const hour = new Date().getHours();
        const greeting = document.createElement('div');
        greeting.classList.add('text-center', 'text-gray-600', 'mt-4');
        
        if (hour < 12) greeting.textContent = 'Good morning! ☀️';
        else if (hour < 18) greeting.textContent = 'Good afternoon! 🌞';
        else greeting.textContent = 'Good evening! 🌙';

        document.querySelector('header').appendChild(greeting);
    };

    // Run greeting function
    greetUser();
});

// Universal Component Loader for Static Website
class ComponentLoader {
    constructor() {
        this.components = {};
    }

    async loadComponent(componentName, containerId) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}`);
            }
            const html = await response.text();
            
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = html;
                this.components[componentName] = html;
                
                // Initialize component-specific functionality
                this.initializeComponent(componentName);
            }
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
        }
    }

    initializeComponent(componentName) {
        switch (componentName) {
            case 'navbar':
                this.initializeNavbar();
                break;
            case 'footer':
                this.initializeFooter();
                break;
        }
    }

    initializeNavbar() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // Set active page
        this.setActivePage();
    }

    initializeFooter() {
        // Footer initialization if needed
        console.log('Footer loaded successfully');
    }

    setActivePage() {
        // Get current page name from URL
        const currentPage = window.location.pathname.split('/').pop().split('.')[0];
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page
        const currentLink = document.querySelector(`[data-page="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    // Load all components
    async loadAllComponents() {
        await Promise.all([
            this.loadComponent('navbar', 'navbar-container'),
            this.loadComponent('footer', 'footer-container')
        ]);
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ComponentLoader();
    loader.loadAllComponents();
});

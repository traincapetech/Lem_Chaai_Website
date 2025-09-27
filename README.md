# Lemchaai - Tea Shop Website

A modern, responsive static website for Lemchaai tea shop with WhatsApp ordering integration.

## Features

- **5 Pages**: Home, About, Menu, Gallery, Contact
- **WhatsApp Integration**: Direct ordering through WhatsApp with pre-filled messages
- **Responsive Design**: Works perfectly on mobile and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **No Backend Required**: Pure HTML, CSS, and JavaScript

## Pages Overview

### 🏠 Home Page
- Hero section with shop branding
- Quick order buttons for popular items
- Feature highlights
- Call-to-action for WhatsApp ordering

### ℹ️ About Page
- Shop story and values
- Specialty items showcase
- Team and mission information

### 📋 Menu Page
- Complete menu organized by categories:
  - Tea & Coffee
  - Snacks (Momos, Noodles, Maggie)
  - Breads & Rolls (Paratha, Pizza, etc.)
- Individual WhatsApp order buttons for each item

### 🖼️ Gallery Page
- Food and shop photos
- Visual showcase of offerings
- Direct ordering integration

### 📞 Contact Page
- Location and hours
- Phone number
- Quick order options
- Google Maps placeholder

## Customization Guide

### 1. Update WhatsApp Number
Replace `917838000475` with the actual phone number in all HTML files:
```html
href="https://wa.me/YOUR_PHONE_NUMBER?text=..."
```

### 2. Update Contact Information
Edit `contact.html` with real:
- Address
- Phone number
- Opening hours

### 3. Add Real Images
Replace placeholder divs with actual images:
```html
<!-- Replace this -->
<div class="image-placeholder">
    <i class="fas fa-coffee"></i>
    <p>Tea & Snacks Image</p>
</div>

<!-- With this -->
<img src="images/hero-image.jpg" alt="Lemchaai Tea Shop" style="width: 100%; height: auto; border-radius: 15px;">
```

### 4. Update Menu Items
Modify prices and items in `menu.html` as needed.

### 5. Add Google Maps
Replace the map placeholder in `contact.html`:
```html
<!-- Replace map placeholder with -->
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

## File Structure

```
Lemchaai/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu page
├── gallery.html        # Gallery page
├── contact.html        # Contact page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## WhatsApp Order Format

Each order button uses this format:
```
https://wa.me/917838000475?text=Hello%20Lemchaai,%20I'd%20like%20to%20order:%20[ITEM_NAME]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

1. Upload all files to your web hosting service
2. Ensure all files are in the same directory
3. Update the WhatsApp number and contact details
4. Add real images to replace placeholders
5. Test on mobile devices

## Customization Tips

- Colors can be changed in the CSS variables at the top of `styles.css`
- Fonts can be updated by changing the Google Fonts import
- Add more menu items by copying the existing structure
- Images should be optimized for web (use tools like TinyPNG)

## Support

For any issues or customization needs, refer to the code comments in the HTML, CSS, and JavaScript files.

---

**Note**: Remember to replace the placeholder phone number `917838000475` with the actual Lemchaai WhatsApp number before going live!

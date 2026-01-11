import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollProgress = 0;
  activeSection = 'hero';

  navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Calculate scroll progress
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    // Determine active section
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'interests', 'contact'];
    const offset = 150; // Offset from top to trigger active state

    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= offset) {
          this.activeSection = section;
          return;
        }
      }
    }
    this.activeSection = 'hero';
  }

  // Mobile menu toggle
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}

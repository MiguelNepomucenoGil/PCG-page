class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
      this.hideMenu = this.hideMenu.bind(this); // Adicionado
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    hideMenu() {
      this.navList.classList.remove(this.activeClass);
      this.mobileMenu.classList.remove(this.activeClass);
      this.animateLinks(); // Animação ao esconder os links
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      
      // Adiciona um evento de clique para cada link
      this.navLinks.forEach(link => {
        link.addEventListener("click", this.hideMenu); // Adiciona evento de clique
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const mobileNavbar = new MobileNavbar(
      ".mobile-menu",
      ".sub-nav",
      ".sub-nav li"
    );
    mobileNavbar.init();
  });
  
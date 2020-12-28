const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('bx-x');
      nav.classList.toggle('show');
    });
  }
};

showMenu('header-toggle', 'nav-menu');

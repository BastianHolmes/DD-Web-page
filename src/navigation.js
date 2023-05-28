export function handleNavigation(){
  const anchor = document.querySelectorAll('a[href*="#"]');

  anchor.forEach(link => {
    link.addEventListener('click', function(event){
      event.preventDefault();

      const blockID = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(blockID);

      const topOffSet = 180;
      const elementPosition = scrollTarget.getBoundingClientRect().top
      const offSetPosition = elementPosition - topOffSet;

      window.scrollBy({
        top: offSetPosition,
        behavior: 'smooth'
      })
    })
  })
}

handleNavigation()
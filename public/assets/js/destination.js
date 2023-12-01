const filters = document.querySelectorAll('.filter');
for(const filter of filters) {
  const height = filter.parentElement.nextElementSibling.clientHeight;
  filter.parentElement.nextElementSibling.style.height = `${height}px`;
  
  filter.addEventListener('click',function(e){
    if(!filter.classList.contains('active')) {
      filter.parentElement.nextElementSibling.style.height = 0
      filter.classList.add('[transform:rotateZ(180deg)]');
      filter.classList.add('active')
    } else {
      filter.parentElement.nextElementSibling.style.height = `${height}px`;
      filter.classList.remove('[transform:rotateZ(180deg)]');
      filter.classList.remove('active')
    }
  });
}
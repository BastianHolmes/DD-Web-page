let handleChange = () => {
  let checkbox = document.querySelector("input[id=checkbox]");
    checkbox.addEventListener('change', function() {
      if(this.checked){
        document.body.setAttribute('dark', '');
      }
      else
      {
        document.body.removeAttribute('dark')
      }
  });
}
handleChange()
export default handleChange
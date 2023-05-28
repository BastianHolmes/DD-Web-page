import { dateConverter } from "./date";

function renderFunction(arr){
  const card = document.getElementById(arr[0].type)
  let htmlList = '';

  arr.forEach(({img, comment, date}) =>{
    htmlList += `
    <li class='content__card'>
      <img src="${img}" class='content__img'>
      <p class='content__comment'>${comment}</p>
      <span class='content__date'>${dateConverter(date)}</span>
      <button href="#" class='green-btn purschase'> Купить </button>
    </li>`
  })

  const html = `<ul class='content__cards'>${htmlList}</ul>`

  card.innerHTML = html;
}



export default renderFunction;
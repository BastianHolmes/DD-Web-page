export function dateConverter(date){
  const days = 
  [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
   'Пятница', 'Суббота'
  ]

  const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня','Июля'
   ,'Августа','Сентября','Октября','Ноября', 'Декабря'
] 
  
  const dateArr = date.split('.').map(el => el = +el)

  const dateObj = new Date(dateArr[2],dateArr[1]-1,dateArr[0])
  //Getting year
  const year = dateObj.getFullYear()

  //Getting Month
  const month = months[dateObj.getMonth()]
  
  //Getting day of week
  const dayOfWeek = days[dateObj.getDay()]

  //Getting number of week
  const numOfWeek = Math.ceil(dateObj.getDate() / 7)
  return `${dayOfWeek}, ${numOfWeek} неделя ${month} ${year}`;
}

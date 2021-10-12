const button = document.querySelector('button');
let img = document.querySelector('.img');
let url = "http://aws.random.cat//meow";


async function fethCat () { 
  try{
    const response = await fetch(url)
    const data = await response.json();
    img.src = data.file
    console.log(data);
  }catch(error){
      console.log(error)

  }
 }

button.addEventListener('click', () =>{
    fethCat()
})


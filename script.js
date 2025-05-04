//your JS code here. If required.
//your JS code here. If required.



let fontSize=document.getElementById("fontsize")

let color=document.getElementById("fontcolor")

let save=document.querySelector("input[type='submit']")
window.addEventListener("DOMContentLoaded",()=>{

	  const cookies = document.cookie.split('; ');

	cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
		  if (name === 'fontsize') {
            document.body.style.fontSize = value + 'px';
			  fontSize.value = value;
        } else if (name === 'fontcolor') {
            document.body.style.color = value;
			  color.value = value;
        }
    });
    save.addEventListener(("click"),(e)=>{

e.preventDefault();
		
const fontSizeValue=fontSize.value
const colorValue=color.value

	   document.cookie = `fontsize=${fontSizeValue}; path=/;`;
        document.cookie = `fontcolor=${colorValue}; path=/;`;


		  document.body.style.fontSize = fontSizeValue + 'px';
        document.body.style.color = colorValue;
    })

})
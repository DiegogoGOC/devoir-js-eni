const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let erreur;

    let input = document.querySelectorAll("input") 
    let txt = document.querySelector("textarea")
    if (txt.value){
        for (var i = 0; i < input.length; i++) {
            if (!input[i].value) {
                erreur = "Veuillez renseigner tous les champs";
            }
        }
    }else{
        erreur = "Veuillez renseigner tous les champs";
    }


    
    if (erreur){
        document.getElementById("error-message").style.display = 'block'
    }else{


        document.getElementById("error-message").style.display = 'none'
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let h3 = document.createElement("h3")
        let div3 = document.createElement("div")
        let p = document.createElement("p")


        h3.innerHTML= input[0].value+" "+input[1].value
        p.innerHTML= txt.value


        lieux = document.getElementById("comment-list")
        lieux.insertAdjacentElement("beforeend",div1)
        div1.insertAdjacentElement("beforeend",div2)
        div2.insertAdjacentElement("beforeend",h3)
        div2.insertAdjacentElement("beforeend",div3)
        div3.insertAdjacentElement("beforeend",p)

        div1.className += "flex space-x-4 text-sm text-gray-500";
        div2.className += "flex-1 py-10 border-t border-gray-200";
        h3.className += "font-medium text-gray-900";
        div3.className += "prose prose-sm mt-4 max-w-none text-gray-500";

        input[0].value = ""
        input[1].value = ""
        txt.value=""
    }
});
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-selector")
const currencySelectMain = document.querySelector(".currency-main")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currencyValueConvert = document.querySelector(".currency-value")//OUTRAS MOEDAS    
    
    const dolarToday = 5.14
    const euroToday = 5.57
    const libraToday = 6.51
    const bitcoinToday = 354.992
    const realToday = 1
 

if(currencySelect.value == "euro"){
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-De", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue /euroToday)
}
    if(currencySelect.value == "libra"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "UKD"
        }).format(inputCurrencyValue /libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("ja-ja", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue /bitcoinToday)
    }


    if(currencySelect.value == "real"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue /realToday)
    }

    if(currencySelect.value == "dolar"){
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }



    // desafio master





        if(currencySelectMain.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    

        if(currencySelectMain.value == "dolar")  
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    
        if(currencySelectMain.value == "bitcoin")
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-ja", {
                style: "currency",
                currency: "BTC"
            }).format(inputCurrencyValue )
        
        if(currencySelectMain.value == "libra")
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "UKD"
            }).format(inputCurrencyValue )

        if(currencySelectMain.value == "euro")
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue )   
}    






function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    
    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"        
    currencyImg.src = "./assets/estados-unidos (1) 1.png"
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"        
    currencyImg.src ="./assets/euro.webp"
}

if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"        
    currencyImg.src ="./assets/libra.png"
}

if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"        
    currencyImg.src ="./assets/bitcoin.png"
}

if(currencySelect.value == "real"){
    currencyName.innerHTML = "Real"        
    currencyImg.src ="./assets/brasil 2 (1).png"
}

convertValues()


}


        //Desafio master

        function changeCurrencyMain(){

            const currencyNameTop = document.getElementById("currency-name-top")
            const currencyImgTop = document.getElementById("currency-img-top")
        
            
                if(currencySelectMain.value == "real"){
                currencyNameTop.innerHTML = "Real"        
                currencyImgTop.src ="./assets/brasil 2 (1).png"    
            }
                if(currencySelectMain.value == "euro"){
                currencyNameTop.innerHTML = "Euro"  
                currencyImgTop.src ="./assets/euro.webp"    
            }


            if(currencySelectMain.value == "libra"){
                currencyNameTop.innerHTML = "Libra" 
                currencyImgTop.src ="./assets/libra.png"       
            }1
                if(currencySelectMain.value == "bitcoin"){
                currencyNameTop.innerHTML = "Bitcoin"   
                currencyImgTop.src ="./assets/bitcoin.png"    
            }

            if(currencySelectMain.value == "dolar"){
                currencyNameTop.innerHTML = "Dólar americano"        
                currencyImgTop.src = "./assets/estados-unidos (1) 1.png"

            }
           
        }  
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
currencySelectMain.addEventListener("change",  changeCurrencyMain)



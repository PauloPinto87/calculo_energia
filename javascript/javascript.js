function consultar() {
    var consumo = Number(document.querySelector('#iconsumo').value)
    var impEspeEnerg = consumo * 0.001
    var IVA6 = 0.06
    var IVA23 = 0.23
    var kWh = ''
    const contrAudioVisu = 2.85
    const DGEG = 0.07

     //Luzboa
    
     var kWh = 0.2031

    if (consumo < 3000) {
        alert(`O IVA nessa conta de luz será ${ kWh * consumo * IVA23}`)
    }
    

    var total = consumo + impEspeEnerg + contrAudioVisu + DGEG 

   
    




}
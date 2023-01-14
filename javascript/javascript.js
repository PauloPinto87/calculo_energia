function consultar() {
    var consumo = Number(document.querySelector('#iconsumo').value)

    var impEspeEnerg = consumo * 0.001
    var energContrat = ''
    var kWh = ''
    var empresa = ''
    var MIBEL = ''
    var totalImposto = ''
    var tudoIVA23 = ''
    var tudoIVA13 = ''
    var tudoIVA6 = ''

    const contrAudioVisu = 2.85
    const DGEG = 0.07


    // Inicio
    //Variaveis dessa empresa
    empresa = 'EZU Energia'
    energContrat = 0.1557
    kWh = 0.1372
    MIBEL = 0.04
    //PODERIA COMEÇAR O LOOPING
    // Verifica o quanto passa de 100 kWh de consumo
    if (consumo > 100) {
        var consumo13 = 100
        var consumo23 = Math.abs(consumo-100)
    }
    else {
        var consumo13 = consumo
    }
    //Aplica os impostos expecíficos nas variáveis específicas
    tudoIVA23 = (energContrat*30 + DGEG + impEspeEnerg + (kWh*consumo23) + (MIBEL*consumo))*1.23
    tudoIVA13 = (consumo13 * kWh)*1.13
    tudoIVA6 = (contrAudioVisu)*1.06
    //Soma os valores sem e com impostos de todos os níveis!
    total = tudoIVA23 + tudoIVA13 + tudoIVA6
    //Escreve no DOM o resultado
    document.querySelector('#idivresult').innerHTML += `${empresa} = `
    document.querySelector('#idivresult').innerHTML += `${total.toFixed(2)}€`
    //PODERIA TERMINAR O LOOPING
    //FIM
    var lista = new Map()
    lista.set('Luzboa', 0.0282, 0.1691)
    alert(return[])
    
}
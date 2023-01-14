function consultar() {
    //Limpa no DOM a div de resultado
    document.querySelector('#idivresult').innerHTML = ''
    const consumo = Number(document.querySelector('#iconsumo').value)
    //variáveis
    var impEspeEnerg = consumo * 0.001
    var energContrat = ''
    var kWh = ''
    var empresa = ''
    var MIBEL = 0.04
    var tudoIVA23 = ''
    var tudoIVA13 = ''
    var tudoIVA6 = ''
    //constantes
    const contrAudioVisu = 2.85
    const DGEG = 0.07
    //Lista das empresas, preço do kWh e da potência contrata por dia.
    const listaEmpresas = [
        {empresa:'Luzboa (ind*)', kWh: 0.0282, energContrat: 0.1691, MIBEL: 0.04},
        {empresa:'Luzigás( ind*)', kWh: 0.0361, energContrat: 0.2493, MIBEL: 0.04},
        {empresa:'REPSOL (ind*)', kWh: 0.0420, energContrat: 0.2198, MIBEL: 0.04},
        {empresa:'Gold Energy', kWh:0.1465, energContrat:0.2928, MIBEL: 0.00},
        {empresa:'Nabalia (ind*)', kWh:0.1239, energContrat:0.1198, MIBEL: 0.04},
        {empresa:'Iberdrola', kWh:0.1242, energContrat:0.2442, MIBEL: 0.04},
        {empresa:'Alpha', kWh:0.1187, energContrat:0.3198, MIBEL: 0.04},
        {empresa:'EZU Energia', kWh:0.1372, energContrat:0.1557, MIBEL: 0.04},
        {empresa:'Endesa', kWh:0.1450, energContrat:0.2943, MIBEL: 0.02},
        {empresa:'GALP', kWh:0.1415, energContrat:0.1829, MIBEL: 0.04},
    ]
    //Teste caso o consumo zero ou negativo.
    if (consumo < 0) {
        document.querySelector('#idivresult').innerHTML = '[-ERRO-] - Valor de consumo informado não valido. Tente novamente!'
        document.querySelector('#idivresult').style.color = 'red'
    }
    else {
        //Looping aplicando o nome, preço do kWh e da potência contratada.
        document.querySelector('#idivresult').style.color = 'black'
        document.querySelector('#idivresult').innerHTML = `O consumo informado foi <strong>${consumo}kWh</strong>, segue abaixo as ampresas e os valores aproximados: <br> <br>`
        for ({empresa, kWh, energContrat, MIBEL} of listaEmpresas) {
            // Verifica o quanto passa de 100 kWh de consumo
            if (consumo > 100) {
                var consumo13 = 100
                var consumo23 = Math.abs(consumo-100)
            }
            else {
                var consumo13 = consumo
                var consumo23 = ''
            }
            //Aplica os impostos expecíficos nas variáveis específicas
            tudoIVA23 = (energContrat*30 + DGEG + impEspeEnerg + (kWh*consumo23) + (MIBEL*consumo))*1.23
            tudoIVA13 = (consumo13 * kWh)*1.13
            tudoIVA6 = (contrAudioVisu)*1.06
            //Soma os valores sem e com impostos de todos os níveis!
            total = tudoIVA23 + tudoIVA13 + tudoIVA6
            //Escreve no DOM o resultado
            document.querySelector('#idivresult').innerHTML += `${empresa} = ${total.toFixed(2)} €<br>`

    }
    }
       

}
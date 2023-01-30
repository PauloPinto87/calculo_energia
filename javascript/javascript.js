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
    var data = '08/01/2023'
    //constantes
    const contrAudioVisu = 2.85
    const DGEG = 0.07
    //Lista das empresas, preço do kWh e da potência contrata por dia.
    const listaEmpresas = [
        {empresa:'Luzboa (ind*)', kWh: 0.0282, energContrat: 0.1691, MIBEL: 0.04, contacto:'232 099 652'},
        {empresa:'Luzigás( ind*)', kWh: 0.0361, energContrat: 0.2493, MIBEL: 0.04, contacto:'808 203 825'},
        {empresa:'REPSOL (ind*)', kWh: 0.0420, energContrat: 0.2198, MIBEL: 0.04, contacto:'210 540 000'},
        {empresa:'Gold Energy', kWh:0.1465, energContrat:0.2928, MIBEL: 0.00, contacto:'808 205 005'},
        {empresa:'Nabalia (ind*)', kWh:0.1239, energContrat:0.1198, MIBEL: 0.04, contacto:'210 518 954'},
        {empresa:'Iberdrola', kWh:0.1242, energContrat:0.2442, MIBEL: 0.04, contacto:'800 606 060'},
        {empresa:'Alpha', kWh:0.1187, energContrat:0.3198, MIBEL: 0.04, contacto:'808 203 859'},
        {empresa:'EZU Energia', kWh:0.1372, energContrat:0.1557, MIBEL: 0.04, contacto:'213 847 484'},
        {empresa:'Endesa', kWh:0.1450, energContrat:0.2943, MIBEL: 0.02, contacto:'800 110 148'},
        {empresa:'GALP', kWh:0.1415, energContrat:0.1829, MIBEL: 0.04, contacto:'800 200 200'},
    ]
    //Teste caso o consumo zero ou negativo.
    if (consumo < 0) {
        document.querySelector('#idivresult').innerHTML = '[-ERRO-] - Valor de consumo informado não valido. Tente novamente!'
        document.querySelector('#idivresult').style.color = 'red'
    }
    else {
        //Looping aplicando o nome, preço do kWh e da potência contratada.
        document.querySelector('#idivresult').style.color = 'black'
        document.querySelector('#idivresult').innerHTML = `<p>Consumo informado <strong>${consumo}kWh</strong>, os valores são aproximados e tem referência em <strong>${data}</strong>. </p> <br>`
        for ({empresa, kWh, energContrat, MIBEL, contacto} of listaEmpresas) {
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
            document.querySelector('#idivresult').innerHTML += `${empresa} = ${total.toFixed(2)} €. <a href="tel:${contacto}"><i class="fa-solid fa-phone"></i> ${contacto}</a><br>`

    }
        document.querySelector('#idivresult').innerHTML += '<br>'
        document.querySelector('#iind').style.display = 'block'
    }
       

}
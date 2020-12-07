const valueName = document.querySelector('#value-name');
const currencyName = document.querySelector('#currency-name');
const buttonConvert = document.querySelector('#btn-convert');

buttonConvert.addEventListener('click', (event) => {
    let valueVariable = parseInt(valueName.value);;
    let currencyVariable = currencyName.value;

    let url = `https://api.coindesk.com/v1/bpi/currentprice/eur.json`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            let output;
            switch(currencyVariable){
                case "EUR":
                    output = data.bpi.EUR;
                    break;
                case "USD":
                    output = data.bpi.USD;
                    break;
            }
                
            console.log(output);

            let rateFloat = parseFloat(output.rate_float);
            let rateMultiplier = valueVariable;
            let rateFinal = rateFloat * rateMultiplier;

            html = `
                <h1>Results</h1>
                <h3>Thank you! Here are the results:</h3>
                <h4>
                    BitCoin's value: ${rateMultiplier}<br>
                    BitCoin's current rate: <br>
                    ${currencyVariable} rate: ${rateFloat}<br>
                    Value in ${currencyVariable}: ${rateFinal}
                </h4>
                `;
            console.log("Value: "+rateMultiplier+"; Rate: "+rateFloat+"; Final Rate: "+rateFinal);
            document.querySelector('.results').innerHTML = html;

        })
        .catch(error => {
            console.log(error);
        });

    event.preventDefault();
});
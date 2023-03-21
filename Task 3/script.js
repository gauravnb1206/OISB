$('form').submit(function (event) {
    event.preventDefault();
    convertInputDegree()
});

function convertInputDegree() {

    let inputDegree = parseInt($('#inputDegree').val());
    let selectInputDegreeType = $('#selectInputDegreeType').val();
    let conversionType = $('#selectConversionType').val();

    let resultValue = "";

    switch (selectInputDegreeType) {

        case "C":
            resultValue = cTo(inputDegree, conversionType);
            break;

        case "F":
            resultValue = fTo(inputDegree, conversionType);
            break;
    }

    if (isNaN(inputDegree)) {
        $('#convertedDegree').text('');
        return;
    }

    $('#convertedUnit').text(conversionType)


    // To update the Degree Value
    $('#convertedDegree').text(resultValue.toFixed(2));

}


// Fahrenheit Converter
function fTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {
        case 'F':
            temperature = inputDegreeValue;
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 32) * (5 / 9));
            break;
        }
    return temperature;
}

// Celcius Converter


function cTo(inputDegreeValue, conversionDegreeType) {


    let temperature = '';

    switch (conversionDegreeType) {

        case 'C':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue * (9 / 5)) + 32);
            break;

    }

    return temperature;
}

function kTo(inputDegreeValue, conversionDegreeType) {


    let temperature = '';

    switch (conversionDegreeType) {
        case 'F':
            temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 273.15));
            break;

    }
    return temperature;
}

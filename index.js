function numberFormatter(number, options) {
    
  if ( !parseInt(number) ) return false;

  options = {
    decimalSeparator: options?.decimalSeparator ? options.decimalSeparator : ',',
    forceShowDecimals: options?.forceShowDecimals ? options.forceShowDecimals : false
  }

  const default_decimal_separator = ',';
  const default_decimal_point = '.';
  const isSeparatorValid = options.decimalSeparator === '.' || options.decimalSeparator === ',' ? true : false;

  const decimal_separator = options.decimalSeparator &&
                          isSeparatorValid ? options.decimalSeparator : default_decimal_separator

  const decimal_point = options.decimalSeparator &&
                          isSeparatorValid && 
                          options.decimalSeparator !== default_decimal_separator ? default_decimal_separator : default_decimal_point


  const parsedNumber = parseFloat(number);
  const parsedNumberToString = parsedNumber.toString();

  const hasDecimal = parsedNumberToString.includes(default_decimal_point) ? true : false;

  const reversed_whole_toArray = hasDecimal ?
                          parsedNumberToString.split(default_decimal_point)[0].split('').reverse()
                          : parsedNumberToString.split('').reverse()
      
  const decimal_part = hasDecimal ?
                          parsedNumberToString.split(default_decimal_point)[1]
                          : '00';                    

  var counter = 0
  const formatted_whole = reversed_whole_toArray.map((char, index) => {
        if ( counter === 2 && reversed_whole_toArray.length > 3 && index !== reversed_whole_toArray.length - 1 ) {
          counter = 0;
          return `${decimal_point}${char}`
        } 
        counter++;
        return char
  }).reverse().join('')



  return hasDecimal || options.forceShowDecimals ? `${formatted_whole}${decimal_separator}${decimal_part}` : formatted_whole
}

module.exports = numberFormatter
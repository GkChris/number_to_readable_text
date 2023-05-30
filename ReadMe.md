# number-to-readable-text

## Description

numberFormatter() function converts a number (Works both with integer and float types) to string with point and decimal separators.

## Install 

```
npm i number-to-readable-text
```


## Usage 

```Javascript
const numberFormatter = require('number-to-readable-text');

numberFormatter(<number>, <options>);

console.log(numberFormatter(1000000.12)) // output > '1.000.000,12'
```

## Arguments

- number (required)

- options (optional)

### Options

| Option             | Type     | Description                                                             | Default  |
|--------------------|----------|-------------------------------------------------------------------------|----------|
| decimalSeparator   | string   | decimalSeparator has to be a string of a dot ('.') or a comma (',').    | (',')    |
| forceShowDecimals  | boolean  | True adds two zeros as decimals even if the given number is integer.    | false    |


## Exceptions
>Function return false if the given number argument is not a valid number. If the separator is not a comma or a dot string the EU format is used as default


## Repository

[git@github.com:GkChris/number_to_readable_text.git](https://github.com/GkChris/number_to_readable_text.git)

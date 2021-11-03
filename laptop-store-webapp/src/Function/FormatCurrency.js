export default function FormatCurrency(nationID,style,currency,number){
    return Intl.NumberFormat(nationID,{style:style,currency:currency}).format(number);
}
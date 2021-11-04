class Solver{
    constructor(){}
    formatCurrency(nationID,style,typeCurrency,number){
        return Intl.NumberFormat(nationID,{style:style,currency:typeCurrency}).format(number);
    }
}
export default Solver;
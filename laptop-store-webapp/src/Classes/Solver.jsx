class Solver{
    constructor(){}
    formatCurrency(nationID,style,typeCurrency,number){
        return Intl.NumberFormat(nationID,{style:style,currency:typeCurrency}).format(number);
    }
    getPercentPrice(newPrice,oldPrice){
        return (100*newPrice/oldPrice);
    }
    getPercentNumber(number){
        return  (100/number);
    }
    getAPIString(URL,Path){
        return URL+Path;
    }
}
export default Solver;
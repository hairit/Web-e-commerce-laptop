import React from 'react'

export default function FormatCurency() {
    function format_curency(price){
        price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        return price;
        };
    return (
        <div>
            
        </div>
    )
}

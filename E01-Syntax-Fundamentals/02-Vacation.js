function solve(count, type, dayOfWeek) {

    let priceOneMan;

    switch (type) {
        case 'Students': {
            if (dayOfWeek == 'Friday') {
                priceOneMan = 8.45;
            } else if (dayOfWeek == 'Saturday') {
                priceOneMan = 9.8;
            } else {
                priceOneMan = 10.46;
            }
            break;
        }

        case 'Business': {
            if (dayOfWeek == 'Friday') {
                priceOneMan = 10.9;
            } else if (dayOfWeek == 'Saturday') {
                priceOneMan = 15.6;
            } else {
                priceOneMan = 16;
            }
            break;
        }

        case 'Regular': {
            if (dayOfWeek == 'Friday') {
                priceOneMan = 15;
            } else if (dayOfWeek == 'Saturday') {
                priceOneMan = 20;
            } else {
                priceOneMan = 22.5;
            }
            break;
        }
    }

    let totalPrice;

    if (type == 'Students' && count >= 30) {
        console.log('Total price: ' + ((count * priceOneMan) * 0.85).toFixed(2));
    } else if (type == 'Business' && count >= 100) {
        console.log('Total price: ' + ((count - 10) * priceOneMan).toFixed(2));
    } else if (type == 'Regular' && count >= 10 && count <= 20) {
        console.log('Total price: ' + ((count * priceOneMan)*0.95).toFixed(2));
    }else{
        console.log('Total price: ' + (count * priceOneMan).toFixed(2));
    }
    
}


solve(30,'Students', 'Sunday');

    solve(40,
        "Regular",
        "Saturday");

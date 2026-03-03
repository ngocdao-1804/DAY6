//1 hàm findDayOfWeek
// 3 ts: date, month, year
// tra thu trong tuần: thứ 2...
// !:   const d = new Date(year, month -1 , day).getDay();/
let daysOfFeb;
const findDayOfWeek =(day, month, year) => {
    if(year%4 === 0){
        daysOfFeb = 29;
    } else {
        daysOfFeb = 28;
    }

    switch (month){

        case 2:{
            if(day <1 || day >daysOfFeb){
                return `ngày không hợp lệ `;
               
            } 
            break;
        }
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:{
            if(day < 1 || day > 31){
                return `ngày không hợp lệ `;
                
            }
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:{
            if(day <1 || day > 30){
                return `ngày không hợp lệ `;
                
            }
            break;
        }
        default:{
            return `tháng không hợp lệ `;
            
        }
    }
    const d = new Date(year, month -1 , day).getDay();
    switch (d) {
        case 0:{
            return `Chủ Nhật `;
        }
        case 1:{
            return `Thứ 2 `;
        }
        case 2:{
            return `Thứ 3 `;
        }
        case 3:{
            return `Thứ 4 `;
        }
        case 4:{
            return `Thứ 5 `;
        }
        case 5:{
            return `Thứ 6 `;
        }
        case 6:{
            return `Thứ 7 `;
        }
    }

}
console.log(findDayOfWeek(3,3,2026));

//calculator
// 3 ts:num1, 2, 3
// ktra phép toán, thực hiện phép tt
// Trả kq, viết = Arrow Function/

// const caculator = (number1, number2, operator) => {
//     switch (operator){
//         case "+":{
//             return number1 + number2
//         }
//          case "-":{
//             return number1 - number2
//         }
//          case "*":{
//             return number1 * number2
//         }
//          case "/":{
//             return number1/number2
//         }
//          case "/0":{
//             return `khong6 the chia cho 0`
//         } 
//     }}
//     console.log(caculator(2, 4, "*"));
//     console.log(caculator(2, 1, "/"));
// return
// hàm calculatePytago
// 2 tham số: canhgocvuong1, canhGocvuong2
// tính cạnh huyền
// mũ: Math.pow(digit, digit)
// căn: Math.squrt()/
// const calculatePytago =(canhGocvuong1,canhGocvuong2)=> {
//     let canhHuyen = Math.sqrt(Math.pow(canhGocvuong1,canhGocvuong2));
//     return canhHuyen;
// }
// console.log(calculatePytago(3,4));



// Function calculation (length, width) {
//     let area = width * length;
//     return area
// }
// console.log(calculationArea(3,5))

// bai 2: 1 hàm introduce
// Nhận 3 tham số: name, age, address
// In: Xin chào, tôi tên là ...
// Năm nay tôi .. tuổi
// Tôi đang sinh sống ở//
// function introduce(name, age, address){
//     console.log(`Xin chào, tôi tên là ${name}, năm nay tôi ${age} tuổi, tôi đang sinh sống ở ${address} `);
// }
// introduce(`Đào`, 20, `thành phố Hồ Chí Minh`)

// bai 1 hàm printName
// 1 tham số tên name
// trong hàm in ra name đó
// function printName(name){
//     console.log(`Hello ${name}`);
// }
// printName(`Dao92`);
// printName(`Lucy`);

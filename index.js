
//return
// hàm calculatePytago
// 2 tham số: canhgocvuong1, canhGocvuong2
// tính cạnh huyền
// mũ: Math.pow(digit, digit)
// căn: Math.squrt()/
function calculatePytago(canhGocvuong1,canhGocvuong2){
    let canhHuyen = Math.sqrt(Math.pow(canhGocvuong1,canhGocvuong2));
    return canhHuyen;
}
console.log(calculatePytago(3,4));



// Function calculation (length, width) {
//     let area = width * length;
//     return area
// }
// console.log(calculationArea(3,5))

//bai 2: 1 hàm introduce
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

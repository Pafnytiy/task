const a = +(prompt("Введите номер столбца где стоит ладья (от 1 до 8)"));
const b = +(prompt("Введите номер строки где стоит ладья (от 1 до 8)"));
const x = +(prompt("Введите номер столбца куда переместится ладья (от 1 до 8)"));
const y = +(prompt("Введите номер строки  куда переместится ладья (от 1 до 8)"));
if ((a - x) <= 1) {
    if ((b - y) <= 1) {
        console.log("YES");
    }
} else {
    console.log("NO");
}
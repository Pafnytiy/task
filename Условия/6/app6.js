const num = +(prompt("Введите число"));
if (num < 0) {
    console.log("Число меньше 0");
} else if (num === 0) {
    console.log("Это 0");
} else if (num > 0) {
    console.log("Число больше 0");
}
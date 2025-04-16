function hello(name) {
    return `hello ${name}`;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// 3. Colour Mix
function colour_mix(rgb_colour1, rgb_colour2) {
    const validColours = ['red', 'green', 'blue'];
    if (!validColours.includes(rgb_colour1) || !validColours.includes(rgb_colour2)) return "Error";

    const combo = new Set([rgb_colour1, rgb_colour2]);

    if (combo.size === 1) return rgb_colour1;
    if (combo.has('red') && combo.has('blue')) return 'fuchsia';
    if (combo.has('red') && combo.has('green')) return 'yellow';
    if (combo.has('green') && combo.has('blue')) return 'aqua';

    return "Error";
}

// 4. Largest Product
function largest_product(val1, val2, val3) {
    const [a, b] = [val1, val2, val3].sort((x, y) => y - x);
    return a * b;
}

// 5. Day of the Week
function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return day_num >= 1 && day_num <= 7 ? days[day_num - 1] : "Error";
}

// 6. Pay Raise
function pay_raise(status, years, salary) {
    let raise = 0;

    if (status === 'F') {
        if (years >= 10) raise = 0.05;
        else if (years < 4) raise = 0.015;
        else raise = 0.02;
    } else if (status === 'P') {
        if (years > 10) raise = 0.03;
        else if (years < 4) raise = 0.01;
        else raise = 0.02;
    } else {
        return salary;
    }

    return parseFloat((salary * (1 + raise)).toFixed(2));
}

// 7. Leap Year
function is_leap(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
}

export {
    hello,
    fahrenheitToCelsius,
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
};

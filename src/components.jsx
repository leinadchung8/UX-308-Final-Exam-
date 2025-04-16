import {
    fahrenheitToCelsius,
    hello,
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
} from './functions.js';

function Question1() {
    return (
        <section>
            <h2>1. Write a function that takes a _name_ as an argument and returns a string that contains "hello"</h2>
            <p>hello("Rich") = {hello("Rich")}</p>
            <p>hello("Bill") = {hello("Bill")}</p>
            <p>hello("Chris") = {hello("Chris")}</p>
        </section>
    );
}

function Question2() {
    return (
        <section>
            <h2>2. Write a function that converts from fahrenheit to celsius</h2>
            <p>fahrenheitToCelsius(32) = {fahrenheitToCelsius(32)}</p>
            <p>fahrenheitToCelsius(212) = {fahrenheitToCelsius(212)}</p>
            <p>fahrenheitToCelsius(70) = {fahrenheitToCelsius(70)}</p>
        </section>
    );
}

function Question3() {
    return (
        <section>
            <h2>3. Colour Mix</h2>
            <p>red + blue = {colour_mix('red', 'blue')}</p>
            <p>red + green = {colour_mix('red', 'green')}</p>
            <p>blue + blue = {colour_mix('blue', 'blue')}</p>
        </section>
    );
}

function Question4() {
    return (
        <section>
            <h2>4. Largest Product</h2>
            <p>-8, 12, 20 = {largest_product(-8, 12, 20)}</p>
            <p>3, 5, 9 = {largest_product(3, 5, 9)}</p>
            <p>2.2, 1.5, 0.9 = {largest_product(2.2, 1.5, 0.9)}</p>
        </section>
    );
}

function Question5() {
    return (
        <section>
            <h2>5. Day of the Week</h2>
            <p>1 = {day_of_the_week(1)}</p>
            <p>4 = {day_of_the_week(4)}</p>
            <p>9 = {day_of_the_week(9)}</p>
        </section>
    );
}

function Question6() {
    return (
        <section>
            <h2>6. Pay Raise</h2>
            <p>F, 2 yrs, $25,000 = {pay_raise('F', 2, 25000)}</p>
            <p>P, 11 yrs, $30,000 = {pay_raise('P', 11, 30000)}</p>
            <p>F, 12 yrs, $50,000 = {pay_raise('F', 12, 50000)}</p>
        </section>
    );
}

function Question7() {
    return (
        <section>
            <h2>7. Leap Year</h2>
            <p>1999 = {is_leap(1999).toString()}</p>
            <p>2000 = {is_leap(2000).toString()}</p>
            <p>1900 = {is_leap(1900).toString()}</p>
        </section>
    );
}

export {
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
    Question6,
    Question7
};

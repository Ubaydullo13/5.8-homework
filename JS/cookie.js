// Устанавливаем cookie с именем "user" и значением "John Doe" на 365 дней
document.cookie = "user=John Doe; expires=" + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";


let allCookies = document.cookie;


let cookiesArray = allCookies.split(';');

// Проходим по массиву и ищем cookie с нужным именем
for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf("user=") === 0) {
        let value = cookie.substring("user=".length, cookie.length);
        console.log("Значение cookie с именем 'user': " + value);
        break;
    }
}

document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


# convertPhraseToVariableName
Данное приложение преобразует словосочетание в имя переменной в формате lowerCamelCase, ориентированном в частности на написание кода на JavaScript. Логика реализована с помощью Vue.js, вёрстка HTML/CSS, методология БЭМ. Копирование в буфер обмена реализовано на основе дополнительно подключённой библиотеки [copy-js](https://www.npmjs.com/package/copy-js).


____
Отдельный текст
____

# Заголовок 1 уровня
## Заголовок 2 уровня
### Заголовок 3 уровня
#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня
~~Текст для зачеркивания~~
____
**Жирный текст**
*Наклонный текст*
____
***Жирный наклонный текст***
____
__Жирный текст__
_Наклонный текст_
____
___Жирный наклонный текст___
____
__*~~Странный текст~~*__
____
**_Текст_**    
*__Текст__*

Заголовок 2
--

:white_check_mark: Сделано    
:negative_squared_cross_mark: Не сделано    
:black_square_button: Делать или нет?

> Цитата
> > Цитата
____
> > Цитата
____
В предложении есть выделенное `слово`.
____

```
Выделенное предложение.
```

```javascript
function factorial(n) {
  let result = 1;
  
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

factorial(4);
```
____
__Купить:__
+ картошку
+ морковь
+ ветчину
- сало

# 1. Написать модуль, который будет включать в себя следующие методы.
1. Преобразование строки к нижнему регистру, но первая буква большая “Abscd”
2. Преобразование строки с целью правильно расстановки пробелов. “Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.” =>
“Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.”
3. Посдчитывающие количество слов в строке.
4. Подсчитывающий, уникальные слова. “Текст, в котором слово текст несколько раз встречается и слово тоже” - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. Самостоятельно придумать наиболее удачную структуру данных для ответа.
***
# 2. Написать модуль, который способен выполнять операции с числами любой длины. На вход подаются 2 строки, на выходе строка.
4 метода для сложения, умножения, вычитания и деления.
***
# 3. Создать класс данных “Товар” с полями:
1. Название
2. Цена
3. Количество
4. Описание

Наполнить массив объектами такого класса.

Написать метод, который получает строку вида:
“name-contains-fd&price-=2&quantity->5&description-ends-abc” или “name-starts-fd&quantity-=5”

На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых)

# Быстрый экскурс в Todo list

Перед ознакомлением с файлами или по ходу знакомства с кодом вы можете воспользоваться этой инструкцией. Я её разбил на поэтапные части. Надеюсь, что это сократит вам время :) Вот важные моменты, которые я выделил при разработке тестового задания

- Сервер при помощи Express
- Инкапсуляция API в отдельный класс API и использование axios
- Вспомогательные компоненты Spinner, ErrorIndicator, ErrorBoundry
- Интересные action creator для создания / изменения / удаления задач с комбинирование action creator
- Свои сокращенные редюсеры для задач и исполнителей
- Схема компонентов
- Компонент AddForm (форма добавления задачи) при помощи Formik и Yup
- Компонент SelectInput (выбор исполнителя) при помощи react-select
- Обработка ошибок

# Сервер при помощи Express

Настройки сервера расположены в папке api / routes / testApi.js

Сервер соединяет в себе функции базы данных. На нем находится информация с исполнителями и задачами
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/1.1.jpg)
 
На сервере при добавлении / изменении задачи происходит сортировка задач по приоритету
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/1.2.jpg)
  
Для увеличения / уменьшения приоритета на кнопки добавлена функция в которое мы передаём количество вторым аргументов (+1) или (-1). Далее это значение передаётся на сервер и складывается с предыдущим значением
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/1.3.jpg)

# Инкапсуляция API в отдельный класс API и использование axios

Находится в client / src / api / api.js
Чтобы неиспользовать запросы к серверу внутри компонентов я создал отдельный класс API. В него вынес 5 функций.
- getExecutors (получить исполнителей)
- getTodos (получить задачи)
- addTodo (добавить задачу)
- changeTodo (изменить задачу)
- deleteTodo (удалить задачу)
  
Запросы я для начала сделал через fetch, потом переделал на axios. В свойство data передаю нужную информацию и потом на сервере работаю с ней.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/2.jpg)

# Вспомогательные компоненты Spinner, ErrorIndicator, ErrorBoundry
- Spinner. Загрузчик, который вертится в момент загрузки (у нужного reduser в state стоит isLoading: true). Далее в компоненте если isLoading: true - возвращаем вместо разметки этот компонент
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/3.1.jpg)

- ErrorIndicator. Содержит сообщение об ошибке, которое передаём в его props
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/3.2.jpg)

- ErrorBoundry. Создан через класс с использование ComponentWillCatch. Оборачивает всё приложение. Если будет ошибка, которая не была отловлена обычным .catch, то этот компонент выведет свою ошибку "Упс, что то пошло не так"
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/3.3.jpg)

# Интересные action creator для создания / изменения / удаления задач с комбинирование action creator
Рассмотрю один из action creator - добавление задачи. 

В него мы импортируем класс для работы с API (потребуется функция addTodo). Этот action creator создан при помощи thunk. Для начала мы диспочим действие 'ADD_TODO_REQUEST', которое создаёт момент загрузки (isLoading: true), затем кидаем запрос на сервер и обрабатываем успех и ошибку диспочем действия ('ADD_TODO_SUCCESS' и 'ADD_TODO_FAILED').

После всех этих процедур мы диспочим импортируемый action creator getTodo. То есть схема такая - добавь задачу на сервер / получи задачи с сервера
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/4.jpg)

# Свои сокращенные редюсеры для задач и исполнителей
TodoReducer имеет 4 типа действий (они относятся конкретно к задачам). Одинаковые типы действий были сгруппированы

- GetTodos
- AddTodo
- ChangeTodo
- DeleteTodo
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/5.1.jpg)

ExecutorReducer имеет 1 тип действия
- GetExecutor
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/5.2.jpg)

RootReducer при помощи combineReducers объединяет в store два этих reducer
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/5.3.jpg)

# Компонент AddForm (форма добавления задачи) при помощи Formik, Yup

Для работы с формой я использовал популярную библиотеку Formik. Вся форма была создана на версии Formik v.2. Разметка максимально понятно и просто отображает к чему относится конкретный элемент.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/6.1.jpg)

Для валидации я использовал библиотеку Yup. Поля имеют как одиночные, так и множественные сообщения об ошибках.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/6.2.jpg)

По нажатию на кнопку создать задачу срабатывает функция onSubmit. Для начала она устанавливает setSubmitting в true, что позволяет задизаблить кнопку, далее диспочит добавление задачи и очищает всю форму.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/6.3.jpg)

# Компонент SelectInput (выбор исполнителя) при помощи react-select
Для селекта я использовал популярную библиотеку react-select. Он через props получает нужный список для отображения и внутри создаёт нужный массив с объектами при помощи метода MAP. Таким образом select может быть максимально переиспользован.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/7.1.jpg)

Внутри селекта я создал свои функции onChange, value, onBlur (так требует документация). 
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/7.2.jpg)

Также я стилизовал отдельные части селекта под стиль сайта
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/7.3.jpg)

# Обработка ошибок
Так как reducer имеет информацию об ошибке, я в нужных компонентах получаю ошибку из reducer и вывожу ErrorIndicator с индивидуальным сообщением об ошибке.
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.1.jpg)

Ошибки можно протестировать, добавив в файл API некорректную ссылку для запроса

- GetExecutor (ошибка выводится в компоненте AddForm)
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.2.jpg)

- GetTodos (ошибка выводится в компоненте TodoList)
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.3.jpg)

- AddTodo (ошибка выводится в компоненте TodoList)
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.4.jpg)

- ChangeTodo (ошибка выводится в компоненте TodoList)
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.5.jpg)

- DeleteTodo (ошибка выводится в компоненте TodoList)
![Image alt](https://github.com/dmitrysurkin/testtodo/raw/master/screenshots/8.6.jpg)


# Заключение

Проект был очень интересным, спасибо за опыт! Надеюсь, что вам всё понравится :) Если будут комментария по коду - всегда рад их услышать!

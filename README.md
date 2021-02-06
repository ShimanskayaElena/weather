# Weather

## Тестовое задание: 
берем любой API для сливания погоды, пишем маленькое SPA, где отображаем карточки
 с названиями городов и погодой, в хедере кнопка для вызова модального окна,
  чтобы добавить город, после добавления город автоматически превращается в карточку,
   в хедере есть две кнопки: старт отслеживания и стоп, когда нажата одна, вторая,
    соответственно, отжата. период запроса - 60сек. иконки погоды берем из
     https://fontawesome.com/icons?c=weather или https://material.io/resources/icons/?icon=update&style=baseline .
      если нужен дизайн карточки, я нарисую. также делаем футер, если карточек много,
       они прячутся за футер, при скроллинге футер остается прибитым.
        верстка не должна ломаться в IE, пишем на флексах, желательно использовать препоцессор и БЭМ.
         не юзаем ViewEncapsulation.None, но  используем стратегию обнаружения изменений OnPush,
          интервалы реализуем при помощи Observable.
           приложение должно уметь обрабатывать ошибки (введен неправильный город и т.д.) .

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

1.Установить git
2.Скачать репозиторий тестов (https://gitlab.devlogics.ru/artlogics/tms.tests_v2 )
Установить node (10.19.0)
Установить yarn  https://yarnpkg.com/en/
В корне директории с тестами выполнить команду yarn install
Переключить ветку с master на develop в репозитории
поместить тест в папку features\tests\test
В консоли запустить тесты командой:

npx wdio wdio.stage.conf.js --suite test

для запуска по юл команды
npx wdio wdio.stage.conf.ts --suite Consumer
npx wdio wdio.stage.conf.ts --suite IE
npx wdio wdio.stage.conf.ts --suite Ukraine
npx wdio wdio.bacardistage.conf.ts --suite Bacardi
npx wdio wdio.vistakonstage.conf.ts --suite Vistakon
npx wdio wdio.ecolabstage.conf.ts --suite Ecolab
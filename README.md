# Ionic audio Record + Player
Example of audio recording and player. Boilerplate para Ionic4 + Angular7 + Sass + Storybooks + Cypress.

## Demo
![alt text][logo]

The construction of this example has 3 key modules: 
`src/shared/components/audio-capture-input/`: for recording. 
`src/shared/components/audio-track/`: for the player. 
`src/shared/ui-components/audio-capture-and-player/`: the union of both.

## Project

### Base configuration

- [ ] [Angular](https://angular.io/)
- [ ] [Ionic](https://ionicframework.com)
- [ ] [Tslint](https://palantir.github.io/tslint/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [Jasmine](https://jasmine.github.io/)
- [ ] [Karma](https://karma-runner.github.io/latest/index.html)
- [ ] [Phantom](http://phantomjs.org/)
- [ ] [ngx-translate](https://github.com/ngx-translate/core)
- [ ] [Protractor](https://www.protractortest.org/)
- [ ] [Storybooks](https://storybook.js.org/docs/guides/guide-angular/)
- [ ] [Angular Material](https://material.angular.io/)
- [ ] Mocks server: As an independent project with [Faker](https://github.com/marak/Faker.js/) and [json-server](https://github.com/typicode/json-server)
- [ ] [Cypress](https://www.cypress.io/)
- [ ] [Stylelint](https://stylelint.io/)
- [ ] [Sass](https://sass-lang.com/)

---
## Getting Started


### Requirements

- [ ] [Ionic](https://ionicframework.com)
- [ ] [Angular](https://angular.io/guide/quickstart)
- [ ] [Node](https://nodejs.org/es/)
- [ ] Npm: v6.4.1

### Installing

```
npm install
```

To run the application:

```
npm run start
```

You can see the result of the demo in [localhost:4200](http://localhost:4200)

### Running mocks server
```js
npm run mocks
```
You can see the result of the demo in [localhost:3000](http://localhost:3000)

### Running the tests

Units and integration tests:
```js
npm run test
```


E2E:
```js
npm run cypress:open
```

### Deployment
```js
npm run build:pro
```

## Deploy in Android Emulator o phone connected
### Requisitos
- [Android Studio](https://developer.android.com/studio/?gclid=CjwKCAjwue3nBRACEiwAkpZhmVKxyIRjZ8cZSyr0OlCuMuBd_tIezcSIoEJJichV6pG802yS6tBqNRoCLBIQAvD_BwE)
- [JAVA JDK or JRE](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Gradle](https://gradle.org/install/)


Run in android device:
```js
ionic cordova run android -l
```

Debug app with google tools, copy + paste in your browser:  `chrome://inspect/#devices`

---

## Authors

- **Jesús Jávega**

See also the list of [contributors](https://github.com/jeiker26/ionic-simple-record-player/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



[logo]: https://github.com/jeiker26/ionic-simple-record-player/master/demo/demo.gif "Demo image"

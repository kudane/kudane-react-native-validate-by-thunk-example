# react-native-validate-by-thunk-example
ประยุกต์ใช้ redux-thunk ในการกำหนด workflow ของการทำ business logic

# Purpose

  - ประยุกต์ใช้ redux-thunk
  - กำหนดการทำ business logic (action worker)
  
# Structure
```
src
└───actions
│     └──actionType.js  
│     └──actionCreator.js
│     └──actionWorker.js    //<= เขียน business logic ไว้ที่นี่
└───api
│     └──toast.js
└───components
│     └──Btn.js
│     └──ShowNumber.js
│     └──Toolbar.js
└───containers
│     └──buttonContainer.js
│     └──displatContainer.js
└───reducers
│     └──index.js.js
│     └──number.js
└───store
│     └──configureStore.js
└─ App.js
```

## Installation

```
cd react-native-validate-by-thunk-example

npm install
yarn install

react-native run-android
```
## Demo example

![](https://github.com/kudane/react-native-validate-by-thunk-example/blob/master/images/Screenshot_1.png)
![](https://github.com/kudane/react-native-validate-by-thunk-example/blob/master/images/Screenshot_2.png)

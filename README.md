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

# Program Description

> โปรแกรมการ บวก ลบ ค่าตัวเลขที่แสดงบนหน้าจอ โดยจะทำการเช็คว่าการ บวกหรือลบ จะต้องอยู่ในช่วง 1-10, มิฉะนั้นจะแสดง Toast เพื่อแสดงความผิดพลาดบนหน้าจอ

> โดยใช้คุณสมบัติของ redux-thunk เพื่อเช็คช่วง 1-10 ของ state และถ้าเกินช่วง 1-10 ก็จะแสดง error, มิฉะนั้นจะทำการ dispatch ตามการทำงานของ action worker ที่เรียกใช้

## Installation

```
cd react-native-validate-by-thunk-example

npm install
yarn install

react-native run-android
```
## Demo example

![](https://github.com/kudane/react-native-validate-by-thunk-example/blob/master/images/screen_demo.gif)


# firestore-data-extractor

## Description

    npm package for Getting Firestore data from single document as well as collection (array)

## Installation

    keep this in mind that you needt to setup your firestore first nad get tha doc by either calling
    firestore().doc("docref").get() or firestore().doc("docref").on() then pass the response to getSingleData() to get the data and id with it

    `npm i firestore-data-extractor --save`
    ```
    import firestore from '@react-native-firebase/firestore'
    import {getSingleData,getMultipleData} from 'firestore-data-extractor';

    const tempdata = await firestore().doc("users/test001).get()

    const userdata = getSingleData(tempdata) // this will return single object with id and data

    const userList = getMultipleData( await firestore().collection('users').get()) // this will return all documents as array with ids and data in single object


    ```

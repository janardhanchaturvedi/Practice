import React from 'react'
import CryptoJS from 'crypto-js'

function Encrypt(text , key) {
    const encData = CryptoJS.AES.encrypt(JSON.stringify(text),key).toString();
    return encData;
  
}

function Decrypt(text , key){
    const bytes = CryptoJS.AES.decrypt(text, key);
    const decdata = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decdata;

}
export {Encrypt , Decrypt}
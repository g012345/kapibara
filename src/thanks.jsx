import React from 'react';
import LogoOk from './logo/logook';
import style from "./css/index.module.css"

const Thanks = () => {
  return (
    <div className={style.thanksbox}>
        <div className={`${style.thankscont} ${style.flex}`}>
            <div className={style.logook}><LogoOk></LogoOk></div>
            <div className={style.thankstext}>Спасибо за предоставленную информацию, мы свяжемся с вами в ближайшее время.</div>
        </div>
    </div>
  );
};

export default Thanks
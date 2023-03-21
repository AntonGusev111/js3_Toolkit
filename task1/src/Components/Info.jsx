import React from 'react'
import { useSelector } from "react-redux";


export default function Info() {


    const count = useSelector((state) => state.counter);


    const list = [
        "прообразом Чубакки стал пёс режиссёра",
        "актёрам разрешили подобрать любимый цвет для своих световых мечей",
        "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
        "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
        "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок"
    ]

    const render = list.slice(0,count).map((element)=>{
        return(
            <>
            <li key={element}>{element}</li>
            </>
        )
    })

  return (
    <div>
      {render}
    </div>
  )
}

import React from 'react'
import Carditem from './Components/Carditem'
import Data from './Components/Data'
export default function App() {
  return (
<>
<Carditem img ={Data[0].img}
name = {Data[0].name}
price = {Data[0].pricenow}
discount = {Data[0].discount}
button1 = {Data[0].plusbutton}
button2 = {Data[0].minusbutton}
remove = {Data[0].deletebutton}


></Carditem>
<Carditem  img ={Data[1].img}
name = {Data[1].name}
price = {Data[1].pricenow}
discount = {Data[1].discount}
button1 = {Data[1].plusbutton}
button2 = {Data[1].minusbutton}
remove = {Data[1].deletebutton}
></Carditem>
<Carditem  img ={Data[2].img}
name = {Data[2].name}
price = {Data[2].pricenow}
discount = {Data[2].discount}
button1 = {Data[2].plusbutton}
button2 = {Data[2].minusbutton}
remove = {Data[2].deletebutton}
></Carditem>
</>
  )
}

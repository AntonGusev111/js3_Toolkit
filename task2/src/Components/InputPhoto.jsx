import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { addPhoto } from '../Slices/PhotoReducer';


export default function InputPhoto() {
  const [drag, setDrag] = useState(false);
  const dispatch = useDispatch();

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true)
  };

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false)
  }

  const setImgValues =(file)=>{
    const fr = new FileReader();
    fr.onload = () => {
    dispatch(addPhoto({url:fr.result}))
  };
  
  fr.readAsDataURL(file);
  };


  const onDropHandler = (e) =>{
    e.preventDefault();
    let files = [...e.dataTransfer.files]
    let file = files[0];
    files.map((file)=>{
      if(file.type == 'image/jpeg'){
        setImgValues(file)
      }
    })

    setDrag(false)
  }



  return (
    <div>
      <div className="prev"></div>
        {
          drag? <div className='DropArea'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop ={onDropHandler}
          > Отпустите файлы</div>
          :<div className='LoadArea'
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          > Загрузите файлы </div>
        }
    </div>
  )
}

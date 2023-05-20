import { FormatarData } from '../fn-helpers/Data';
import './Card.css';
import {BsTrash2Fill} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi';

import { useState } from 'react';
function Card(props) {
  const {id,data,desc,price} = props
  const [isDelete,setIsDelete] = useState(false);

  const deleteMode=()=>{
    setIsDelete(true);
    setTimeout(()=>{
      props.deleteTravel(id)
    },700)
  }
  const setEditing = ()=>{
    props.setTravel({
      nome: props.nome,
      data: data.slice(0,16),
      desc: desc,
      price: price
    })
    props.setEditID(id)
  }
  return (
    <>
      <div className={isDelete? "card disappear": "card"}>
        <h1>{props.nome}</h1>
        <div className="conteudoCard">
          <p>{desc}</p>
          <p>{FormatarData(data)}</p>
          <p className='price'>{price}</p>
        </div>
        <div className="bottom">
          <div className="btns">
            <div 
              onClick={()=>deleteMode()}
              id="trashDelete"
              className='icons'
            >
              <BsTrash2Fill size={32}/>
            </div>
            <div 
              id="editIcon" 
              className="icons"
              onClick={()=>setEditing()}
            >
              <FiEdit size={32}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
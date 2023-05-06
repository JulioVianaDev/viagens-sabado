function Form({EnvioFormulario,travel,setTravel}){
  return(
    <>
      <form onSubmit={EnvioFormulario}>
        <input 
          id="nome"
          required
          value={travel.nome}
          placeholder='Nome da viagem'
          onChange={(e)=>setTravel({...travel,nome: e.target.value})}
        />
        <textarea
          required
          id= "desc"
          onChange={(e)=>setTravel({...travel,desc: e.target.value})}
          value={travel.desc}
          placeholder='Descrição da viagem'
        />
        <input
          required
          type='datetime-local'
          id="data"
          value={travel.data}
          placeholder='Data'
          onChange={(e)=>setTravel({...travel,data: e.target.value})}
        />
        <input
          id='price'
          required
          value={travel.price}
          placeholder='Preço'
          type='number'
          onChange={(e)=>setTravel({...travel,price: e.target.value})}
        />
        <button>Cadastrar Viagem</button>
      </form>
    </>
  )
}

export default Form;
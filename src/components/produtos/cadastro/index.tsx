import {useState } from 'react'
import { Layout, Input} from 'components'

export const CadastroProduto: React.FC = () => {

  const [ sku, setSku] = useState<string>('')
  const [ preco, setPreco ] = useState<string>('')
  const [ nome, setNome] = useState<string>('')
  const [ descricao, setDescricao] = useState<string>('')

  const submit = () =>{
    const produto = {
      sku,
      preco, 
      nome, 
      descricao
    }
    console.log(produto)
  }
    return (
        <Layout titulo="Produtos">
          <div className="columns">
            <Input label="SKU: *"
                   columnClasses="is-half"
                   onChange={setSku}/>
            <div className="field is-half column">
              <label className="label" htmlFor="inputSku">SKU: *</label>
                <div className="control">
                   <input className="input"
                     id="inputSku" value={sku}
                     onChange={ event => setSku(event.target.value)}
                     placeholder="Digite o SKU do produto"/>
                 </div>
            </div>

            <div className="field is-half column">
              <label className="label" htmlFor="inputPreco">Preço: *</label>
                <div className="control">
                   <input className="input"
                     id="inputPreco" value={preco}
                     onChange={ event => setPreco(event.target.value)}
                     placeholder="Digite o Preço do produto"/>
                 </div>
            </div>
           </div>

           <div className="columns">
           <div className="field column is-full">
              <label className="label" htmlFor="inputNome">Nome: *</label>
                <div className="control">
                   <input className="input" value={nome}
                     id="inputNome"
                     onChange={ event => setNome(event.target.value)}
                     placeholder="Digite o Nome do produto"/>
                 </div>
           </div>
           </div>

           <div className="columns">
           <div className="field column is-full">
              <label className="label" htmlFor="inputDesc">Descrição: *</label>
                <div className="control">
                   <input className="textarea"
                     id="inputDesc" value={descricao}
                     onChange={ event => setDescricao(event.target.value)}
                     placeholder="Digite a descrição do produto"/>
                 </div>
           </div>
           </div>

           <div className="field is-grouped">
            <div className="control">
              <button onClick={submit} className="button is-link">Salvar</button>
            </div>
            <div className="control">
              <button  className="button is-link is-light">Voltar</button>
            </div>
           </div>
           
        </Layout>
    )
}
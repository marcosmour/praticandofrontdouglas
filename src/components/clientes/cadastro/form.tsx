import { Cliente } from "app/models/clientes"
import {useFormik} from 'formik'
import {Input} from 'components'

interface ClienteFormProps {
    cliente:Cliente;
    onSubmit: (cliente: Cliente) => void;
}

const formScheme: Cliente = {
    cadastro: '',
    cpf: '063.039.013-44',
    dataNascimento: '01/03/2023',
    email: '',
    endereco: '',
    id: '',
    nome: '',
    telefone: ''

}

export const ClienteForm: React.FC<ClienteFormProps> = ({
    cliente,
    onSubmit
}) =>{

    const formik = useFormik<Cliente>({
        initialValues: { ...formScheme, ...cliente},
        onSubmit,
    })


    return(
        <form onSubmit={formik.handleSubmit}>
            {formik.values.id &&
            <div className="columns">
            <Input id="id"
                   name="id"
                   label="Código:"
                   autoComplete="off"
                   disabled
                   columnClasses="is-half"
                   value={formik.values.id}/>
           
            <Input id="cadastro"
                   name="cadastro"
                   label="Data Cadastro:"
                   autoComplete="off"
                   disabled
                   columnClasses="is-half"
                   value={formik.values.cadastro}/>
           </div>
           }
           <div className="columns">
            <Input id="nome"
                   name="nome"
                   label="Nome: *"
                   columnClasses="is-full"
                   onChange={formik.handleChange}
                   value={formik.values.nome}/>
           </div>
           <div className="columns">
            <Input id="cpf"
                   name="cpf"
                   label="CPF: *"
                   autoComplete="off"
                   columnClasses="is-half"
                   onChange={formik.handleChange}
                   value={formik.values.cpf}/>
           
            <Input id="dataNascimento"
                   name="dataNascimento"
                   label="Data Nascimento: *"
                   autoComplete="off"
                   columnClasses="is-half"
                   onChange={formik.handleChange}
                   value={formik.values.dataNascimento}/>
           </div>
           <div className="columns">
            <Input id="endereco"
                   name="endereco"
                   label="Endereço: *"
                   columnClasses="is-full"
                   autoComplete="off"
                   onChange={formik.handleChange}
                   value={formik.values.endereco}/>
           </div>
           <div className="columns">
            <Input id="email"
                   name="email"
                   label="Email: *"
                   autoComplete="off"
                   columnClasses="is-half"
                   onChange={formik.handleChange}
                   value={formik.values.email}/>
            <Input id="telefone"
                   name="telefone"
                   label="Telefone: *"
                   autoComplete="off"
                   columnClasses="is-half"
                   onChange={formik.handleChange}
                   value={formik.values.telefone}/>
            </div>
           
            <div className="field is-grouped">
                 <div className="control is-link">
                      <button type="submit" className="button is-link">
                          {formik.values.id ? "Atualizar" : "Salvar" }
                      </button>
                </div>
            </div>
        </form>
    )
}
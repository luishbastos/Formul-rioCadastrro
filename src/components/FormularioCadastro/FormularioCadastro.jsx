import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';


function FormularioCadastro({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [CPF, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({CPF:{valido:true, texto:""}})
     
 return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        aoEnviar({nome, sobrenome, CPF, promocoes, novidades});
        }}
    >
     <TextField 
        value ={nome}
        onChange={event =>{
            setNome( event.target.value);
        }}
        id="NomeUsuario" 
        variant="outlined" 
        label="Nome" 
        margin="normal" 
        fullWidth
     />

     <TextField 
        value={sobrenome}
        onChange={event =>{
            setSobrenome(event.target.value);
        }} 
        id="SobrenomeUsuario" 
        variant="outlined" 
        label="Sobrenome" 
        margin="normal" 
        fullWidth
     />   

     <TextField 
        value={CPF}
         onChange={event =>{
            setCPF(event.target.value);
        }}
        onBlur={(event)=>{
            const valido = validarCPF(CPF);
            setErros({CPF:valido})
        }}
        error={!erros.CPF.valido}
        helperText={erros.CPF.texto}
        id="CPFUsuario" 
        variant="outlined" 
        label="CPF" 
        margin="normal" 
        fullWidth
     />

     <FormControlLabel 
        label="Promoções" 
        control={<Switch
        checked={promocoes}
        onChange={(event)=>{
            setPromocoes(event.target.checked)
        }}
        name="Promoções" 
        color="secondary"/>
        }
     />

     <FormControlLabel 
        label="Novidades" 
        control={<Switch
        checked={novidades}
        onChange={(event)=>{
            setNovidades(event.target.checked)
        }}
        name="Novidades" 
        color="secondary"/>
    }
     />

     <Button 
        color="primary" 
        variant="contained" 
        type="submit">Cadastrar
    </Button>
 </form>
 )
}


export default FormularioCadastro;
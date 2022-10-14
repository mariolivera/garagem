import { Button } from "@mui/material"
import foto from "./img.svg"
import Link from "react-router-dom"

export default function Notfaund(){
    return(
        <div style={{textAligin: 'center'}}>
            <h2>Conteudo não encontrado</h2>
            <img windt="100%" src={foto}/>

            <Link to='/'>
                <Button variant="outlined"> voltar para o inicio</Button>
            </Link>
        </div>
    )
}
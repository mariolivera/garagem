import { Button, Divider, TextField } from "@mui/material"

import "./styles.css"


export default function Login() {
    return(
        <div className="login">
            <h2>Login</h2>
            
            <Divider/>

            <form>
                <TextField label="email" fullWidth/>
                <TextField label="senha" type="password" fullWidth/>
                <Button variant="contained" fullWidth> Entrar </Button>
            </form>
        </div>
    )
}
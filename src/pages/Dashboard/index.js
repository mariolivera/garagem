import React from "react"
import {Card, CardContent, CardActionArea} from "@mui/icons-material"
import {DirectionsCar, TwoWheeler, DirectionsBike} from "@mui/icons-material"


function Informacao (props) {
    return (
        <Card style={{marginTop: 10}}>
            <CardContent>
            <DirectionsCar/>
            {props.icone}
            <strong style={{marginRight:'0 10px'}}> 
            {props.quantidade}</strong>

                {props.titulo}
            </CardContent>
        </Card>
    )
}

export default function Dashboard (){
    return (
        <>
            <Informacao icone={<DirectionsCar/>} qtd="10" titulo="Carros" />
            <Informacao icone={<TwoWheeler/>} qtd="11" titulo="Bicicleta"/>
            <Informacao icone={<DirectionsBike/>} qtd="21" titulo="motos"/>
        </>
    )
}
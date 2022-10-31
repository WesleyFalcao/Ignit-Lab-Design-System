import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react"


export interface InterfaceDiv{
    children: ReactNode
}

export function DivTeste(props: InterfaceDiv){
    return(
        <div className="flex items-center gap-3 py-4 h-12 px-3 bg-gray-800 rounded w-full focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}
DivTeste.displayname = "Div_Teste"


export interface InterfaceIcon {
    children: ReactNode
}

export function TesteIcon(props: InterfaceIcon){
    return(
        <Slot className="w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}
TesteIcon.displayname = "Teste_Icon"


export interface InterfaceInput extends InputHTMLAttributes<HTMLInputElement>{}

export function InputTeste(props: InterfaceInput){
    return(
        <input className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" 
        {...props}
        />
    )
}
InputTeste.displayname = "Input_Teste"

export const Testando = {
    Div: DivTeste,
    Input: InputTeste,
    Icon: TesteIcon
}
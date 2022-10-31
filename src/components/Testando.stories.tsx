import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { InterfaceDiv, Testando } from "./Testando";

export default{
    title: 'Components/Testando',
    component: Testando.Div,
    args: {
        children: [
            <Testando.Icon>
                <Envelope/>
            </Testando.Icon>,
            <Testando.Input placeholder="Testando">
            </Testando.Input>
        ]
    }
} as Meta<InterfaceDiv>

export const Default: StoryObj<InterfaceDiv> = {}

export const TestandoSemIcone = {
    args: {
        children: [
            <Testando.Input placeholder="Testando sem ícone">
            </Testando.Input>
        ]
    }
}
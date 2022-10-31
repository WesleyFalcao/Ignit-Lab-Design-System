import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from "./Text";

export default{
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Teste',
        size: 'sm'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },

    //Desabilitando a propriedade para que não seja exibido
    argTypes:{
        children:{
            table :{
                disable: true
            }
        },
        asChild: {
            table:{
                disable: true
            }
        }
    },
    
}
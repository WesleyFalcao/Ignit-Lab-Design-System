import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check} from 'phosphor-react'

//dizendo as variações do texto
export interface CheckBoxProps{}

export function CheckBox({}: CheckBoxProps) {

    return (
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'></Check>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}

//com o clsx estou aplicando uma condicional para aplicar uma classe css
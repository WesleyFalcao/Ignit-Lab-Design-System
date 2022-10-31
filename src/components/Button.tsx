import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

//dizendo as variações do texto
export interface ButtonProps{
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild}: ButtonProps) {

    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-4 px-3 rounded font-semibold text-black bg-cyan-500 transition-colors hover:bg-cyan-300 text-sm w-full'
        )}>
        {children}
        </Comp>
    )
}

//com o clsx estou aplicando uma condicional para aplicar uma classe css
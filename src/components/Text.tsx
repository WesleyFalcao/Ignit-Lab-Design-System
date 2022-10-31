import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

//dizendo as variações do texto
export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//{size = 'md'} estou dizendo um valor default
export function Text({size = 'md', children, asChild}: TextProps) {

    const Comp = asChild ? Slot : 'span';

    return (
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size == 'sm',
                'text-sm': size == 'md',
                'text-md': size == 'lg',
            }
        )}>
        {children}
        </Comp>
    )
}

//com o clsx estou aplicando uma condicional para aplicar uma classe css
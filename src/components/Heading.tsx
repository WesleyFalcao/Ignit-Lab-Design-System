import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react';

//dizendo as variações do texto
export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

//{size = 'md'} estou dizendo um valor default
export function Heading({size = 'md', children, asChild}: HeadingProps) {

    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp className={clsx(
            'text-gray-100 font-sans font-bold',
            {
                'text-lg': size == 'sm',
                'text-xl': size == 'md',
                'text-2xl': size == 'lg',
            }
        )}>
        {children}
        </Comp>
    )
}

//com o clsx estou aplicando uma condicional para aplicar uma classe css
import React from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                autoplay?: boolean;
                'camera-controls'?: boolean;
                'disable-zoom'?: boolean;
                'auto-rotate'?: boolean;
                'rotation-per-second'?: string;
                'shadow-intensity'?: string;
                'environment-image'?: string;
                exposure?: string;
                'interaction-prompt'?: string;
                'animation-name'?: string;
            };
        }
    }
}
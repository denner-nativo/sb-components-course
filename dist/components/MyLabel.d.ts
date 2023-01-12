/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     * This is the text that will be applied
     */
    label: string;
    /**
     * This is the sizes available
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * This is for capitalize the text?
     */
    allCaps?: boolean;
    /**
     * Colors for the text?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Choose a random color
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;

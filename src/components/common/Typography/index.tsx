import { TypographyPropsType } from "./typography.types";
import './typography.scss'

/**
 * `Typography` component for rendering text with customizable styles.
 *
 * This component allows for the display of text with various styles and behaviors
 * based on the provided properties. It supports different sizes, colors,
 * and alignments, in addition to an optional click event handler.
 * 
 * @template {string | number} text - Text to be displayed.
 * 
 * @template {string} size - Text size, as defined by `SizeText`.
 * 
 * @template {string} color - Text color, one of those defined  'primary'
 * 
 * @template {'bold' | 'semibold' | 'normal'} bold -  bold style text
 * 
 * @template {() => void} onClick - Optional handler for click events.
 * 
 * @template {boolean} center - If true, centers the text.
 * 
 * @template {HTMLElementTagNameMap} - HTML element name 'div', 'p' , 'h1' etc...
 * 
 * @template {string} className - Additional classes for custom styling.
 */

export const Typography: React.FC<TypographyPropsType> = ({
    bold = "normal",
    size = "medium",
    color = "primary",
    HtmlTag: Element = "p",
    fontFamily = "primary",
    text,
    onClick,
    center,
    className,
}: TypographyPropsType): JSX.Element => (
    <Element
        className={`
        ${size}
        ${color}
        ${bold}
        ${className}
        ${onClick && "cursor-pointer hover:underline"}
        ${center && "text-center"}
        ${`family-${fontFamily}`}
        `}
        onClick={onClick}
    >
        {text}
    </Element>
);

export type ColorsTypes =
    | "primary"

export type SizeText =
    | "small"
    | "medium"
    | "large"
    | "medium-large"
    | "extra-small"
    | "extra-large";

export type BoldTypes = "bold" | "semibold" | "normal";

export type FontFamily = 'primary' | 'titles'

export type TypographyPropsType = {
    text: string | number;

    size?: SizeText;

    color?: ColorsTypes;

    onClick?: () => void;

    center?: boolean;

    className?: string;

    bold?: BoldTypes;

    HtmlTag?: keyof JSX.IntrinsicElements;

    fontFamily?: FontFamily
};

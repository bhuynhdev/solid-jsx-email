import { JSX, mergeProps, splitProps } from 'solid-js'

type FallbackFont =
	| 'Arial'
	| 'Helvetica'
	| 'Verdana'
	| 'Georgia'
	| 'Times New Roman'
	| 'serif'
	| 'sans-serif'
	| 'monospace'
	| 'cursive'
	| 'fantasy'

type FontFormat = 'woff' | 'woff2' | 'truetype' | 'opentype' | 'embedded-opentype' | 'svg'
type FontStyle = JSX.CSSProperties['font-style']
type FontWeight = JSX.CSSProperties['font-weight']

interface FontProps {
	fallbackFontFamily: FallbackFont | FallbackFont[]
	/** The font you want to use. NOTE: Do not insert multiple fonts here, use fallbackFontFamily for that */
	fontFamily: string
	/** Default: 'normal' */
	fontStyle?: FontStyle
	/** Default: 400 */
	fontWeight?: FontWeight
	/** Not all clients support web fonts. For support check: https://www.caniemail.com/features/css-at-font-face/ */
	webFont?: {
		format: FontFormat
		url: string
	}
}

export function Font(props: FontProps) {
	props = mergeProps({ fontStyle: 'normal', fontWeight: 400 }, props)

	const src = () => (props.webFont ? `src: url(${props.webFont.url}) format('${props.webFont.format}');` : '')
	const style = () => `
    @font-face {
      font-family: '${props.fontFamily}';
      font-style: ${props.fontStyle};
      font-weight: ${props.fontWeight};
      mso-font-alt: '${
				Array.isArray(props.fallbackFontFamily) ? props.fallbackFontFamily[0] : props.fallbackFontFamily
			}';
      ${src()}
    }

    * {
      font-family: '${props.fontFamily}', ${
				Array.isArray(props.fallbackFontFamily) ? props.fallbackFontFamily.join(', ') : props.fallbackFontFamily
			};
    }
  `
	return <style innerHTML={style()} />
}

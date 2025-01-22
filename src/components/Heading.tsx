import { JSX, splitProps } from 'solid-js'
import { BaseProps } from './types'
import { Dynamic } from 'solid-js/web'

export type PresentAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type MarginTypes = 'margin' | 'margin-left' | 'margin-right' | 'margin-top' | 'margin-bottom'

type MarginCSSProperties = Pick<JSX.CSSProperties, MarginTypes>

export interface MarginProps {
	m?: number | string
	mx?: number | string
	my?: number | string
	mt?: number | string
	mr?: number | string
	mb?: number | string
	ml?: number | string
}

export type HeadingProps = BaseProps<PresentAs> & MarginProps & { as: PresentAs }

/**
 * Utility to create an object whose keys are elements of `properties` and value is `value`
 */
const _createMarginStyle = (value: number | string | undefined, properties: MarginTypes[]) => {
	return properties.reduce((styles, property) => {
		if (value && !isNaN(Number(value))) {
			return { ...styles, [property]: `${value}px` }
		}
		return styles
	}, {} as MarginCSSProperties)
}

const createMarginStyle = (props: MarginProps) => {
	const marginStyles = [
		_createMarginStyle(props.m, ['margin']),
		_createMarginStyle(props.mx, ['margin-left', 'margin-right']),
		_createMarginStyle(props.my, ['margin-top', 'margin-bottom']),
		_createMarginStyle(props.mt, ['margin-top']),
		_createMarginStyle(props.mr, ['margin-right']),
		_createMarginStyle(props.mb, ['margin-bottom']),
		_createMarginStyle(props.ml, ['margin-left']),
	]
	const mergedStyles = marginStyles
		.filter(s => Object.keys(s).length) // filter out objects that have no keys
		.reduce((acc, style) => {
			return { ...acc, ...style }
		}, {})
	return mergedStyles
}

export function Heading(props: HeadingProps) {
	const [local, marginProps, rest] = splitProps(props, ['children', 'style'], ['m', 'mx', 'my', 'mt', 'mb', 'mr', 'ml'])
	return (
		<Dynamic
			component={props.as}
			{...rest}
			style={{ ...createMarginStyle(marginProps), ...(local.style as JSX.CSSProperties) }}
		>
			{props.children}
		</Dynamic>
	)
}

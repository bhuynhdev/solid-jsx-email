import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface ColumnProps extends BaseProps<'td'> {
	bgColor?: string
	bgImage?: string
}

export function Column(props: ColumnProps) {
	const [local, rest] = splitProps(props, ['children', 'style', 'bgColor', 'bgImage'])

	return (
		<td
			// @ts-expect-error: `background` and `bgcolor` not documented
			background={local.bgImage}
			bgcolor={local.bgColor}
			{...rest}
			style={local.style}>
			{local.children}
		</td>
	)
}

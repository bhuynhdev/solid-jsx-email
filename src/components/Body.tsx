import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface BodyProps extends BaseProps<'body'> {}

export function Body(props: BodyProps) {
	const [local, rest] = splitProps(props, ['children', 'style'])

	return (
		<body {...rest} style={local.style}>
			{local.children}
		</body>
	)
}

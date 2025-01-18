import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface BodyProps extends BaseProps<'body'> {}

export function Body(props: BodyProps) {
	const [self, rest] = splitProps(props, ['children', 'style'])

	return (
		<body {...rest} style={self.style}>
			{self.children}
		</body>
	)
}

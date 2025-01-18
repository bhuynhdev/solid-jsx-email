import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface LinkProps extends BaseProps<'a'> {}

export function Link(props: LinkProps) {
	const [local, rest] = splitProps(props, ['children', 'style', 'target'])

	return <a {...rest} target={local.target} style={local.style} />
}

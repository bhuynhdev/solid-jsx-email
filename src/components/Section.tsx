import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface SectionProps extends Omit<BaseProps<'table'>, 'cellPadding' | 'cellSpacing'> {}

export function Section(props: SectionProps) {
	const [local, rest] = splitProps(props, ['children', 'style'])

	return (
		<table align="center" width="100%" {...rest} style={local.style} border={0} cellPadding="0" cellSpacing="0" role="presentation">
			<tbody>
				<tr>
					<td>{local.children}</td>
				</tr>
			</tbody>
		</table>
	)
}

import { splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface RowProps extends BaseProps<'table'> {}

export function Row(props: RowProps) {
	const [local, rest] = splitProps(props, ['children', 'style'])

	return (
		<table align="center" width="100%" style={local.style} role="presentation" cellSpacing="0" cellPadding="0" border={0} {...rest}>
			<tbody style={{ width: '100%' }}>
				<tr style={{ width: '100%' }}>{local.children}</tr>
			</tbody>
		</table>
	)
}

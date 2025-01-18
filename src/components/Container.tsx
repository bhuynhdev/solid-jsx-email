import { JSX, mergeProps, splitProps } from 'solid-js'
import { BaseProps } from './types'

export interface ContainerProps extends Omit<BaseProps<'table'>, 'align' | 'cellPadding' | 'cellSpacing' | 'width'> {
	alignment?: 'center' | 'left' | 'right'
	containerWidth?: number
}

export function Container(props: ContainerProps) {
	const [local, rest] = splitProps(mergeProps(props, { containerWidth: 600 }), ['children', 'style', 'alignment', 'containerWidth'])

	return (
		<div style={{ 'table-layout': 'fixed', width: '100%' }}>
			<div style={{ margin: '0 auto', 'max-width': `${local.containerWidth}px` }}>
				{/* For Outlook versions < 2013: we need a table wrapper width set to `max-width` */}
				<span
					innerHTML={`<!--[if mso]><table align="${local.alignment}" width="${local.containerWidth}" style="border-spacing: 0; width:${local.containerWidth}px;" role="presentation"><tr><td><![endif]-->`}
				/>
				<table
					align={local.alignment}
					width="100%"
					role="presentation"
					cellSpacing="0"
					cellPadding="0"
					border={0}
					{...rest}
					style={{
						'max-width': `${local.containerWidth}px`,
						...(local.style as JSX.CSSProperties)
					}}>
					<tbody>
						<tr style={{ width: '100%' }}>
							<td align={local.alignment}>{local.children}</td>
						</tr>
					</tbody>
				</table>
				<span innerHTML={`<!--[if mso]></td></tr></table><![endif]-->`} />
			</div>
		</div>
	)
}

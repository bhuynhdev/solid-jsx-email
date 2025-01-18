import { JSX, Match, mergeProps, splitProps, Switch } from 'solid-js'
import { BaseProps } from './types'

export interface ButtonProps extends BaseProps<'a'> {
	align?: 'left' | 'center' | 'right'
	backgroundColor?: string
	borderColor?: string
	borderRadius?: number
	borderSize?: number
	fontSize?: number
	height: number
	href?: string
	textColor?: string
	width: number
	/** Only `true` if `Button` is nested in a `Background` component. Neccessary for good Outlook compatibility */
	withBackground?: boolean
}

export function Button(props: ButtonProps) {
	const defaultValues = {
		borderRadius: 0,
		borderSize: 1,
		fontSize: 16,
		align: 'left',
		withBackground: false
	} satisfies Partial<ButtonProps>

	const [local, rest] = splitProps(mergeProps(defaultValues, props), [
		'href',
		'children',
		'width',
		'height',
		'borderRadius',
		'textColor',
		'backgroundColor',
		'borderColor',
		'borderSize',
		'style',
		'fontSize',
		'align',
		'withBackground'
	])

	// Logic for arcsize
	// Math.floor(borderRadius / Min(Width, Height))
	const arcsize = Math.floor((local.borderRadius / local.height) * 100)
	// Logic for line-height
	// Height - (2 * borderSize)
	const lineHeight = local.borderSize ? local.height - 2 * local.borderSize : local.height

	const baseStyles = {
		'-webkit-text-size-adjust': 'none',
		'border-radius': `${local.borderRadius}px`,
		display: 'inline-block',
		'font-size': `${local.fontSize}px`,
		'line-height': `${lineHeight}px`,
		'max-width': `${local.width}px`,
		'text-align': 'center',
		'text-decoration': 'none',
		width: '100%'
	} satisfies JSX.CSSProperties

	// border styling
	const borderStyles = {
		border: `${local.borderSize}px solid ${local.borderColor}`,
		// @ts-ignore: valid prop `mso-border-alt:none;`
		msoBorderAlt: 'none'
	}

	const propStyles = {
		...(local.borderColor ? borderStyles : {}), // border styles
		...(local.backgroundColor ? { 'background-color': local.backgroundColor } : {}), // background styles
		...(local.textColor ? { color: local.textColor } : {}) // text styles
	} satisfies JSX.CSSProperties

	const baseButton = (
		<a
			href={local.href}
			style={{
				...baseStyles,
				...propStyles,
				...(local.style as JSX.CSSProperties),
				...(local.withBackground ? {} : { msoHide: 'all' })
			}}
			{...rest}>
			{local.children}
		</a>
	)

	return (
		<table width="100%" border={0} cellPadding={0} cellSpacing={0} style={{ 'border-collapse': 'collapse' }} role="presentation">
			<tbody>
				<tr>
					<td align={local.align}>
						{/* VML Fallback for mso clients */}
						<Switch>
							<Match when={!local.withBackground}>
								<span
									innerHTML={`<!--[if mso]>
                <v:roundrect
                  xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                  style="height:${local.height}px;v-text-anchor:middle;width:${local.width}px;"
                  arcsize="${arcsize}%"
                  ${local.borderColor ? `strokecolor=${local.borderColor}` : ''}
                  ${local.borderSize ? `strokeweight="${local.borderSize}px"` : `stroke="false"`}
                  ${local.backgroundColor ? `fillcolor=${local.backgroundColor}` : `fill="false"`}
                >
                <w:anchorlock/>
                <center style="font-size:${local.fontSize}px;${local.textColor ? `color:${local.textColor};` : ''}">
                ${local.children}
                </center></v:roundrect>
                <![endif]-->`}
								/>
								{baseButton}
							</Match>
							<Match when={local.withBackground}>
								<table align={local.align} width={local.width} border={0} cellPadding={0} cellSpacing={0} role="presentation">
									<tbody>
										<tr>
											<td
												// @ts-ignore: `bgcolor` not documented
												bgcolor={local.backgroundColor}
												width={local.width}
												height={local.height}
												style={{
													'border-radius': `${local.borderRadius}px`,
													height: `${local.height}px`,
													width: `${local.width}px`,
													'max-width': `${local.width}px`,
													'text-align': 'center'
												}}>
												{baseButton}
											</td>
										</tr>
									</tbody>
								</table>
							</Match>
						</Switch>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

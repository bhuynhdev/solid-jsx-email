import { JSX, splitProps } from 'solid-js'
import { BaseProps } from './types'

type TextProps = BaseProps<'p'>

export function Text(props: TextProps) {
	const [local, rest] = splitProps(props, ['style'])
	return (
		<p
			{...rest}
			style={{
				'font-size': '14px',
				'line-height': '24px',
				margin: '16px 0',
				...(local.style as JSX.CSSProperties)
			}}
		/>
	)
}

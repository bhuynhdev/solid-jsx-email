import { JSX, splitProps } from 'solid-js'
import { BaseProps } from './types'

interface HrProps extends BaseProps<'hr'> {}

export function Hr(props: HrProps) {
	const [local, rest] = splitProps(props, ['style'])

	return (
		<hr
			{...rest}
			style={{
				border: 'none',
				'border-top': '1px solid #eaeaea',
				width: '100%',
				...(local.style as JSX.CSSProperties),
			}}
		/>
	)
}

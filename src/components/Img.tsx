import { JSX, splitProps } from 'solid-js'
import { BaseProps } from './types'

interface ImgProps extends BaseProps<'img'> {}

export function Img(props: ImgProps) {
	const [local, rest] = splitProps(props, ['alt', 'src', 'width', 'height', 'style'])
	return (
		<img
			{...rest}
			alt={local.alt}
			src={local.src}
			width={local.width}
			height={local.height}
			style={{
				border: 'none',
				display: 'block',
				outline: 'none',
				'text-decoration': 'none',
				...(local.style as JSX.CSSProperties),
			}}
		/>
	)
}

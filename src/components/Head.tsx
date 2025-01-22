import { Show, splitProps } from 'solid-js'
import { BaseProps } from './types'

interface HeadProps extends BaseProps<'head'> {
	enableFormatDetection?: boolean
}

export function Head(props: HeadProps) {
	const [local, rest] = splitProps(props, ['children', 'enableFormatDetection'])
	return (
		<head {...rest}>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
			<meta name="x-apple-disable-message-reformatting" />
			<Show when={!local.enableFormatDetection}>
				<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
			</Show>
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
			<meta name="x-apple-disable-message-reformatting" />
			<Show when={!local.enableFormatDetection}>
				<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
			</Show>
			{
				'<!--[if mso]><xml><o:OfficeDocumentSettings><o:AllowPNG></o:AllowPNG><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->'
			}
			{local.children}
		</head>
	)
}

import { BaseProps } from './types'
import { splitProps } from 'solid-js'

export interface HtmlProps extends BaseProps<'html'> {}

export function Html(props: HtmlProps) {
	const [local, rest] = splitProps(props, ['children', 'lang', 'dir'])
	const lang = local.lang || 'en'
	const dir = local.dir || 'ltr'

	return (
		<html {...rest} lang={lang} dir={dir}>
			{local.children}
		</html>
	)
}

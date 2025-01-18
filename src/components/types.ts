import { ComponentProps, ValidComponent } from 'solid-js'

export type BaseProps<TElement extends ValidComponent> = ComponentProps<TElement>

declare global {
	namespace globalThis {
		// eslint-disable-next-line vars-on-top, no-var
		var isJsxEmailPreview: boolean
	}

	interface ImportMeta {
		isJsxEmailPreview: boolean
	}
}

declare module 'solid-js' {
	// Add back deprecated attributes to Table element
	// Credit: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v18/index.d.ts#L3572
	interface TableExtraHTMLAttributes<T> extends JSX.HTMLAttributes<T> {
		align?: 'left' | 'center' | 'right' | undefined
		bgcolor?: string | undefined
		border?: number | undefined
		cellPadding?: number | string | undefined
		cellSpacing?: number | string | undefined
		frame?: boolean | undefined
		rules?: 'none' | 'groups' | 'rows' | 'columns' | 'all' | undefined
		summary?: string | undefined
		width?: number | string | undefined
	}
	interface TdExtraHTMLAttributes<T> extends JSX.TdHTMLAttributes<T> {
		align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
		colSpan?: number | undefined
		headers?: string | undefined
		rowSpan?: number | undefined
		scope?: string | undefined
		abbr?: string | undefined
		height?: number | string | undefined
		width?: number | string | undefined
		valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined
	}
	namespace JSX {
		interface IntrinsicElements extends HTMLElementTags, HTMLElementDeprecatedTags, SVGElementTags {
			table: TableExtraHTMLAttributes<HTMLTableElement>
			td: TdExtraHTMLAttributes<HTMLTableCellElement>
		}
	}
}

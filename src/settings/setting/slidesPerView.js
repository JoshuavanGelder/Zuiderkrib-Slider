import { TextControl } from "@wordpress/components"

export const SlidesPerView = ({
	sliderSlidesPerView,
	setAttributes,
}) => (
	<TextControl
		label="Aantal slides per carousel"
		help="Only visible on the page and not in the editor"
		type="number"
		min="1"
		value={ sliderSlidesPerView || 0 }
		onChange={ ( value ) => setAttributes( { sliderSlidesPerView: parseInt( value ) } ) }
	/>
);